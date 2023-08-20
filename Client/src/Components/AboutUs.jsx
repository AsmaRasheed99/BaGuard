import React from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import Icon from "@mdi/react";
import {
  mdiBullseyeArrow,
  mdiHandHeartOutline,
  mdiRocketLaunchOutline,
} from "@mdi/js";

const AboutUs = () => {
  AOS.init();

  return (
    <>
      <section className="w-screen bg-base-200">
        <div className="container py-5 lg:py-24 mx-auto md:px-6">
          {/* Section: Design Block */}

          <div className="flex p-10 lg:p-0 flex-wrap items-center">
            <div className=" w-full shrink-0 grow-0 basis-auto md:px-6 lg:mb-0 lg:w-5/12">
              <div
                className="relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20"
                data-te-ripple-init=""
                data-te-ripple-color="light"
              >
                <img
                  src="https://img.freepik.com/free-photo/side-view-hands-holding-smartphone_23-2149764150.jpg?w=360&t=st=1692306357~exp=1692306957~hmac=bfdcb6aebf8ae22623b111a11ab3f5083c1159ffed908cd5ae8954faff96b117"
                  className="w-full"
                  data-aos="zoom-out"
                  data-aos-duration="2000"
                />
                  <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,0%,0.4)] bg-fixed">
                    <div className="flex h-full items-center justify-center">
                      <div
                        className="px-6 py-12 text-center text-white md:px-12"
                        data-aos="zoom-in"
                        data-aos-duration="2000"
                      >
                        <h3 className="mb-6 text-2xl font-bold uppercase">
                          The future is
                          <span className="text-[hsl(210,12%,80%)]"> now</span>
                        </h3>
                        <p className="text-[hsl(210,12%,80%)]">
                          Never lose sight of your belongings again! Introducing
                          our cutting-edge luggage tracking device - your
                          ultimate travel companion that ensures your bags are
                          always where you need them to be.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="relative overflow-hidden bg-cover bg-no-repeat">
                    <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                  </div>
              </div>
            </div>
            <div className="w-full pt-5 shrink-0 grow-0 basis-auto md:px-6 lg:w-7/12">
              <div
                className="mb-12 flex"
                data-aos="zoom-in-left"
                data-aos-duration="1000"
              >
                <div className="shrink-0">
                  <div className="rounded-md bg-[#102c57] p-4 shadow-lg dark:bg-[hsl(204,23%,30%)]">
                    <Icon path={mdiBullseyeArrow} color="white" size={1} />
                  </div>
                </div>
                <div className="ml-4 grow">
                  <p className="mb-1 font-bold">OUR VISION</p>
                  <p className="text-neutral-500 dark:text-neutral-300">
                    Revolutionize travel and logistics by seamlessly integrating
                    cutting-edge AI and IoT technologies, ensuring that every
                    traveler's belongings are tracked and managed efficiently
                    from A to Z, providing them with peace of mind and enhancing
                    their overall travel experience.
                  </p>
                </div>
              </div>
              <div
                className="mb-12 flex"
                data-aos="zoom-in-left"
                data-aos-duration="1000"
              >
                <div className="shrink-0">
                  <div className="rounded-md bg-[#102c57] p-4 shadow-lg dark:bg-[hsl(204,23%,30%)]">
                    <Icon
                      path={mdiRocketLaunchOutline}
                      color="white"
                      size={1}
                    />
                  </div>
                </div>
                <div className="ml-4 grow">
                  <p className="mb-1 font-bold">OUR MISSION</p>
                  <p className="text-neutral-500 dark:text-neutral-300">
                    Develop and deploy state-of-the-art AIoT luggage tracking
                    solutions that empower travelers and businesses alike with
                    real-time, accurate, and secure tracking capabilities,
                    streamlining luggage management processes, reducing loss and
                    theft, and contributing to a more connected and hassle-free
                    travel ecosystem.
                  </p>
                </div>
              </div>
              <div
                className="mb-12 flex"
                data-aos="zoom-in-left"
                data-aos-duration="1000"
              >
                <div className="shrink-0">
                  <div className="rounded-md bg-[#102c57] p-4 shadow-lg dark:bg-[hsl(204,23%,30%)]">
                    <Icon path={mdiHandHeartOutline} color="white" size={1} />
                  </div>
                </div>
                <div className="ml-4 grow">
                  <p className="mb-1 font-bold">OUR VALUES</p>
                  <p className="text-neutral-500 dark:text-neutral-300">
                    We are dedicated to revolutionizing the travel and logistics
                    sector through cutting-edge innovation. Our focus lies in
                    pioneering solutions that effectively address real-world
                    challenges. As we drive technological boundaries forward, we
                    prioritize the reliability of our AIoT luggage tracking
                    system. By ensuring unparalleled precision, dependability,
                    and security, we build a foundation of trust and assurance
                    among our valued customers. Guided by unwavering integrity,
                    we maintain the highest ethical benchmarks, fostering
                    transparency and honesty in all our engagements with
                    stakeholders, partners, and clients. Additionally, our
                    commitment to sustainability underscores our responsibility
                    towards the environment, reflecting our dedication to
                    environmentally conscious practices. In an ever-evolving
                    technological landscape, our adaptability remains a core
                    strength, allowing us to proactively navigate industry
                    shifts and maintain a competitive edge.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Section: Design Block */}
        </div>
      </section>

      {/* <div className="p-8">
        {" "}
        <h1 className="text-4xl font-medium text-[#102C57] text-center mt-6">
          {" "}
          Full-Funnel Social Analytics
        </h1>{" "}
        <p className="text-center mt-6 text-lg font-light text-[#102C57]">
          {" "}
          The time is now for it to be okay to be great. For being a bright
          color. For standing out.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 px-0 lg:px-20 md:px-10 pb-10">
        {" "}
        <div data-aos="fade-up" data-aos-duration="2000" className="p-8">
          {" "}
          <div className="bg-indigo-100 rounded-full w-16 h-16 flex justify-center items-center text-indigo-500 shadow-2xl">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              {" "}
              <path
                fillRule="evenodd"
                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />{" "}
            </svg>{" "}
          </div>{" "}
          <h2 className="uppercase mt-6 text-indigo-500 font-medium mb-3">
            {" "}
            VISION
          </h2>{" "}
          <p className="font-light text-sm text-gray-500 mb-3">
            {" "}
            Revolutionize travel and logistics by seamlessly integrating
            cutting-edge AI and IoT technologies, ensuring that every traveler's
            belongings are tracked and managed efficiently from A to Z,
            providing them with peace of mind and enhancing their overall travel
            experience{" "}
          </p>{" "}
        </div>{" "}
        <div data-aos="fade-up" data-aos-duration="2000" className="p-8">
          {" "}
          <div className="bg-green-100 rounded-full w-16 h-16 flex justify-center items-center text-green-500 shadow-2xl">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              {" "}
              <path
                fillRule="evenodd"
                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />{" "}
            </svg>{" "}
          </div>{" "}
          <h2 className="uppercase mt-6 text-green-500 font-medium mb-3">
            {" "}
            MISSION
          </h2>{" "}
          <p className="font-light text-sm text-gray-500 mb-3">
            {" "}
            Develop and deploy state-of-the-art AIoT luggage tracking solutions
            that empower travelers and businesses alike with real-time,
            accurate, and secure tracking capabilities, streamlining luggage
            management processes, reducing loss and theft, and contributing to a
            more connected and hassle-free travel ecosystem.{" "}
          </p>{" "}
        </div>{" "}
        <div data-aos="fade-up" data-aos-duration="2000" className="p-8">
          {" "}
          <div className="bg-red-100 rounded-full w-16 h-16 flex justify-center items-center text-red-500 shadow-2xl">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              {" "}
              <path
                fillRule="evenodd"
                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />{" "}
            </svg>{" "}
          </div>{" "}
          <h2 className="uppercase mt-6 text-red-500 font-medium mb-3">
            {" "}
            VALUES
          </h2>{" "}
          <p className="font-light text-sm text-gray-500 mb-3">
            {" "}
            We are dedicated to revolutionizing the travel and logistics sector
            through cutting-edge innovation. Our focus lies in pioneering
            solutions that effectively address real-world challenges. As we
            drive technological boundaries forward, we prioritize the
            reliability of our AIoT luggage tracking system. By ensuring
            unparalleled precision, dependability, and security, we build a
            foundation of trust and assurance among our valued customers. Guided
            by unwavering integrity, we maintain the highest ethical benchmarks,
            fostering transparency and honesty in all our engagements with
            stakeholders, partners, and clients. Additionally, our commitment to
            sustainability underscores our responsibility towards the
            environment, reflecting our dedication to environmentally conscious
            practices. In an ever-evolving technological landscape, our
            adaptability remains a core strength, allowing us to proactively
            navigate industry shifts and maintain a competitive edge.{" "}
          </p>{" "}
        </div>
      </div> */}
    </>
  );
};

export default AboutUs;
