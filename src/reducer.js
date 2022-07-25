export const initialState = {
  term: null,
};
//initialState is what the data layer looks like
//we want the term to change to whatever is typed in the searchbar
export const actionTypes = {
  SET_SEARCH_TERM: "SET_SEARCH_TERM",
};
//we want the SET_SEARCH_TERM to change to whatever is entered in the searchbar

const reducer = (state, action) => {
  //the state is the state of the data layer
  //action is whatever we are dispatching into the context api


  console.log(action);

  
  switch (action.type) {
    case actionTypes.SET_SEARCH_TERM:
      return {
        ...state, //return whatever the state currently looks like
        term: action.term, //change the term with whatever action.term we dispatched
      };
    default:
      return state;
  }
};

export default reducer;
