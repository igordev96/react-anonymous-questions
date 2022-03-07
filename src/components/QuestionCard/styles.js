import styled from "styled-components";
import { motion } from "framer-motion";
import { colors } from "../../variables";

export const StyledCard = styled(motion.div)`
  background-color: ${colors.lightGrey};
  max-width: 60vw;
  height: ${194 / 16}rem;
  margin: auto;
  margin-top: 6rem;
  border-radius: 20px;
  padding: 1rem 2rem;
  position: relative;
  box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.25);

  p {
    position: absolute;
    bottom: 0.5rem;
    right: 0.5rem;
  }
`;
