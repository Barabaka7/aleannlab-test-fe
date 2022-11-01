import styled from "@emotion/styled";
import "font-proxima-nova/style.css";

export const NavigationBarWrapper = styled.div`
  display: flex;
  margin: 52px auto;
  height: 52px;
  border-radius: 8px;
  background: #ffffff;
  width: 30%;
  box-shadow: 1px 1px 6px -1px #9b9b9b;
  justify-content: space-between;
  align-items: center;
`;

export const BackAndForwardButton = styled.button`
  :enabled {
    cursor: pointer;
  }

  width: 15%;
  color: #7d859c;
  border: none;
  background: #ffffff;
  border-radius: 8px;
  :hover:enabled {
    color: #5876c5;
  }
`;

export const VerticalLine = styled.div`
  height: 60%;
  width: 3px;
  border-left: 1.3px solid #dee3ef; ;
`;

export const PageButtons = styled.div`
  color: #70778b;
  width: 70%;
  display: flex;
  justify-content: center;
  height: 100%;
`;

export const PageButton = styled.button`
  :enabled {
    cursor: pointer;
  }
  font-size: 18px;
  font-weight: 700;
  width: 10%;
  height: 100%;
  color: #7d859c;
  border: none;
  background: #ffffff;
  :hover {
    color: #5876c5;
    border-bottom: solid 2px #5876c5;
  }
`;
