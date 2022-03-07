import { getDocs } from "@firebase/firestore";
import { questionsRef } from "../firebase-config";

export const getQuestions = () => async (dispatch) => {
  const res = await getDocs(questionsRef);
  const data = await res.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

  dispatch({
    type: "GET_QUESTIONS",
    payload: data,
  });
};
