import {
  JobPreviewWrapper,
  CompanyLogoSection,
  Logo,
  JobDescriptionWrapper,
  TextDark,
  TextSecondary,
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
      <JobDescriptionWrapper>
        <TextDark>{jobPreviewData.title}</TextDark>
        <TextSecondary>{jobPreviewData.jobName}</TextSecondary>
        <TextSecondary>{jobPreviewData.address}</TextSecondary>
      </JobDescriptionWrapper>
      <div className="rates"></div>
      <div className="save date">{jobPreviewData.date}</div>
    </JobPreviewWrapper>
  );
};
