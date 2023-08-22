import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  MenuItem,
  IconButton,
  Button,
} from "@material-tailwind/react";
import {
  CubeTransparentIcon,
  Bars2Icon,
  ChartBarIcon,
  TableCellsIcon,
  ChatBubbleBottomCenterIcon,
} from "@heroicons/react/24/outline";
import Logo from '../../Images/logo.png';
import { Link } from "react-router-dom";
import { PlusCircleIcon } from "@heroicons/react/24/solid";

import Swal from 'sweetalert2'


 

 

 
// nav list component
const navListItems = [
  {
    label: "Statistics",
    icon: ChartBarIcon,
    path:"/"
  },
  {
    label: "Admins",
    icon: CubeTransparentIcon,
    path:"/ListAdmin"

  },
  {
    label: "Airlines",
    icon: TableCellsIcon,
    path:"/Airlines"

  },
  {
    label: "Add Airline",
    icon: PlusCircleIcon,
    path:"/AddAirline"

  },
  {
    label: "Inbox",
    icon: ChatBubbleBottomCenterIcon,
    path:"/ContactAdmin"

  },
];
 
function NavList() {

 function handleLogOut(){
  const ReactUrl = import.meta.env.VITE_REACT_APP_API_REACT_URL;

    


  Swal.fire({
    title: ` logout?  `,
    showConfirmButton: true,
    showCancelButton: true,
    confirmButtonText: "OK",
    cancelButtonText: "Cancel",
    icon: 'warning',
    iconColor: 'orange',
}
).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {

        Swal.fire(`  done `, '', 'success');
     
        localStorage.removeItem("auth");
        window.location.href = ReactUrl;
      

    } else
        Swal.fire(' Cancelled', '', 'error')

})

}

  return (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      {navListItems.map(({ label, icon , path}, key) => (
        
        <Link to={path}>
        <Typography
          key={label}
          variant="small"
          color="blue-gray"
          className="font-normal"
        >
          <MenuItem className="flex items-center gap-2 lg:rounded-full">
            {React.createElement(icon, { className: "h-[18px] w-[18px]" })}{" "}
            {label}
          </MenuItem>
        </Typography></Link>
      ))}
      <Button
       onClick={handleLogOut}
      className="w-full">LogOut</Button>
    </ul>
  );
}
 
export default function ComplexNavbar() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
 
  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false),
    );
  }, []);
 
  return (
    <Navbar className="max-w-full p-2 lg:rounded-full lg:pl-6 inline-block lg:hidden">
      <div className="relative  flex items-center text-blue-gray-900">
      <Link to="/">
            <Typography
              id="logo"
              className="mr-4 cursor-pointer  font-bold text-2xl"
            >
    <div className='flex items-center'> <img src={Logo} className='w-12 h-14' /> <p className='pt-3 text-lg font-bold'>BaGuard</p> </div>
            </Typography>
          </Link>
        <div className="absolute top-2/4 left-2/4 hidden -translate-x-2/4 -translate-y-2/4 lg:block">
          <NavList />
        </div>
        <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden"
        >
          <Bars2Icon className="h-6 w-6" />
        </IconButton>
      </div>
      <MobileNav open={isNavOpen} className="overflow-scroll">
        <NavList />
      </MobileNav>
    </Navbar>
  );
}