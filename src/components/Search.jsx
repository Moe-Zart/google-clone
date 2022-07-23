import React, { useState } from "react";
import "../pages/Search.css";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";
const Search = ({ hideButtons = false }) => {
  const [input, setInput] =
    useState(""); /* this is how you write variables in react */
  const history = useHistory(); // stores browser history

  const search = (e) => {
    e.preventDefault(); /* prevents refresh*/
    console.log(input);
    history.push("/results");
  };
  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputSearchIcon" />
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="search__searchBar"
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
