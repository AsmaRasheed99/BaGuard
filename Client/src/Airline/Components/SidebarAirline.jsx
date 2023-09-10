import Icon from '@mdi/react';
import {mdiMapSearchOutline, mdiNote} from '@mdi/js';
import React from "react";
import Logo from '../../Images/logo.png';
import { UserContext } from "../../context/userContext";
import { useContext } from "react";

import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,

  } from "@material-tailwind/react";
  import {
    PresentationChartBarIcon,
    PowerIcon,
  } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

  export default function SidebarAirline() {
    const { user } = useContext(UserContext);
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
      <Card className=" min-h-[calc(100vh)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-white-900/5 Sidebar bg-white sideBarDash hidden lg:inline-block">
        <div className="mb-2 p-4">
        <Link to="/">
            <Typography
              id="logo"
              className="mr-4 cursor-pointer  font-bold text-2xl"
            >
    <div className='flex items-center'> <img src={Logo} className='w-12 h-14' /> <p className='pt-3 text-lg font-bold'>{user.Name}</p> </div>
            </Typography>
          </Link>
        </div>
        <List>
          <Link to='/'>
          <ListItem className="hover:bg-blue-300">
            <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5" />
            </ListItemPrefix>
            <a style={{color:'black'}}> Statistics </a>
          </ListItem>
          </Link>

          <Link to='/Device'>
          <ListItem className="hover:bg-blue-300">
            <ListItemPrefix>
            <Icon path={mdiNote } size={1} />
            </ListItemPrefix>
            <a style={{color:'black'}}> Device Connection </a>
          </ListItem>
          </Link>
          

           <Link to='/Luggage'>
           <ListItem className="hover:bg-blue-300">
            <ListItemPrefix>
            <Icon path={mdiMapSearchOutline} size={1} />
            </ListItemPrefix>
            <a style={{color:'black'}}> Luggage</a>
          </ListItem>
          </Link>

          <Link to='/AddAirline'>
          <ListItem className="hover:bg-blue-300">
            <ListItemPrefix>
            <Icon path={mdiNote } size={1} />
            </ListItemPrefix>
            <a style={{color:'black'}}> Reports </a>
          </ListItem>
          </Link>
         

   

           <button onClick={handleLogOut}>
           <ListItem className="hover:bg-blue-300">
            <ListItemPrefix>
              <PowerIcon className="h-5 w-5" />
            </ListItemPrefix>
            <a style={{color:'black'}}> Log Out </a>
          </ListItem>
          </button>
        </List>
      </Card>
    );
  }