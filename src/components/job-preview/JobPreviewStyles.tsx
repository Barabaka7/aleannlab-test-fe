import styled from "@emotion/styled";
import "font-proxima-nova/style.css";

export const JobPreviewWrapper = styled.div`
  font-family: "Proxima Nova Rg";
  width: 80%;
  height: 150px;
  margin: 5px auto;
  display: flex;
  background-color: white;
  border-radius: 4px;
  box-shadow: 1px 1px 6px -1px #9b9b9b;
`;

export const CompanyLogoSection = styled.div`
  max-width: 13%;
  height: 100%;
`;

export const Logo = styled.img`
  height: 85px;
  width: 85px;
  border-radius: 50%;
  margin-top: 20px;
  margin-left: 10px;
`;

export const JobDescriptionWrapper = styled.div`
  margin-top: 20px;
  margin-left: 15px;
  display: flex;
  flex-direction: column;
  max-width: 50%;
`;

export const TextDark = styled.span`
  font-weight: 700;
  color: #3a4562;
  font-size: 20px;
  letter-spacing: -0.625px;
`;

export const TextSecondary = styled.span`
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 0.23619px;
  color: #878d9d;
  margin-top: 10px;
`;
