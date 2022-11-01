import {
  NavigationBarWrapper,
  BackAndForwardButton,
  PageButtons,
  VerticalLine,
  PageButton,
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

  let pageButtons = [];
  if (numberOfPages <= 6) {
    for (let b = 1; b <= numberOfPages; b++) {
      let newButton = (
        <PageButton key={b} onClick={() => navigate(`/${b}`)}>
          {b}
        </PageButton>
      );
      pageButtons.push(newButton);
    }
  } else {
    //TODO: Implement case for Navigator with many pages
  }

  return (
    <NavigationBarWrapper>
      <IconContext.Provider value={{ size: "20px" }}>
        <BackAndForwardButton
          disabled={currentPage === 1}
          onClick={() => navigate(`/${currentPage - 1}`)}
        >
          <MdOutlineArrowBackIosNew />
        </BackAndForwardButton>
        <VerticalLine />
        <PageButtons>{pageButtons}</PageButtons>
        <VerticalLine />
        <BackAndForwardButton
          disabled={currentPage === numberOfPages}
          onClick={() => navigate(`/${currentPage + 1}`)}
        >
          <MdOutlineArrowForwardIos />
        </BackAndForwardButton>
      </IconContext.Provider>
    </NavigationBarWrapper>
  );
};
