import { Input } from "@material-tailwind/react";
import axios from "axios";
import React, { useState } from "react";
const ApiUrl = import.meta.env.VITE_REACT_APP_API_URL;
const ReactUrl = import.meta.env.VITE_REACT_APP_API_REACT_URL;

const Searchbar = ({ onchangeSearchFunction }) => {
  const [SearchTerm, setSearchTerm] = useState();
  const [lastOrientation , setLastOrientation] = useState();
  function getLastKey(obj) {
    const keys = Object.keys(obj);
    return keys[keys.length - 1];
  }

  const getOrientation = async (id) => {
    try {
      const response = await axios.get(`${ApiUrl}/getOrientation/${id}`);
        
      const AllOrientation = response.data[id];
      if (AllOrientation) {
      const lastKey = getLastKey(AllOrientation);
      setLastOrientation(AllOrientation[lastKey]);
            onchangeSearchFunction([AllOrientation[lastKey]]);
      }
      else {
        alert("not found");
      }
    } catch (error) {
        console.error(error.message);
    }
  };
  const handleSearch = () => {
      getOrientation(SearchTerm);
   
  };

  return (
    <div className="flex items-center justify-center p-10">
      <div className="flex space-x-1">
        <input
          type="text"
          className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-full focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder="Search..."
          value={SearchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          onClick={() => handleSearch()}
          className="px-4 text-white bg-purple-600 rounded-full "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Searchbar;
