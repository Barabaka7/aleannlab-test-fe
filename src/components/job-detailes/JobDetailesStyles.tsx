import styled from "@emotion/styled/macro";
import "font-proxima-nova/style.css";
import "@fontsource/roboto";

const PROXIMA = "Proxima Nova Rg";

export const JobDetailsDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 40vw;
  margin-left: 17vw;
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #bcc0cb;
  padding-bottom: 5px;
  margin-top: 35px;
`;

export const Header = styled.div`
  font-family: "Proxima Nova Rg";
  font-weight: 700;
  font-size: 28px;
  color: #3a4562;
  display: inline-block;
`;

export const UtilitiesHeader = styled.div`
  font-family: "Roboto";
  font-size: 1.4vw;
  letter-spacing: -0.5625px;
  display: flex;
  width: 45%;
  justify-content: space-between;
  align-items: center;
`;

export const IconWithTextWrapper = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  :hover {
    cursor: pointer;
    color: red;

    & svg {
      fill: #ff0000;
    }
  }
`;

export const ApplyNowButton = styled.button`
  background: #384564;
  border-radius: 8px;
  color: #ffffff;
  text-align: center;
  text-transform: uppercase;
  width: 127px;
  height: 52px;
  font-family: ${PROXIMA};
  margin-top: 30px;
  margin-bottom: 20px;
  font-weight: 600;
  border: none;
  :hover {
    cursor: pointer;
    transform: scale(1.01);
  }
`;

export const TitleDaysAndSalaryWrapper = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  grid-template-rows: auto auto;
  margin-bottom: 15px;
  column-gap: 15px;
`;
export const Title = styled.h3`
  font-family: ${PROXIMA};
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: #3a4562;
  letter-spacing: -0.75px;
  margin: 5px 0;
`;

export const Salary = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  font-family: ${PROXIMA};
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 25px;
  color: #3a4562;
  & span {
    font-family: "Roboto";
    font-weight: 400;
    font-size: 15px;
    line-height: 24px;
    margin-top: -5px;
  }
`;

export const Days = styled.span`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.5625px;
  color: rgba(56, 65, 93, 0.355988);
  font-stretch: 100;
`;

export const Description = styled.div`
  font-family: "Roboto";
  color: #3a4562;
  line-height: 24px;
  white-space: pre-wrap;

  & h4 {
    margin-top: 30px;
    margin-bottom: 10px;
  }

  & ul {
    margin-left: -3px;
    padding-left: 2px;
    list-style-type: square;
  }
`;

export const AdditionalInfoInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Roboto";
  color: #3a4562;
  font-weight: 400;
  font-size: 14px;
  margin-top: 15px;
`;

export const AdditionalInfoBlocksWrapper = styled.div`
  display: flex;
  column-gap: 3%;
  margin: 15px 0;
`;

const AdditionalInfoBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  width: 30%;
  height: 49px;
  font-family: ${PROXIMA};
  font-weight: 700;
`;

export const AdditionalInfoBlockEmploymentType = styled(AdditionalInfoBlock)`
  background: rgba(161, 177, 219, 0.317343);
  border: 1px solid rgba(85, 105, 158, 0.3);
  color: #55699e;
`;

export const AdditionalInfoBlockBenefit = styled(AdditionalInfoBlock)`
  background: rgba(255, 207, 0, 0.15);
  border: 1px solid #ffcf00;
  color: #988b49; ;
`;

export const AttachedImg = styled.img`
  border-radius: 8px;
  width: 30%;
  height: auto;
`;

export const BackButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 8px;
  width: 213px;
  height: 50px;
  background: #d6d8dc;
  border-radius: 8px;
  text-transform: uppercase;
  color: #3a4562;
  font-weight: 600;
  border: none;
  font-size: 12px;
  line-height: 16px;
  cursor: pointer;
  margin-left: -15%;
  margin-top: 40px;
  margin-bottom: 140px;
  :hover {
    transform: scale(1.02);
  }
`;

export const ButtonTextWrapper = styled.div``;

export const JobContactsAndMapWrapper = styled.div`
  height: 436px;
  width: 25vw;
  border-radius: 8px;
  background: url("/images/Combined Shape.svg") no-repeat, #2a3047;
  position: relative;
  z-index: 10;
  margin-top: 35px;
`;

export const JobMap = styled.div`
  width: 100%;
  height: 50%;
  border-radius: inherit;
  z-index: 5;
  position: relative;
`;

export const JobContactsWrapper = styled.div`
  width: 100%;
  height: 50%;
  border-radius: 8px 8px 0 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 25px 40px;
  box-sizing: border-box;
`;

export const TextName = styled.h2`
  font-weight: 700;
  font-family: ${PROXIMA};
  color: #e7eaf0;
  font-size: 20px;
  line-height: 25px;
  margin-top: 0;
`;

export const TextAddress = styled.span`
  font-weight: 400;
  font-family: "Roboto";
  color: #e8ebf3;
  font-size: 16px;
  line-height: 24px;
`;

export const JobDetailsWrapper = styled.div`
  display: flex;
  column-gap: 7%;

  @media (max-width: 414px) {
    width: 100%;
    flex-direction: column;

    ${JobDetailsDescriptionWrapper} {
      padding: 0 10px;
      width: 100%;
      box-sizing: border-box;
      margin-left: 0;
    }

    ${TitleDaysAndSalaryWrapper} {
      grid-template-columns: 40vw 50vw;
      justify-content: space-between;
    }

    ${Title} {
      grid-area: 1 / 1 / 2 / span 2;
    }

    ${Salary} {
      grid-area: 2 / 2 / 2 / 3;
      flex-direction: column-reverse;
      margin-top: 0;
      align-items: end;
      width: 90%;
    }

    ${Days} {
      grid-area: 2 / 1 / 2 / 2;
      display: flex;
      align-items: center;
    }

    ${HeaderWrapper} {
      display: block;
    }

    ${Header} {
      display: block;
      width: 100%;
    }
  }
`;
