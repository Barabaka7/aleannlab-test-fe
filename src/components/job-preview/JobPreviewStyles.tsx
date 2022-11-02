import styled from "@emotion/styled/macro";
import "font-proxima-nova/style.css";

export const CompanyLogoSection = styled.div`
  max-width: 13%;
  height: 100%;
  @media (max-width: 414px) {
    max-width: 18%;
    width: 18%;
  }
`;

export const Logo = styled.img`
  height: min(85px, 10vw);
  width: min(85px, 10vw);
  border-radius: 50%;
  margin-top: 20px;
  margin-left: 10px;
  @media (max-width: 414px) {
    height: 66px;
    width: 66px;
  }
`;

export const DescriptionRatesDateWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 87%;
`;

export const RatesDateWrapper = styled.div`
  display: flex;
  width: 40%;
`;

export const JobDescriptionWrapper = styled.div`
  margin-top: 20px;
  margin-left: 17px;
  display: flex;
  flex-direction: column;
  width: 60%;
  @media (max-width: 414px) {
    width: 90%;
  }
`;

export const TextDark = styled.span`
  font-weight: 700;
  color: #3a4562;
  font-size: max(1.5vw, 14px);
  letter-spacing: -0.625px;
  max-height: 50%;
`;

export const TextSecondary = styled.span`
  font-weight: 400;
  font-size: max(1.3vw, 12px);
  letter-spacing: 0.23619px;
  color: #878d9d;
  margin-top: 10px;
`;

export const Rates = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
  margin-right: 15px;
  width: 45%;
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

export const StarWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const BookmarkWrapper = styled.div``;

export const BookmarkAndDateWrapper = styled.div`
  display: flex;
  width: 55%;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
  font-size: max(1.3vw, 12px);
  line-height: 12px;
  color: #878d9d;

  & svg {
    fill: #70778b;
  }

  & svg:hover {
    fill: #ff0000;
  }

  @media (max-width: 414px) {
    & svg {
      display: none;
    }
  }
`;

export const JobPreviewWrapper = styled.div`
  cursor: pointer;
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
  @media (max-width: 414px) {
    width: 100%;
    background-color: #eff0f5;
    ${BookmarkAndDateWrapper} {
      justify-content: start;
      font-size: 12px;
    }
    ${DescriptionRatesDateWrapper} {
      flex-flow: column-reverse;
      justify-content: space-evenly;
    }

    ${RatesDateWrapper} {
      justify-content: space-between;
      align-items: center;
      height: 25px;
      width: 95%;
    }

    ${BookmarkAndDateWrapper} {
      height: 25px;
      margin-top: 4px;
      margin-bottom: 4px;
      justify-content: end;
      margin-right: 2px;
    }

    ${BookmarkWrapper} {
      height: 25px;
    }

    ${JobDescriptionWrapper} {
      margin-top: 5px;
    }

    ${Rates} {
      margin-left: 17px;
      margin-top: 4px;
      justify-content: start;
    }

    ${TextSecondary} {
      margin-top: 5px;
    }

    ${StarWrapper} {
      flex-direction: row;
    }
  }
`;
