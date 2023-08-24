import React, { useEffect, useState } from 'react'
import Searchbar from '../Components/Searchbar'
import Track from '../Components/Track'
const Luggage = () => {

    const [changeSearch,onchangeSearch]=useState([])
    const [tickets,setTickets]=useState([    
        {name:"asma",_id:"123456", number:"0797979521", Latitude: 31.963158, Longitude: 35.930359},
        {name:"majdi",_id:"756887", number:"0797979521", Latitude: 61.539449, Longitude: 67.035957},
        {name:"tamara",_id:"757575", number:"0797979521",Latitude: -33.8688, Longitude: 151.2093},
    ])


   

    const handleSearchArray = (filterdArray) =>{
        onchangeSearch(filterdArray)
    }



  return (
    <>
    <Searchbar
    onchangeSearchFunction={handleSearchArray}
    arrayToFilter={tickets}
    searchType={"id"}
    />
  

            <>
            <div className="bg-[#ffffff] mr-5 ml-5 p-10 rounded-2xl min-h-[calc(100vh)]   ">
              <div className="relative flex items-center justify-between pt-4">
                <div className="text-xl font-bold text-navy-700 dark:text-white">
                  Search for luggage by Ticket Id
                </div>
              </div>
              
              <Track ticket={changeSearch} />
              
        
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
                        <p className="text-xs tracking-wide text-gray-600">Number</p>
                      </th>
      
                      <th
                        colSpan={1}
                        role="columnheader"
                        title="Toggle SortBy"
                        className="border-b border-gray-200 pr-10 pb-[10px] text-start dark:!border-navy-700"
                        style={{ cursor: "pointer" }}
                      >
                        <p className="text-xs tracking-wide text-gray-600">Damage</p>
                      </th>
      
                      <th
                        colSpan={1}
                        role="columnheader"
                        title="Toggle SortBy"
                        className="border-b border-gray-200 pr-5 pb-[10px] text-start dark:!border-navy-700"
                        style={{ cursor: "pointer" }}
                      >
                        <p className="text-xs tracking-wide text-gray-600">Time</p>
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
                         
      
                            <p className="text-sm font-bold text-navy-700 dark:text-white ml-3">
                              {e._id}
                            </p>
                          </td>
                          <td
                            className="pt-[14px] pb-[18px] sm:text-[14px]"
                            role="cell"
                          >
                            <div className="flex items-center gap-2">
                              <div className="rounded-full text-xl">
                                <p className="text-sm font-bold text-navy-700 dark:text-white">
                                  {e.name}
                                </p>
                              </div>
                            </div>
                          </td>
                        
                          <td
                            className="pt-[14px] pb-[18px] sm:text-[14px]"
                          >
                           {e.number}
                          </td>
      
                          <td
                            className="pt-[14px] pb-[18px] sm:text-[14px]"
                            role="cell"
                          >
                         data
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
  )
}

export default Luggage