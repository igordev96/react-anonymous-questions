import { useState } from "react";
import { StyledInput } from "./styles";
import { questionsRef } from "../../firebase-config";
import { addDoc, Timestamp } from "@firebase/firestore";
import { useDispatch } from "react-redux";
import { getQuestions } from "../../actions/questionsAction";

const NewQuestion = () => {
  const [newQuestion, setNewQuestion] = useState("");
  const dispatch = useDispatch();

  const createQuestion = async () => {
    await addDoc(questionsRef, {
      question: newQuestion,
      date: Timestamp.now(),
    });
  };
  return (
    <StyledInput>
      <textarea
        value={newQuestion}
        onChange={(e) => {
          setNewQuestion(e.target.value);
        }}
        placeholder="Your question here..."
      />
      <button
        onClick={() => {
          createQuestion();
          setNewQuestion("");
          dispatch(getQuestions());
        }}
      >
        Send
      </button>
    </StyledInput>
  );
};

export default NewQuestion;
