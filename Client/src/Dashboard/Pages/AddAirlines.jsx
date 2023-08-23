import axios from 'axios';
import React, { useState } from 'react'
import { TEInput, TERipple } from "tw-elements-react";

const AddAirlines = () => {
    const ApiUrl = import.meta.env.VITE_REACT_APP_API_URL;
    const ReactUrl = import.meta.env.VITE_REACT_APP_API_REACT_URL;
  
    const [Email , setEmail] = useState ('');
    const [Password , setPassword] = useState ('');
  
  
    const handleRegister = async (e) => {
  e.preventDefault();
        
  try {
     const Airline = await axios.post(`${ApiUrl}/AddAirline`, {Email : Email , Password : Password,role:"Airline"})
     console.log(Airline.data)
  } catch (error) {
    console.error (error.message)
  }
     

   }
  
  return (
    <section className="h-screen p-5 bg-base-200 rounded-lg shadow-lg m-20">
    <div className="h-full ">
      {/* <!-- Left column container with background--> */}
      <div className="gap-6 flex h-full flex-wrap items-center justify-center">
        <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-5/12">
          <img
            src="https://volaro.net/wp-content/uploads/2020/08/airplane-in-the-clouds-getty.jpg"
            className="w-full"
            alt="Sample image"
          />
        </div>

        {/* <!-- Right column container --> */}
        <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
          <form onSubmit={handleRegister}>
       
      
            {/* <!-- Email input --> */}
            <TEInput
              type="email"
              label="Email address"
              size="lg"
              className="mb-6 bg-white"
              value={Email}
              onChange={(e)=>{setEmail(e.target.value);}}

            ></TEInput>

            {/* <!--Password input--> */}
            <TEInput
              type="password"
              label="Password"
              className="mb-6 bg-white"
              size="lg"
              value={Password}
              onChange={(e)=>{setPassword(e.target.value);}}

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
  )
}

export default AddAirlines