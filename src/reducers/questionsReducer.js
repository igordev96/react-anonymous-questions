const initialState = {
  questions: [],
  isLoading: true,
};

const questionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_QUESTIONS":
      return {
        ...state,
        questions: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default questionsReducer;
