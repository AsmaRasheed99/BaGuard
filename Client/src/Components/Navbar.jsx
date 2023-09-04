// import Logo from '../Images/Logo.png'
import React, { useState } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  LifebuoyIcon,
  PowerIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';


export default function Nav() {
  const ReactUrl = import.meta.env.VITE_REACT_APP_API_REACT_URL;

  const [openNav, setOpenNav] = React.useState(false);
  const [loggedIn, setLoggedIn] = useState(true);

  const navigate = useNavigate();

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        className="p-1 font-normal text-lg text-[#102C57] "
      >
        <HashLink smooth={true} onClick={()=>setOpenNav(false)} to="/#Hero" className="flex items-center ">
          Home
        </HashLink>
      </Typography>
      <Typography
        as="li"
        className="p-1 font-normal text-lg text-[#102C57]  "
      >
        <HashLink smooth={true} onClick={()=>setOpenNav(false)} to="/#About" className="flex items-center ">
          About
        </HashLink>
      </Typography>
      <Typography
        as="li"
        className="p-1 font-normal  text-lg  text-[#102C57]"
      >
        <HashLink smooth={true} onClick={()=>setOpenNav(false)} to="/#Features" className="flex items-center">
          Features
        </HashLink>
      </Typography>
      <Typography
        as="li"
        className="p-1 font-normal  text-lg  text-[#102C57]"
      >
        <HashLink smooth={true} onClick={()=>setOpenNav(false)} to="/#team" className="flex items-center">
          Team
        </HashLink>
      </Typography>
      <Typography
        as="li"
        className="p-1 font-normal  text-lg text-[#102C57] "
      >
        <HashLink smooth={true}  onClick={()=>setOpenNav(false)} to="/#footer" className="flex items-center">
          Contact
        </HashLink>
      </Typography>
    </ul>
  );


  const handleLogOut = () => {
    localStorage.removeItem("auth");
    setLoggedIn(false);
    setOpenNav(false);
    window.location.href = `${ReactUrl}/`;
  };

  const profileMenuItems = [
    {
      label: "Dashboard",
      icon: LifebuoyIcon,
    },
    {
      label: "Sign Out",
      icon: PowerIcon,
    },
  ];
  function ProfileMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const closeMenu = (label) => {
      setIsMenuOpen(false);

      if (label == "Sign Out") {
        localStorage.removeItem("auth");

        window.location.href = `${ReactUrl}/`;
      } else if (label == "Dashboard") {
        window.location.href = `${ReactUrl}/`;
      }
    };

    return (
      <div className="hidden lg:inline-block">
        <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
          <MenuHandler>
            <Button
              variant="text"
              color="blue-gray"
              className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 "
            >
              <svg
                xmlns="https://source.unsplash.com/MP0IUfwrn0A"
                className="h-7 w-7 text-blue-800"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                {" "}
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`h-3 w-3 transition-transform text-black ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </Button>
          </MenuHandler>
          <MenuList className="p-1">
            {profileMenuItems.map(({ label, icon }, key) => {
              const isLastItem = key === profileMenuItems.length - 1;
              return (
                <MenuItem
                  key={label}
                  onClick={() => {
                    closeMenu(label);
                  }}
                  className={`flex items-center gap-2 rounded  ${
                    isLastItem
                      ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                      : ""
                  }`}
                >
                  {React.createElement(icon, {
                    className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                    strokeWidth: 2,
                  })}
                  <Typography
                    as="span"
                    variant="small"
                    className="font-normal"
                    color={isLastItem ? "red" : "inherit"}
                  >
                    {label}
                  </Typography>
                </MenuItem>
              );
            })}
          </MenuList>
        </Menu>
      </div>
    );
  }
  return (
    <>
      <Navbar className="sticky top-0 z-20 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Link to="/">
            <Typography
              id="logo"
              className="mr-4 cursor-pointer  font-bold text-2xl"
            >
    {/* <div className='flex items-center'> <img src={Logo} className='w-12 h-14' /> <p className='pt-3 text-lg font-bold'>BaGuard</p> </div> */}
            </Typography>
          </Link>

          <div className="flex items-center gap-4 ">
            <div className="mr-4 hidden lg:block">{navList}</div>

            <IconButton
              variant="text"
              className=" absolute right-5 h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
          {localStorage.auth !== undefined && loggedIn ? (
            <>
              <ProfileMenu />
            </>
          ) : (
            <Link to="LogIn">
              <Button size="md" className="hidden lg:inline-block bg-blue-900">
                <span>Log In</span>
              </Button>
            </Link>
          )}
        </div>
        <Collapse open={openNav}>
          {navList}

          {localStorage.auth !== undefined ? (
            <>
              <Link to="/">
                <Button
                  onClick={() => setOpenNav(false)}
                  size="sm"
                  fullWidth
                  className="mb-2 bg-blue-900"
                >
                  <span>Dashboard</span>
                </Button>{" "}
              </Link>

              <Button
                size="sm"
                className=" w-full lg:inline-block bg-blue-900"
                onClick={handleLogOut}
              >
                <span>Log Out</span>
              </Button>
            </>
          ) : (
            <Link to="/Login">
              <Button
                onClick={() => setOpenNav(false)}
                size="sm"
                fullWidth
                className="mb-2 bg-blue-900"
              >
                <span>Log In</span>
              </Button>{" "}
            </Link>
          )}
        </Collapse>
      </Navbar>
    </>
  );
}
