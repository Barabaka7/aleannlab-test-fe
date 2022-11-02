import {
  JobPreviewWrapper,
  CompanyLogoSection,
  Logo,
  JobDescriptionWrapper,
  TextDark,
  TextSecondary,
  Rates,
  BookmarkAndDateWrapper,
  DescriptionRatesDateWrapper,
  RatesDateWrapper,
  BookmarkWrapper,
  StarWrapper,
} from "./JobPreviewStyles";

import { IconContext } from "react-icons";
import { FaStar } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { useNavigate } from "react-router-dom";

interface jobPreviewProps {
  jobPreviewData: {
    logo: string;
    jobName: string;
    title: string;
    address: string;
    date: string;
    jobId: string;
  };
}

export const JobPreview = ({ jobPreviewData }: jobPreviewProps) => {
  let navigate = useNavigate();

  const renderingDate = new Date();
  const postingDate = new Date(jobPreviewData.date);

  const passingDays = Math.floor(
    (renderingDate.getTime() - postingDate.getTime()) / (1000 * 60 * 60 * 24)
  );

  return (
    <JobPreviewWrapper onClick={() => navigate(`/job/${jobPreviewData.jobId}`)}>
      <CompanyLogoSection>
        <Logo
          src={`${jobPreviewData.logo}?t=${Date.now()}`}
          alt="Company Logo"
        />
      </CompanyLogoSection>

      <DescriptionRatesDateWrapper>
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

        <RatesDateWrapper>
          <Rates>
            <StarWrapper>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </StarWrapper>
          </Rates>

          <BookmarkAndDateWrapper>
            <IconContext.Provider
              value={{
                size: "20px",
              }}
            >
              <BookmarkWrapper>
                <FaRegBookmark />
              </BookmarkWrapper>{" "}
            </IconContext.Provider>
            {passingDays === 1
              ? `Posted ${passingDays} days ago`
              : `Posted ${passingDays} day ago`}
          </BookmarkAndDateWrapper>
        </RatesDateWrapper>
      </DescriptionRatesDateWrapper>
    </JobPreviewWrapper>
  );
};
