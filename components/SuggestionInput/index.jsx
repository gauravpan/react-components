import { useState } from "react";
import { SearchIcon, CrossIcon } from "./icons";
import { getSuggestedValues } from "./getSuggestedValues";

function SuggestionInput({ setKeyword }) {
  const [inputData, setInputData] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [cursor, setCursor] = useState(0);

  const handleCrossClick = () => {
    setInputData("");
    setSuggestions([]);
    setKeyword("");
  };
  const handleInputChange = async (e) => {
    setInputData(e.target.value);
    let newSuggestions = await getSuggestedValues();
    setSuggestions(newSuggestions);
  };
  const handleKeyDown = (e) => {
    // arrow up/down button should select next/previous list element
    if (e.keyCode === 38 && cursor > 0) {
      e.preventDefault();
      setCursor((c) => c - 1);
    } else if (e.keyCode === 40 && cursor < suggestions.length - 1) {
      e.preventDefault();
      setCursor((c) => c + 1);
    } else if (e.keyCode === 13) {
      e.preventDefault();
      setKeyword(suggestions[cursor]);
    }
    console.log(e.keyCode);
  };
  const handleListClick = (index) => {
    console.trace(index);
    setKeyword(suggestions[index]);
    setCursor(index);
  };

  return (
    <div className="py-2 bg-white shadow  w-full rounded-md">
      <div className="h-12  px-4 text-gray-700  flex items-center  ">
        <div>
          <SearchIcon />
        </div>
        <input
          type="text"
          className="w-60 mx-3 outline-none flex-1"
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          value={inputData}
        />
        {inputData && (
          <div className="cursor-pointer" onClick={handleCrossClick}>
            <CrossIcon />
          </div>
        )}
      </div>
      <ul className="">
        {suggestions.map((val, index) => {
          let classNames =
            "py-2  px-4 cursor-pointer truncate hover:bg-gray-50";
          if (index === cursor) classNames += " bg-gray-100";
          return (
            <li
              className={classNames}
              key={val}
              onClick={() => handleListClick(index)}
            >
              {val}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SuggestionInput;
