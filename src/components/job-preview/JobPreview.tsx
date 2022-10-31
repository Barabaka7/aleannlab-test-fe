import {
  JobPreviewWrapper,
  CompanyLogoSection,
  Logo,
} from "./JobPreviewStyles";

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
  console.log(jobPreviewData.logo);
  return (
    <JobPreviewWrapper>
      <CompanyLogoSection>
        <Logo src={jobPreviewData.logo} alt="Company Logo" />
      </CompanyLogoSection>
      <div className="jobDescription">
        {jobPreviewData.title} {jobPreviewData.jobName} {jobPreviewData.address}
      </div>
      <div className="rates"></div>
      <div className="save date">{jobPreviewData.date}</div>
    </JobPreviewWrapper>
  );
};
