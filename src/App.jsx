import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuestions } from "./actions/questionsAction";
import Header from "./components/Header";
import Line from "./components/Line";
import NewQuestion from "./components/NewQuestion";
import QuestionCard from "./components/QuestionCard";
import { GlobalStyle } from "./global-styles";
import { Timestamp } from "@firebase/firestore";

function App() {
  const dispatch = useDispatch();
  const { questions, isLoading } = useSelector((state) => state.questions);

  useEffect(() => {
    dispatch(getQuestions());
  }, []);

  return (
    <>
      <GlobalStyle />
      <Header />
      <Line />
      <NewQuestion />
      <div className="questions">
        {!isLoading &&
          questions.map((question) => {
            return (
              <QuestionCard
                key={question.id}
                question={question.question}
                time={String(question.date.toDate()).slice(0, 21)}
              />
            );
          })}
      </div>
    </>
  );
}

export default App;
