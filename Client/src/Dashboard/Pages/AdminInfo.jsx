import Icon from "@mdi/react";
import { mdiDelete} from "@mdi/js";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { mdiShieldCrownOutline } from "@mdi/js";
import axios from "axios";
import { TEInput, TERipple } from "tw-elements-react";

const AdminInfo = () => {
  const ApiUrl = import.meta.env.VITE_REACT_APP_API_URL;
  const ReactUrl = import.meta.env.VITE_REACT_APP_API_REACT_URL;

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Name, setName] = useState("");
  const [Admins, setAdmins] = useState([]);
  const [Deleted, setDeleted] = useState(false);
  const [Added, setAdded] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const Admin = await axios.post(`${ApiUrl}/AddAirline`, {
        Email: Email,
        Password: Password,
        Name: Name,
        role: "Admin",
      });
      setAdded(true);
    } catch (error) {
      console.error(error.message);
    }
  };

  const getAllAdmins = async () => {
    try {
      const Admins = await axios.get(`${ApiUrl}/AllAdmins`);
      setAdmins(Admins.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getAllAdmins();
  }, [Deleted , Added]);
 
  const handleDelete = async (id) => {
    try {
      const Delete = await axios.delete(`${ApiUrl}/DeleteAdmin/${id}`);
      setDeleted(true)
    } catch (error) {
      console.error(error.message);
    }
    }
    
  return (
    <>
      <div className="bg-[#ffffff] mr-5 ml-5 p-10 rounded-2xl min-h-[calc(100vh)]   ">
        <span className="font-bold text-xl py-5 px-3">Add Admin</span>
        <section className="p-14 rounded-lg shadow-lg bg-base-200 mb-20">
          <div className="h-full">
            {/* <!-- Left column container with background--> */}
            <div className=" flex h-full flex-wrap justify-around items-center">
              {/* <!-- Right column container --> */}
              <div className="w-1/2">
                <img src="https://www.lets-connect.co.uk/wp-content/uploads/2020/04/man-using-desktop-computer.jpg" />
              </div>
              <div className="mb-12 md:mb-0 w-80">
                <form onSubmit={handleRegister}>
                  {/* <!-- Email input --> */}
                  <TEInput
                    type="email"
                    label="Email address"
                    size="lg"
                    className="mb-6"
                    value={Email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  ></TEInput>
                  {/* <!-- Name input --> */}
                  <TEInput
                    type="text"
                    label="Name"
                    size="lg"
                    className="mb-6"
                    value={Name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  ></TEInput>

                  {/* <!--Password input--> */}
                  <TEInput
                    type="password"
                    label="Password"
                    className="mb-6"
                    size="lg"
                    value={Password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  ></TEInput>

                  {/* <!-- Login button --> */}
                  <div className="text-center lg:text-left">
                    <TERipple rippleColor="light">
                      <button
                        type="submit"
                        className="inline-block rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                      >
                        Register
                      </button>
                    </TERipple>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
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
                  <p className="text-xs tracking-wide text-gray-600">Name</p>
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

            {Admins?.map((e) => {
              return (
                <tbody role="rowgroup" key={e._id}>
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
                      <div className="flex items-center gap-2">
                        <div className="rounded-full text-xl">
                          <p className="text-sm font-bold text-navy-700 dark:text-white">
                            {e.Name}
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
                          <Icon path={mdiShieldCrownOutline} size={1} />{" "}
                          <span>Admin</span>{" "}
                        </div>
                      </p>
                    </td>

                    <td
                      className="pt-[14px] pb-[18px] sm:text-[14px]"
                      role="cell"
                    >
                      <button
                      onClick={()=> handleDelete(e._id)}>
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

export default AdminInfo;
