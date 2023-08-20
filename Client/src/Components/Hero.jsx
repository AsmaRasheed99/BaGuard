import { Carousel } from "@material-tailwind/react";
import Hero2 from "../Images/Hero2.mp4";
import React, { useState } from "react";
import Video from "../Images/Hero.mp4";
import { useNavigate } from "react-router-dom";
import 'aos/dist/aos.css'; 
import AOS from 'aos';
import Icon from '@mdi/react';
import { mdiBagSuitcase } from '@mdi/js';


const Hero = () => {
  // const [ticketId, setTicketId] = useState("");
  // const Navigate = useNavigate();

  // const handleSubmit = () => {
  //   Navigate(`/Airline/${ticketId}`);
  // };
  return (
  
  <section id="Hero" className=" h-screen  bg-cover bg-no-repeat  " style={{backgroundImage:'url(https://images.pexels.com/photos/2120659/pexels-photo-2120659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' , backgroundAttachment:'fixed'}}>
      {/* <div className="w-fit h-fit bg-[#92886996] p-5 rounded-xl pb-16">
      <Icon path={mdiBagSuitcase} size={2} data-aos="zoom-in-down"  color={'#DAC0A3'} data-aos-duration="3000"/>

        <h1 className="max-w-2xl mb-4 text-4xl text-center font-extrabold text-[#102C57] tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
          Never Lose Your Luggage Again
        </h1>
        <p className="max-w-2xl mb-6 font-light text-center text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
          Track and Locate Your Baggage with Ease
        </p>
        <form onSubmit={() => handleSubmit()} className="flex justify-center items-center ">
          <label htmlFor="voice-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full lg:w-96">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-700 focus:border-blue-700 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="ticket Number"
              required=""
              value={ticketId}
              onChange={(e) => {
                setTicketId(e.target.value);
              }}
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 flex items-center pr-3"
            ></button>
          </div>
          <button
            type="submit"
            className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-500 rounded-lg border border-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              className="w-4 h-4 mr-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            Search
          </button>
        </form>
      </div> */}
      {/* <Carousel 
        className="rounded-xl"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        <div className="relative h-full w-full">
        <video
          src={Hero2}
          autoPlay
          muted
          className="h-full w-full object-cover"
        ></video>
        <div className="absolute inset-0 top-1/3 w-fit h-fit p-5 justify-center bg-[#140d5469]"><h1>hi</h1></div>
        </div>
        <img
          src="https://images.pexels.com/photos/11845909/pexels-photo-11845909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="fetures"
          className="h-full w-full object-cover"
          
        />
        <img
          src="https://images.pexels.com/photos/4671912/pexels-photo-4671912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="fetures"
          className="h-full w-full object-cover"
        />
      </Carousel> */}
    </section>
  );
};

export default Hero;
