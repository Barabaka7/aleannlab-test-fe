import { Job } from "../helpers/model";
import { JobPreview } from "../components/job-preview/JobPreview";
import { NavigationBar } from "../components/navigation-bar/NavigationBar";
import React from "react";
import { useParams } from "react-router-dom";

interface JobBoardProps {
  allJobs: Job[];
}

export const JobBoard = ({ allJobs }: JobBoardProps) => {
  const { currentPage } = useParams();

  const jobPreviewsOnPage = 15;
  const numberOfPages = Math.ceil(allJobs.length / jobPreviewsOnPage);

  const Names = allJobs
    .filter(
      (_, idx) =>
        idx >= Number(currentPage) - 1 &&
        idx < Number(currentPage) * jobPreviewsOnPage
    )
    .map((job, idx) => {
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
      <NavigationBar
        numberOfPages={numberOfPages}
        currentPage={Number(currentPage)}
      />
    </React.Fragment>
  );
};
