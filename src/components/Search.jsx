import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

const Search = ({ hideButtons = false, term }) => {
  const [{}, dispatch] = useStateValue();
  //dispatch is like a gun that shoots actions into the data layer so that we can change it

  const [input, setInput] =
    useState(""); /* this is how you write variables in react */
  const history = useHistory(); // stores browser history

  const search = (e) => {
    e.preventDefault(); /* prevents refresh*/
    console.log(input);

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input, //here, we put the search term into the data layer, so that we can pull it back when we go to the results page
    });
    history.push("/search");
  };
  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputSearchIcon" />
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="search__searchBar"
          placeholder={term}
        />
        {/* const[input] stores whatever you type. setInput stores the input by giving it the target.value
         */}
        <MicIcon className="search__inputMicIcon" />
      </div>
      {!hideButtons ? (
        <div className="search__buttons">
          <Button type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="search__buttons hidden">
          <Button type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      )}
    </form>
  );
};

export default Search;
