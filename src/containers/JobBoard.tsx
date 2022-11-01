import { Job } from "../helpers/model";
import { JobPreview } from "../components/job-preview/JobPreview";
import { NavigationBar } from "../components/navigation-bar/NavigationBar";
import React from "react";

interface JobBoardProps {
  allJobs: Job[];
}

export const JobBoard = ({ allJobs }: JobBoardProps) => {
  const Names = allJobs.map((job, idx) => {
    let jobPreviewData = {
      logo: job.pictures[0],
      jobName: job.name,
      title: job.title,
      address: job.address,
      date: job.createdAt,
    };
    return <JobPreview key={idx} jobPreviewData={jobPreviewData} />;
  });

  return (
    <React.Fragment>
      {Names}
      <NavigationBar />
    </React.Fragment>
  );
};
