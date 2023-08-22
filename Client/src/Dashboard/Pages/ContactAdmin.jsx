import React, { useEffect, useState } from "react";
import axios from "axios";
import Icon from '@mdi/react';
import { mdiEmail,
} from '@mdi/js';
import Avatar from '@mui/material/Avatar';
const ContactAdmin = () => {
  const ApiUrl = import.meta.env.VITE_REACT_APP_API_URL;

  const [currentUser, setCurrentUser] = useState({});
  const [avColor, setAvColor] = useState({});

  const [message, setMessage] = useState("");

  const [usersMessages, setuUsersMessages] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get( `${ApiUrl}/getUserMessage`);
      setuUsersMessages(response.data);
    } catch (error) {
      console.error("Error retrieving data:", error);
    }
  };

  useEffect(() => {
    fetchUsers();

  }, []);

  console.log(usersMessages);

  function HandleUser(e) {
    setCurrentUser(e);
    setAvColor({
      backgroundColor: Checkcolor(e), // Set the desired color
      color: "#fff", // Set the text color for contrast
    });
    console.log(e)
  }

  function Checkcolor(e) {
    let color0 = "";
    switch (e.Name.charAt(0).toLowerCase()) {
      case "a":
        color0 = "#4e6fb3ab";
        break;
      case "b":
        color0 = "#da5757ab";
        break;
      case "c":
        color0 = "#4e6fb3ab";
        break;
      case "d":
        color0 = "#c6dc37";
        break;
      case "e":
        color0 = "#bd62c8";
        break;
      case "f":
        color0 = "#fff101";
        break;
      case "g":
        color0 = "#5d6cb3";
        break;
      default:
        color0 = "#65bb5dab";
        break;
    }
    return color0;
  }

  function handleSendMessage() {
    const recipient = currentUser.Email;
    const subject = "Hello";
    const body = message;
    console.log(recipient);
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  }

  return (
    <>
      {/* component */}
      <div className="flex h-screen antialiased text-gray-800">
        <div className="flex flex-row h-full w-full overflow-x-hidden">
          <div className="flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0">
            <div className="flex flex-row items-center justify-center h-12 w-full">
              <div className="flex items-center justify-center rounded-2xl text-indigo-700 bg-indigo-100 h-10 w-10">
              <Icon className="text-[#7C9070]" path={mdiEmail} size={1} />

              </div>
              <div className="ml-2 font-bold text-2xl">Mail box</div>
            </div>
      
            <div className="flex flex-col mt-8">
              <div className="flex flex-row items-center justify-between text-xs">
                <span className="font-bold">Active Conversations</span>
                <span className="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full">
                  {usersMessages?.length}
                </span>
              </div>
              <div className="flex flex-col space-y-1 mt-4 -mx-2 h-auto overflow-y-auto">
                {usersMessages?.map((e) => {
                  console.log(e);
                  let firstLetter = e.Name.charAt(0);
                         console.log(firstLetter)
                  const avatarStyle = {
                    backgroundColor: Checkcolor(e), // Set the desired color
                    color: "#fff", // Set the text color for contrast
                  };
                console.log(avatarStyle)
                  return (
                    <button
                      onClick={() => HandleUser(e)}
                      className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2"
                    >
                      <Avatar style={avatarStyle}>{firstLetter}</Avatar>
                      <div className="ml-2 text-sm font-semibold">
                        {e.Name}
                        { console.log(e.Name)}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-auto h-full p-6">
            <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
              <div className="flex flex-col h-full overflow-x-auto mb-4">
                <div className="flex flex-col h-full">
                  <div className="grid grid-cols-12 gap-y-2">
                    <div className="col-start-1 col-end-8 p-3 rounded-lg">
                        {console.log(currentUser?.Message)}
                          
                            {currentUser?.Message?.map((e) => {
                              
                              return (
                                <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl mb-5">

                                <div className="flex flex-row items-center">

                                <Avatar style={avColor}>
                                  {currentUser.Name?.charAt(0)}
                                </Avatar>
                                
                                <p>{e}</p>
                                </div>
                                </div>
                              );
                            })}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
           
                <div className="flex-grow ml-4">
                  <div className="relative w-full">
                    <input
                      type="text"
                      className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
           
                  </div>
                </div>
                <div className="ml-4">
                  <button
                    onClick={() => handleSendMessage()}
                    className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0"
                  >
                    <span>Send</span>
                    <span className="ml-2">
                      <svg
                        className="w-4 h-4 transform rotate-45 -mt-px"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactAdmin;
