import Search from "../components/Search";
import React from "react";
import { Link } from "react-router-dom";
import response from "../response";
import { useStateValue } from "../StateProvider";
import UseGoogleSearch from "../useGoogleSearch";
import "./SearchPage.css";
const SearchPage = () => {
  const [{ term }, dispatch] = useStateValue();
  //const { data } = UseGoogleSearch(term);
  const data = response;
  console.log(data);
  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            className="searchPage__logo"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt=""
          />
        </Link>
        <div className="searchPage__headerBody">
        <Search hideButtons/>
      </div>
      <div className="searchPage__options">
        
      </div>
      </div>
      
      <div className="searchPage__results"></div>
    </div>
  );
};

export default SearchPage;
