import styled from "@emotion/styled";
import "font-proxima-nova/style.css";
import "@fontsource/roboto";

const PROXIMA = "Proxima Nova Rg";

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
`;

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
  border: none;
  :hover {
    cursor: pointer;
    color: red;
    transform: scale(1.01);
  }
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

export const ButtonTextWrapper = styled.div``;

export const JobMap = styled.div``;

export const JobDetailsWrapper = styled.div``;
