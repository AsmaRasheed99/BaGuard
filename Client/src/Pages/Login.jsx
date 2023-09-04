import React, { useState } from 'react'
import { TEInput, TERipple } from "tw-elements-react";
import logo from "../Images/Logo.png"
import axios from 'axios';

const Login = () => {
  const ApiUrl = import.meta.env.VITE_REACT_APP_API_URL;
  const ReactUrl = import.meta.env.VITE_REACT_APP_API_REACT_URL;

  const [Email , setEmail] = useState ('');
  const [Password , setPassword] = useState ('');


  const handleLogin = async(e) => {
e.preventDefault();

try {
  const Airline = await axios.post(`${ApiUrl}/LogIn`, {Email : Email , Password : Password})
  // console.log(Airline.data)
  
  if (Airline.data.error !== "incorrect password" && Airline.data.error === undefined) {
    localStorage.setItem("auth", Airline.data.token);
    window.location.href = `${ReactUrl}/`;
    setEmail("");
    setPassword("");
  } else {
    // setpasswordp(response.data.error === "incorrect password" ? "incorrect password": "");
    // setemailp(response.data.error === "incorrect password" ? " ": response.data.error );
  }
} catch (error) {
 console.error (error.message)
}



 }


  return (
    <section className="h-full bg-neutral-200 dark:bg-neutral-700 w-screen flex justify-center">
    <div className="container h-full p-10">
      <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
        <div className="w-full">
          <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
            <div className="g-0 lg:flex lg:flex-wrap">
              {/* <!-- Left column container--> */}
              <div className="px-4 md:px-0 lg:w-6/12">
                <div className="md:mx-6 md:p-12">
                  {/* <!--Logo--> */}
                  <div className="text-center">
                    <img
                      className="mx-auto w-48"
                      src={logo}
                      alt="logo"
                    />
                    <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                      We are The Bagguard Team
                    </h4>
                  </div>

                  <form onSubmit={handleLogin}>
                    {/* <!--Username input--> */}
                    <TEInput
                      type="email"
                      label="Email"
                      className="mb-4 "
                      value={Email}
                      onChange={(e)=>{setEmail(e.target.value);}}
                    ></TEInput>

                    {/* <!--Password input--> */}
                    <TEInput
                      type="password"
                      label="Password"
                      className="mb-4"
                      value={Password}
                      onChange={(e)=>{setPassword(e.target.value);}}

                    ></TEInput>

                    {/* <!--Submit button--> */}
                    <div className="mb-12 pb-1 pt-1 text-center">
                      <TERipple rippleColor="light" className="w-full">
                        <button
                          className="mb-3 bg-[#1976d2] inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                          type="submit"
                         
                        >
                          <span className='text-md'>Log in</span>
                        </button>
                      </TERipple>

                    </div>

                  
                  </form>
                </div>
              </div>

              {/* <!-- Right column container with background and description--> */}
              <div
                className="flex w-full items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none bg-[url('https://images.pexels.com/photos/35969/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-no-repeat "
           
              >
                <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                  <h4 className="mb-6 text-xl font-semibold">
                    We are more than just a company
                  </h4>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Login