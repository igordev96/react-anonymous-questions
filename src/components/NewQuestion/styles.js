import styled from "styled-components";
import { motion } from "framer-motion";
import { colors } from "../../variables";

export const StyledInput = styled(motion.div)`
  max-width: 60vw;
  height: ${194 / 16}rem;
  background-color: ${colors.white}3;
  margin: auto;
  position: relative;
  box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.25);

  textarea {
    width: 100%;
    height: 60%;
    background-color: transparent;
    border: none;
    font-family: "Poppins", sans-serif;
    font-size: 1.5rem;
    resize: none;
    outline: none;
    padding: 1rem 2rem;
    overflow: hidden;

    &::placeholder {
      color: ${colors.darkGrey};
      opacity: 0.6;
    }
  }

  button {
    position: absolute;
    bottom: 0.5rem;
    right: 0.5rem;
  }
`;
