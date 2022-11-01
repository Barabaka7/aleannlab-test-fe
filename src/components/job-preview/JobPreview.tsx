import {
  JobPreviewWrapper,
  CompanyLogoSection,
  Logo,
  JobDescriptionWrapper,
  TextDark,
  TextSecondary,
  Rates,
  BookmarkAndDateWrapper,
} from "./JobPreviewStyles";

import { IconContext } from "react-icons";
import { FaStar } from "react-icons/fa";
import { BsFillBookmarkFill } from "react-icons/bs";
import { ImLocation } from "react-icons/im";

interface jobPreviewProps {
  jobPreviewData: {
    logo: string;
    jobName: string;
    title: string;
    address: string;
    date: string;
  };
}

export const JobPreview = ({ jobPreviewData }: jobPreviewProps) => {
  const renderingDate = new Date();
  const postingDate = new Date(jobPreviewData.date);

  const passingDays = Math.floor(
    (renderingDate.getTime() - postingDate.getTime()) / (1000 * 60 * 60 * 24)
  );

  return (
    <JobPreviewWrapper>
      <CompanyLogoSection>
        <Logo src={jobPreviewData.logo} alt="Company Logo" />
      </CompanyLogoSection>
      <JobDescriptionWrapper>
        <TextDark>{jobPreviewData.title}</TextDark>
        <TextSecondary>{jobPreviewData.jobName}</TextSecondary>

        <IconContext.Provider
          value={{
            style: { marginRight: "3px" },
            color: "#878D9D",
            size: "15px",
          }}
        >
          <TextSecondary>
            <ImLocation /> {jobPreviewData.address}
          </TextSecondary>
        </IconContext.Provider>
      </JobDescriptionWrapper>
      <Rates>
        <div>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
      </Rates>

      <BookmarkAndDateWrapper>
        <div>
          <BsFillBookmarkFill />
        </div>
        {passingDays === 1
          ? `Posted ${passingDays} days ago`
          : `Posted ${passingDays} day ago`}
      </BookmarkAndDateWrapper>
    </JobPreviewWrapper>
  );
};
