import { StyledHeader } from "./styles";
import questionMark from "../../assets/favicon.svg";

const Header = () => {
  return (
    <StyledHeader>
      <img src={questionMark} alt="logo" />
      <h1>Make an anonymous question</h1>
    </StyledHeader>
  );
};

export default Header;
