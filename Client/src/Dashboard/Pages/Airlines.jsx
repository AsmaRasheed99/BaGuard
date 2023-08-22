import Icon from "@mdi/react";
import { mdiAirplane, mdiDelete } from "@mdi/js";
import { mdiFileEdit } from "@mdi/js";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { mdiHumanEdit } from "@mdi/js";
import Swal from "sweetalert2";
import { mdiSilverware } from "@mdi/js";
import { mdiShieldCrownOutline } from "@mdi/js";
import { mdiAccountOutline } from "@mdi/js";

const Airlines = () => {
  const ApiUrl = import.meta.env.VITE_REACT_APP_API_URL;

  const [AllAirLines, setAllAirLines] = useState([]);

  const getAllAirLines = async () => {
    try {
      const Airline = await axios.get(`${ApiUrl}/AllAirLines`);
      setAllAirLines(Airline.data)
    } catch (error) {
      console.error(error);
    }
  };
useEffect(()=>{
  getAllAirLines();
},[])


  return (
    <>
      <div className="bg-[#ffffff] mr-5 ml-5 p-10 rounded-2xl min-h-[calc(100vh)]   ">
        <div className="relative flex items-center justify-between pt-4">
          <div className="text-xl font-bold text-navy-700 dark:text-white">
            Admins 
          </div>
        </div>

    

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
                  <p className="text-xs tracking-wide text-gray-600">Email</p>
                </th>
              
                <th
                  colSpan={1}
                  role="columnheader"
                  title="Toggle SortBy"
                  className="border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-700"
                  style={{ cursor: "pointer" }}
                >
                  <p className="text-xs tracking-wide text-gray-600">Role</p>
                </th>

             
                <th
                  colSpan={1}
                  role="columnheader"
                  title="Toggle SortBy"
                  className="border-b border-gray-200 pr-5 pb-[10px] text-start dark:!border-navy-700"
                  style={{ cursor: "pointer" }}
                >
                  <p className="text-xs tracking-wide text-gray-600">DELETE</p>
                </th>
              </tr>
            </thead>

            {AllAirLines?.map((e) => {
              return (
                <tbody role="rowgroup">
                  <tr role="row">
                 
                    <td
                      className="pt-[14px] pb-[18px] sm:text-[14px]"
                      role="cell"
                    >
                      <div className="flex items-center gap-2">
                        <div className="rounded-full text-xl">
                          <p className="text-sm font-bold text-navy-700 dark:text-white">
                            {e.Email}
                          </p>
                        </div>
                      </div>
                    </td>
                  
                    <td
                      className="pt-[14px] pb-[18px] sm:text-[14px]"
                      role="cell"
                    >
                      <p className="text-sm font-bold text-navy-700 dark:text-white">
                       

                          <div className=" w-10 flex flex-col justify-center items-center">
                          {" "}
                          <Icon  path={mdiAirplane} size={1} />
                          {" "}
                          <span>Airline</span>{" "}
                        </div>


                      </p>
                    </td>

                

                    <td
                      className="pt-[14px] pb-[18px] sm:text-[14px]"
                      role="cell"
                    >
                      <button
                        onClick={() => handleDelete(e.userid, e.username)}
                      >
                        <Icon color="red" path={mdiDelete} size={1} />
                      </button>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>

        </div>
      </div>
    </>
  );
};

export default Airlines;
