import styled from "@emotion/styled";
import "font-proxima-nova/style.css";

export const JobPreviewWrapper = styled.div`
  font-family: "Proxima Nova Rg";
  width: 80%;
  height: 150px;
  margin: 5px auto;
  display: flex;
  justify-content: space-between;
  background-color: white;
  border-radius: 4px;
  box-shadow: 1px 1px 6px -1px #9b9b9b;
  :hover {
    transform: scale(1.03);
    transition: ease-in 0.2s;
  }
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
  margin-left: 17px;
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const TextDark = styled.span`
  font-weight: 700;
  color: #3a4562;
  font-size: 20px;
  letter-spacing: -0.625px;
  max-height: 50%;
`;

export const TextSecondary = styled.span`
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 0.23619px;
  color: #878d9d;
  margin-top: 10px;
`;

export const Rates = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 50px;
  margin-right: 15px;
  & svg {
    color: #38415d;
    cursor: pointer;
  }

  & div:hover svg {
    color: #ff0000;
  }

  & svg:hover ~ svg {
    color: #38415d;
  }
`;

export const BookmarkAndDateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
  font-size: 16px;
  line-height: 25px;
  color: #878d9d;

  & svg {
    color: #70778b;
    fill: #ffffff;
    stroke: #70778b;
    stroke-width: 0.4;
  }

  & svg:hover {
    /* color: #ff0000; */
    fill: #ff0000;
  }
`;
