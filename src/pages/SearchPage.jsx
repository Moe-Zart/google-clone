import Search from "../components/Search";
import React from "react";
import { Link } from "react-router-dom";
import response from "../response";
import { useStateValue } from "../StateProvider";
import UseGoogleSearch from "../useGoogleSearch";
import SearchIcon from "@mui/icons-material/Search";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import "./SearchPage.css";
function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  const { data } = UseGoogleSearch(term);
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
          <Search hideButtons term={term} />
          <div className="searchPage__options">
            <div className="searchPage__optionsLeft">
              <div className="searchPage__option">
                <Link to="/all">
                  <SearchIcon className="searchPage__icon" />
                  All
                </Link>
              </div>
              <div className="searchPage__option">
                <Link to="/all">
                  <SlideshowIcon className="searchPage__icon" />
                  Videos
                </Link>
              </div>
              <div className="searchPage__option">
                <Link to="/all">
                  <ImageOutlinedIcon className="searchPage__icon" />
                  Images
                </Link>
              </div>
              <div className="searchPage__option">
                <Link to="/all">
                  <NewspaperIcon className="searchPage__icon" />
                  News
                </Link>
              </div>
              <div className="searchPage__option">
                <Link to="/all">
                  <FmdGoodOutlinedIcon className="searchPage__icon" />
                  Maps
                </Link>
              </div>
              <div className="searchPage__option">
                <Link to="/all">
                  <MoreVertIcon className="searchPage__icon" />
                  More
                </Link>
              </div>
            </div>
            <div className="searchPage__optionsRight">
              <div className="searchPage__option">
                <Link>Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {term && (
        <div className="searchPage__results">
          <p className="searchPage__resultsCount">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds)
          </p>
          <p>
            {data?.items.map((item) => (
              <div className="searchPage__result">
                <a href={item.link}className="searchPage__result link">{item.displayLink}</a>
                <a href={item.link} className="searchPage__result title">
                  <p className="title">{item.title}</p>
                </a>
                <p className="searchPage__result snippet">{item.snippet}</p>
              </div>
            ))}
          </p>
        </div>
      )}
    </div>
  );
}

export default SearchPage;
