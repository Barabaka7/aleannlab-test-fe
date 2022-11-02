import { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { FaRegBookmark } from "react-icons/fa";
import { BsFillShareFill } from "react-icons/bs";
import { makeSomeStringMagic } from "../../helpers/parseString";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { Job } from "../../helpers/model";
import {
  BackButton,
  JobDetailsWrapper,
  JobDetailsDescriptionWrapper,
  JobMap,
  HeaderWrapper,
  Header,
  UtilitiesHeader,
  IconWithTextWrapper,
  ApplyNowButton,
  Description,
  AdditionalInfoInnerWrapper,
  AdditionalInfoBlocksWrapper,
  AdditionalInfoBlockEmploymentType,
  AdditionalInfoBlockBenefit,
  AttachedImg,
} from "./JobDetailesStyles";

interface JobDetailedProps {
  getJobById: (arg: string) => Job | undefined;
}

export const JobDetailed = ({ getJobById }: JobDetailedProps) => {
  const { currentJob } = useParams();
  const navigate = useNavigate();

  const [jobDetailed, setJobDetailed] = useState<Job>();

  useEffect(() => {
    if (currentJob) {
      setJobDetailed(getJobById(currentJob));
    }
  }, [getJobById, currentJob]);

  return (
    <JobDetailsWrapper>
      <JobDetailsDescriptionWrapper>
        <HeaderWrapper>
          <Header>Job Details</Header>
          <UtilitiesHeader>
            <IconContext.Provider
              value={{
                size: "18px",
                color: "#3A4562",
              }}
            >
              <IconWithTextWrapper>
                <FaRegBookmark />{" "}
                <span style={{ marginLeft: "10px", whiteSpace: "nowrap" }}>
                  Save to my list
                </span>
              </IconWithTextWrapper>
              <IconWithTextWrapper>
                <BsFillShareFill />{" "}
                <span style={{ marginLeft: "10px" }}>Share</span>
              </IconWithTextWrapper>
            </IconContext.Provider>
          </UtilitiesHeader>
        </HeaderWrapper>

        <ApplyNowButton>Apply now</ApplyNowButton>

        <Description>
          {makeSomeStringMagic(jobDetailed?.description)}
        </Description>

        <ApplyNowButton>Apply now</ApplyNowButton>

        <HeaderWrapper>
          <Header>Additional info</Header>
        </HeaderWrapper>
        <AdditionalInfoInnerWrapper>
          <span>Employment type</span>
          <AdditionalInfoBlocksWrapper>
            {jobDetailed?.employment_type.map((empl) => (
              <AdditionalInfoBlockEmploymentType>
                {empl}
              </AdditionalInfoBlockEmploymentType>
            ))}
          </AdditionalInfoBlocksWrapper>
          <span>Benefits</span>
          <AdditionalInfoBlocksWrapper>
            {" "}
            {jobDetailed?.benefits.map((ben) => (
              <AdditionalInfoBlockBenefit>{ben}</AdditionalInfoBlockBenefit>
            ))}
          </AdditionalInfoBlocksWrapper>
        </AdditionalInfoInnerWrapper>

        <HeaderWrapper>
          <Header>Attached images</Header>
        </HeaderWrapper>

        <AdditionalInfoBlocksWrapper>
          {jobDetailed?.pictures.map((pic, i) => {
            let photo = `${pic}?t=${Date.now()}`;
            return <AttachedImg src={photo} alt={`Company Photo ${i + 1}`} />;
          })}
        </AdditionalInfoBlocksWrapper>

        {/* <div>
          <IconContext.Provider value={{ size: "25px" }}>
            <BackButton onClick={() => navigate("/")}>
              <MdOutlineArrowBackIosNew />
              Return to job board
            </BackButton>
          </IconContext.Provider>
        </div> */}
      </JobDetailsDescriptionWrapper>
      <JobMap></JobMap>
    </JobDetailsWrapper>
  );
};
