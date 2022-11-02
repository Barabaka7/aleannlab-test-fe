import { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { Job } from "../../helpers/model";
import { BackButton } from "./JobDetailedStyles";

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
    <>
      <div>{jobDetailed?.title}</div>
      <IconContext.Provider value={{ size: "25px" }}>
        <BackButton onClick={() => navigate("/")}>
          <MdOutlineArrowBackIosNew />
          Return to job board
        </BackButton>
      </IconContext.Provider>
    </>
  );
};
