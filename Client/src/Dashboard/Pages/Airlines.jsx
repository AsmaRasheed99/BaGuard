import Icon from "@mdi/react";
import { mdiDelete } from "@mdi/js";
import { mdiFileEdit } from "@mdi/js";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { mdiHumanEdit } from "@mdi/js";
import Swal from "sweetalert2";
import { mdiSilverware } from "@mdi/js";
import { mdiShieldCrownOutline } from "@mdi/js";
import { mdiAccountOutline } from "@mdi/js";

const Airlines = () => {




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
                  <p className="text-xs tracking-wide text-gray-600">NAME</p>
                </th>
                <th
                  colSpan={1}
                  role="columnheader"
                  title="Toggle SortBy"
                  className="border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-700"
                  style={{ cursor: "pointer" }}
                >
                  <p className="text-xs tracking-wide text-gray-600">email</p>
                </th>
              
                <th
                  colSpan={1}
                  role="columnheader"
                  title="Toggle SortBy"
                  className="border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-700"
                  style={{ cursor: "pointer" }}
                >
                  <p className="text-xs tracking-wide text-gray-600">role</p>
                </th>

                <th
                  colSpan={1}
                  role="columnheader"
                  title="Toggle SortBy"
                  className="border-b border-gray-200 pr-10 pb-[10px] text-start dark:!border-navy-700"
                  style={{ cursor: "pointer" }}
                >
                  <p className="text-xs tracking-wide text-gray-600">EDIT</p>
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

            {[].map((e) => {
              return (
                <tbody role="rowgroup">
                  <tr role="row">
                  <td
                      className="pt-[14px] pb-[18px] sm:text-[14px] flex items-center"
                      role="cell"
                    >
                   

                      <p className="text-sm font-bold text-navy-700 dark:text-white ml-3">
                        {/* {e.firstName} */}
                      </p>
                    </td>
                    <td
                      className="pt-[14px] pb-[18px] sm:text-[14px]"
                      role="cell"
                    >
                      <div className="flex items-center gap-2">
                        <div className="rounded-full text-xl">
                          <p className="text-sm font-bold text-navy-700 dark:text-white">
                            {/* {e.email} */}
                          </p>
                        </div>
                      </div>
                    </td>
                  
                    <td
                      className="pt-[14px] pb-[18px] sm:text-[14px]"
                      role="cell"
                    >
                      <p className="text-sm font-bold text-navy-700 dark:text-white">
                        {
                        e.role == 0 ? (
                          <div className=" w-10 flex flex-col justify-center items-center">
                            {" "}
                            <Icon path={mdiAccountOutline} size={1} />{" "}
                            <span>user</span>{" "}
                          </div>
                        ) : e.role == 1 ? (
                          <div className=" w-10 flex flex-col justify-center items-center">
                            {" "}
                            <Icon path={mdiShieldCrownOutline} size={1} />{" "}
                            <span>Admin</span>{" "}
                          </div>
                        ) : (

                          <div className=" w-10 flex flex-col justify-center items-center">
                          {" "}
                          <Icon  path={mdiSilverware} size={1} />
                          {" "}
                          <span>Provider</span>{" "}
                        </div>

                        )
                      }

                      </p>
                    </td>

                    <td
                      className="pt-[14px] pb-[18px] sm:text-[14px]"
                      role="cell"
                    >
                      <button
                        onClick={() => handleUpdate(e._id, e.role, e.firstName)}
                      >
                       
                          <Icon color="blue" path={mdiHumanEdit} size={1} />
                       
                      </button>
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
