import { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { FaRegBookmark, FaRegStar } from "react-icons/fa";
import { BsFillShareFill } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import { makeSomeStringMagic } from "../../helpers/parseString";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { Map } from "../map/Map";

import { Job } from "../../helpers/model";
import {
  BackButton,
  JobDetailsWrapper,
  JobDetailsDescriptionWrapper,
  JobHeaderContactsAndMapWrapper,
  JobContactsAndMapWrapper,
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
  JobContactsWrapper,
  JobMap,
  TextAddress,
  TextName,
  Title,
  Days,
  Salary,
  TitleDaysAndSalaryWrapper,
  AddittionalInfoAndImagesWrapper,
  AttachedImagesInnerWrapper,
} from "./JobDetailesStyles";
import { convertDate } from "../../helpers/convertDateToDay";
import { convertSalaryString } from "../../helpers/convertSalary";

interface JobDetailedProps {
  getJobById: (arg: string) => Job | undefined;
}

export const JobDetailed = ({ getJobById }: JobDetailedProps) => {
  const { currentJob } = useParams();
  const navigate = useNavigate();

  const [jobDetailed, setJobDetailed] = useState<Job>();

  let passingDays = convertDate(jobDetailed?.createdAt) as string;

  useEffect(() => {
    if (currentJob) {
      setJobDetailed(getJobById(currentJob));
    }
    window.scrollTo(0, 0);
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
                <FaRegBookmark id="bookmark" /> <FaRegStar id="star" />
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

        <ApplyNowButton id="upperApplyButton">Apply now</ApplyNowButton>

        <TitleDaysAndSalaryWrapper>
          <Title>{jobDetailed?.title}</Title>
          <Salary>
            {convertSalaryString(jobDetailed?.salary)}
            <span>Brutto, per year</span>
          </Salary>
          <Days>
            {passingDays === "1"
              ? `Posted ${passingDays} days ago`
              : `Posted ${passingDays} day ago`}
          </Days>
        </TitleDaysAndSalaryWrapper>

        <Description>
          {makeSomeStringMagic(jobDetailed?.description)}
        </Description>

        <ApplyNowButton id="lowerApplyButton">Apply now</ApplyNowButton>
        <AddittionalInfoAndImagesWrapper>
          <AdditionalInfoInnerWrapper>
            <HeaderWrapper id="AdditionalInfo">
              <Header>Additional info</Header>
            </HeaderWrapper>
            <span>Employment type</span>
            <AdditionalInfoBlocksWrapper>
              {jobDetailed?.employment_type.map((empl, i) => (
                <AdditionalInfoBlockEmploymentType key={i}>
                  {empl}
                </AdditionalInfoBlockEmploymentType>
              ))}
            </AdditionalInfoBlocksWrapper>
            <span>Benefits</span>
            <AdditionalInfoBlocksWrapper>
              {" "}
              {jobDetailed?.benefits.map((ben, i) => (
                <AdditionalInfoBlockBenefit key={i}>
                  {ben}
                </AdditionalInfoBlockBenefit>
              ))}
            </AdditionalInfoBlocksWrapper>
          </AdditionalInfoInnerWrapper>

          <AttachedImagesInnerWrapper>
            <HeaderWrapper>
              <Header>Attached images</Header>
            </HeaderWrapper>
            <AdditionalInfoBlocksWrapper>
              {jobDetailed?.pictures.map((pic, i) => {
                let photo = `${pic}?t=${Date.now() * Math.random()}`;
                return (
                  <AttachedImg
                    key={i}
                    src={photo}
                    alt={`Company Photo ${i + 1}`}
                  />
                );
              })}
            </AdditionalInfoBlocksWrapper>
          </AttachedImagesInnerWrapper>
        </AddittionalInfoAndImagesWrapper>

        <IconContext.Provider value={{ size: "25px" }}>
          <BackButton onClick={() => navigate("/")}>
            <MdOutlineArrowBackIosNew />
            Return to job board
          </BackButton>
        </IconContext.Provider>
      </JobDetailsDescriptionWrapper>

      <JobHeaderContactsAndMapWrapper>
        <HeaderWrapper>
          <Header>Contacts</Header>
        </HeaderWrapper>
        <JobContactsAndMapWrapper>
          <JobContactsWrapper>
            <TextName>{jobDetailed?.name}</TextName>
            <TextAddress>
              {" "}
              <ImLocation />
              {jobDetailed?.address}
            </TextAddress>
            <TextAddress>{jobDetailed?.phone},</TextAddress>
            <TextAddress>{jobDetailed?.email}</TextAddress>
          </JobContactsWrapper>
          <JobMap>
            <Map
              coord={[
                Number(jobDetailed?.location.long),
                Number(jobDetailed?.location.lat),
              ]}
            />
          </JobMap>
        </JobContactsAndMapWrapper>
      </JobHeaderContactsAndMapWrapper>
    </JobDetailsWrapper>
  );
};
