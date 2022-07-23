export const initialState = {
  term: null,
};
export const ActionTypes = {
  SET_SEARCH_TERM: "SET_SERACH_TERM",
};
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case ActionTypes.SET_SEARCH_TERM:
      return {
        ...state,
        term: action.term,
      };
    default:
      return state;
  }
};

export default reducer;
