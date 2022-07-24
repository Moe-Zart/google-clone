import React from "react";
import { useStateValue } from "../StateProvider";
import UseGoogleSearch from "../useGoogleSearch";
import "./SearchPage.css";
const SearchPage = () => {
  const [{ term }, dispatch] = useStateValue();
  const {data} = UseGoogleSearch(term)
  console.log(data)
  return (
    <div className="searchPage"> 
    <h1>{term}</h1>
      <div className="searchPage__header"></div>
      <div className="searchPage__results"></div>
    </div>
  );
};

export default SearchPage;
