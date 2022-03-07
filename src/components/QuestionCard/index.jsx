import { StyledCard } from "./styles";

const QuestionCard = ({ question, time }) => {
  return (
    <StyledCard>
      <h2>{question}</h2>
      <p>{time}</p>
    </StyledCard>
  );
};

export default QuestionCard;
