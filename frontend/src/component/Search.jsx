import React, { useState } from "react";
import "./css/Search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = async (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() !== "") {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/cards/search?q=${value}`
        );
        setSuggestions(response.data);
      } catch (error) {
        console.error("Error fetching suggestions:", error);
      }
    } else {
      setSuggestions([]);
      onSearch("");
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion.title);
    setSuggestions([]);
    onSearch(suggestion.title);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div className="container" >
      <div className="bg">
    
        {/* <span className="help-span">How can we help?</span> */}

      <div>
        <form
          className="d-flex search-form"
          role="search"
          onSubmit={handleSubmit}
        >
              <div class="input-wrapper"> 

            <input
              className="form-control search-input"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={query}
              onChange={handleInputChange}
            />
            <button className="icon-button" type="submit">
              {/* <FontAwesomeIcon icon={faArrowRight} /> */}
            </button>
            </div> 

        </form>
        {suggestions.length > 0 && (
          <ul className="suggestions-list">
            {suggestions.map((suggestion) => (
              <li
                key={suggestion._id}
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion.title}
              </li>
            ))}
          </ul>
        )}
      </div>
      </div>
    </div>
  );
};

export default Search;
