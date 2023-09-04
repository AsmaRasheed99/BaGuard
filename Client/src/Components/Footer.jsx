import React, { useState } from "react";
// import Logo from "../Images/Logo.png";
import { HashLink } from "react-router-hash-link";
import Icon from "@mdi/react";
import { mdiArrowUp } from "@mdi/js";
import axios from "axios";
const Footer = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");
  const ApiUrl = import.meta.env.VITE_REACT_APP_API_URL;

  const handleContact = async (e) => {
    e.preventDefault();
    try {
      const NewMessage = await axios.post(`${ApiUrl}/UserMessage`, {
        Name: Name,
        Email: Email,
        Message: Message,
      });
      console.log(NewMessage.data);
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <>
      <footer
        id="footer"
        className="footer w-full flex flex-wrap justify-around p-10 bg-base-200 text-base-content"
      >
        <div className="flex w-full  justify-end">
          <HashLink smooth={true} to="#Hero">
            <button className="btn btn-circle bg-base-200 ">
              <Icon
                path={mdiArrowUp}
                color="gray"
                size={1.5}
                className="animate-bounce"
              />
            </button>
          </HashLink>
        </div>
        <div className=" mb-10 lg:w-96 lg:pl-0  w-60">
          <div className="mb-6 flex items-center ">
            {/* <img src={Logo} alt="logo" className="w-20" /> */}
            <p className="text-xl text-[#102C57] font-bold ml-1">BaGuard</p>
          </div>

          <p className="text-[#102C57] lg:w-80 w-60 mb-7  text-body-color">
            Never lose sight of your belongings again! Introducing our
            cutting-edge luggage tracking device - your ultimate travel
            companion that ensures your bags are always where you need them to
            be.
          </p>

          <p className="flex items-center text-sm font-medium text-[#102C57]">
            <span className="mr-3 text-primary">
              <svg
                width={19}
                height={21}
                viewBox="0 0 19 21"
                className="fill-current"
              >
                <path d="M17.8076 11.8129C17.741 11.0475 17.1088 10.5151 16.3434 10.5151H2.16795C1.40261 10.5151 0.803643 11.0808 0.703816 11.8129L0.00502514 18.8008C-0.0282506 19.2001 0.104853 19.6327 0.371059 19.9322C0.637265 20.2317 1.03657 20.398 1.46916 20.398H17.0755C17.4748 20.398 17.8741 20.2317 18.1736 19.9322C18.4398 19.6327 18.5729 19.2334 18.5396 18.8008L17.8076 11.8129ZM17.2751 19.1668C17.2419 19.2001 17.1753 19.2667 17.0422 19.2667H1.46916C1.36933 19.2667 1.2695 19.2001 1.23623 19.1668C1.20295 19.1336 1.1364 19.067 1.16968 18.9339L1.86847 11.9127C1.86847 11.7463 2.00157 11.6465 2.16795 11.6465H16.3767C16.5431 11.6465 16.6429 11.7463 16.6762 11.9127L17.375 18.9339C17.3417 19.0337 17.3084 19.1336 17.2751 19.1668Z" />
                <path d="M9.25704 13.1106C7.95928 13.1106 6.92773 14.1422 6.92773 15.4399C6.92773 16.7377 7.95928 17.7693 9.25704 17.7693C10.5548 17.7693 11.5863 16.7377 11.5863 15.4399C11.5863 14.1422 10.5548 13.1106 9.25704 13.1106ZM9.25704 16.6046C8.6248 16.6046 8.09239 16.0722 8.09239 15.4399C8.09239 14.8077 8.6248 14.2753 9.25704 14.2753C9.88928 14.2753 10.4217 14.8077 10.4217 15.4399C10.4217 16.0722 9.88928 16.6046 9.25704 16.6046Z" />
                <path d="M0.802807 6.05619C0.869358 7.52032 2.16711 8.11928 2.83263 8.11928H5.16193C5.19521 8.11928 5.19521 8.11928 5.19521 8.11928C6.19348 8.05273 7.19175 7.38722 7.19175 6.05619V5.25757C8.28985 5.25757 10.8188 5.25757 11.9169 5.25757V6.05619C11.9169 7.38722 12.9152 8.05273 13.9135 8.11928H13.9467H16.2428C16.9083 8.11928 18.206 7.52032 18.2726 6.05619C18.2726 5.95636 18.2726 5.59033 18.2726 5.25757C18.2726 4.99136 18.2726 4.75843 18.2726 4.72516C18.2726 4.69188 18.2726 4.6586 18.2726 4.6586C18.1727 3.72688 17.84 2.96154 17.2743 2.36258L17.241 2.3293C16.4091 1.56396 15.4109 1.13138 14.6455 0.865169C12.416 0 9.62088 0 9.48778 0C7.52451 0.0332757 6.26003 0.199654 4.36331 0.865169C3.63125 1.0981 2.63297 1.53068 1.80108 2.29603L1.7678 2.3293C1.20212 2.92827 0.869359 3.69361 0.769531 4.62533C0.769531 4.6586 0.769531 4.69188 0.769531 4.69188C0.769531 4.75843 0.769531 4.95809 0.769531 5.22429C0.802807 5.52377 0.802807 5.92308 0.802807 6.05619ZM2.5997 3.12792C3.26521 2.52896 4.09711 2.16292 4.7959 1.89672C6.52624 1.26448 7.65761 1.13138 9.55433 1.0981C9.68743 1.0981 12.2829 1.13138 14.2795 1.89672C14.9783 2.16292 15.8102 2.49568 16.4757 3.12792C16.8417 3.52723 17.0746 4.05964 17.1412 4.69188C17.1412 4.79171 17.1412 4.95809 17.1412 5.22429C17.1412 5.55705 17.1412 5.92308 17.1412 6.02291C17.1079 6.78825 16.3759 6.95463 16.276 6.95463H13.98C13.6472 6.92135 13.1148 6.78825 13.1148 6.05619V4.69188C13.1148 4.42567 12.9485 4.22602 12.7155 4.12619C12.5159 4.05964 6.69262 4.05964 6.49296 4.12619C6.26003 4.19274 6.09365 4.42567 6.09365 4.69188V6.05619C6.09365 6.78825 5.56124 6.92135 5.22848 6.95463H2.93246C2.83263 6.95463 2.10056 6.78825 2.06729 6.02291C2.06729 5.92308 2.06729 5.55705 2.06729 5.22429C2.06729 4.95809 2.06729 4.82498 2.06729 4.72516C2.00073 4.05964 2.23366 3.52723 2.5997 3.12792Z" />
              </svg>
            </span>
            <span>+012 (345) 678 99</span>
          </p>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover text-[#102C57]">About us</a>
          <a className="link link-hover text-[#102C57]">Contact</a>
          <a className="link link-hover text-[#102C57]">Jobs</a>
          <a className="link link-hover text-[#102C57]">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover text-[#102C57]">Terms of use</a>
          <a className="link link-hover text-[#102C57]">Privacy policy</a>
          <a className="link link-hover text-[#102C57]">Cookie policy</a>
        </div>
        <div>
          <span className="footer-title">Contact Us</span>
          <div className="form-control w-full lg:w-80 ">
            <form onSubmit={handleContact}>
              <input
                type="text"
                placeholder="Full Name"
                className="input input-bordered w-full pr-16"
                value={Name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full pr-16 my-2"
                value={Email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <textarea
                type="text"
                placeholder="Your Message"
                className="input input-bordered w-full pr-16"
                value={Message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              />
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
