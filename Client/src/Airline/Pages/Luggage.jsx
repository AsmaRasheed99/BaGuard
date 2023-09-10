import React, { useEffect, useState } from "react";
import Searchbar from "../Components/Searchbar";
import Track from "../Components/Track";
import axios from "axios";
const ApiUrl = import.meta.env.VITE_REACT_APP_API_URL;

const Luggage = () => {
  const [region, setregion] = useState("");
  const [country, setcountry] = useState("");
  const [Name , setName] = useState("");
  const [ticketId , setTicketId] = useState("");
  const [place, setplace] = useState("");
  const [properties, setproperties] = useState("");
  const [id, setid] = useState("");
  const [changeSearch, onchangeSearch] = useState([]);

  const handleSearchArray = (filterdArray) => {
    setplace("");
    setproperties("");
    onchangeSearch(filterdArray);
  
  };

  const setRegion = (region) => {
    setregion(region);
  };
  const setCountry = (country) => {
    setcountry(country);
  };
  const setPlace = (Place) => {
    setplace(Place);
  };
  const setProperties = (Properties) => {
    setproperties(Properties);
  };
  const setId = (id) => {
    setid(id);
  };

  const getData = async (id) => {
    try {
      const response = await axios.get(`${ApiUrl}/getData/${id}`);
      console.log(response.data);
      setName(response.data.Name);
      setTicketId(response.data.ticketId);
    } catch (error) {
        console.error(error.message);
    }
  };
 
  useEffect(()=>{
    getData(id);
  },[id])
  return (
    <>
      <Searchbar onchangeSearchFunction={handleSearchArray} setId={setId} />

      <>
        <div className="bg-[#ffffff] mr-5 ml-5 p-10 rounded-2xl min-h-[calc(100vh)]   ">
          <div className="relative flex items-center justify-between pt-4">
            <div className="text-xl font-bold text-navy-700 dark:text-white">
              Search for luggage by Ticket Id
            </div>
          </div>

          <Track
            ticket={changeSearch}
            setRegion={setRegion}
            setCountry={setCountry}
            setPlace={setPlace}
            setProperties={setProperties}
          />

          <div className="mt-8 overflow-x-scroll xl:overflow-hidden ">
            <table role="table" className="w-full">
              <thead>
                <tr role="row">
                  <th
                    colSpan={1}
                    role="columnheader"
                    title="Toggle SortBy"
                    className="border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-700"
                    style={{ cursor: "pointer" }}
                  >
                    <p className="text-xs tracking-wide text-gray-600">Id</p>
                  </th>
                  <th
                    colSpan={1}
                    role="columnheader"
                    title="Toggle SortBy"
                    className="border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-700"
                    style={{ cursor: "pointer" }}
                  >
                    <p className="text-xs tracking-wide text-gray-600">Name</p>
                  </th>
                  <th
                    colSpan={1}
                    role="columnheader"
                    title="Toggle SortBy"
                    className="border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-700"
                    style={{ cursor: "pointer" }}
                  >
                    <p className="text-xs tracking-wide text-gray-600">Ticket Id</p>
                  </th>


                  <th
                    colSpan={1}
                    role="columnheader"
                    title="Toggle SortBy"
                    className="border-b border-gray-200 pr-10 pb-[10px] text-start dark:!border-navy-700"
                    style={{ cursor: "pointer" }}
                  >
                    <p className="text-xs tracking-wide text-gray-600">
                      Place Name
                    </p>
                  </th>

                  <th
                    colSpan={1}
                    role="columnheader"
                    title="Toggle SortBy"
                    className="border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-700"
                    style={{ cursor: "pointer" }}
                  >
                    <p className="text-xs tracking-wide text-gray-600">
                      Place Properties
                    </p>
                  </th>
                  <th
                    colSpan={1}
                    role="columnheader"
                    title="Toggle SortBy"
                    className="border-b border-gray-200 pr-5 pb-[10px] text-start dark:!border-navy-700"
                    style={{ cursor: "pointer" }}
                  >
                    <p className="text-xs tracking-wide text-gray-600">Damage</p>
                  </th>
                </tr>
              </thead>

              {changeSearch.map((e) => {
                return (
                  <tbody role="rowgroup">
                    <tr role="row">
                      <td
                        className="pt-[14px] pb-[18px] sm:text-[14px] flex items-center"
                        role="cell"
                      >
                        <p className="text-sm text-navy-700 dark:text-white ml-3">
                          {id}
                        </p>
                      </td>
                      <td
                        className="pt-[14px] pb-[18px] sm:text-[14px]"
                        role="cell"
                      >
                        <div className="flex items-center gap-2">
                          <div className="rounded-full text-xl">
                            <p className="text-sm  text-navy-700 dark:text-white">
                              {Name}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td
                        className="pt-[14px] pb-[18px] sm:text-[14px]"
                        role="cell"
                      >
                        <div className="flex items-center gap-2">
                          <div className="rounded-full text-xl">
                            <p className="text-sm  text-navy-700 dark:text-white">
                              {ticketId}
                            </p>
                          </div>
                        </div>
                      </td>

<td
                        className="pt-[14px] pb-[18px]  sm:text-[14px]"
                        role="cell"
                      >
                        {place}
                      </td>


                      <td
                        className="pt-[14px] pb-[18px] sm:text-[14px]"
                        role="cell"
                      >
                        <div className="flex items-center gap-2">
                          <div className="rounded-full text-xl">
                            <p className="text-sm  text-navy-700 dark:text-white">
                            {properties}
                            </p>
                          </div>
                        </div>
                      </td>
                    
                      <td
                        className="pt-[14px] pb-[18px] sm:text-[14px]"
                        role="cell"
                      >
                        data
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
        </div>
      </>
    </>
  );
};

export default Luggage;
