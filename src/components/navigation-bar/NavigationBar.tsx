import {
  NavigationBarWrapper,
  BackAndForwardButton,
  PageButtons,
  VerticalLine,
} from "./NavigationBarStyles";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { IconContext } from "react-icons";
import { useNavigate } from "react-router-dom";

interface NavigationBarProps {
  numberOfPages: number;
  currentPage: number;
}

export const NavigationBar = ({
  numberOfPages,
  currentPage,
}: NavigationBarProps) => {
  let navigate = useNavigate();

  let disabledBackButton = currentPage === 1 ? true : false;
  let disabledForwardButton = currentPage === numberOfPages ? true : false;

  console.log(`currentPage: ${currentPage}`);
  console.log(`disabledBackButton: ${disabledBackButton}`);
  console.log(`disabledForwardButton: ${disabledForwardButton}`);

  return (
    <NavigationBarWrapper>
      <IconContext.Provider value={{ size: "20px" }}>
        <BackAndForwardButton
          disabled={disabledBackButton}
          onClick={() => navigate(`/${currentPage - 1}`)}
        >
          <MdOutlineArrowBackIosNew />
        </BackAndForwardButton>
        <VerticalLine />
        <PageButtons />
        <VerticalLine />
        <BackAndForwardButton
          disabled={disabledForwardButton}
          onClick={() => navigate(`/${currentPage + 1}`)}
        >
          <MdOutlineArrowForwardIos />
        </BackAndForwardButton>
      </IconContext.Provider>
    </NavigationBarWrapper>
  );
};
