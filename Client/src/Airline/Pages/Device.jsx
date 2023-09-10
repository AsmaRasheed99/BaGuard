import axios from 'axios';
import React, { useState } from 'react'


const Device = () => {
 const [Name , setName]= useState("");
 const [ticketId, setTicketId] = useState("");
 const [deviceId, setDeviceId] = useState("");
 const ApiUrl = import.meta.env.VITE_REACT_APP_API_URL;

 const TravellerData = {
    Name : Name,
      ticketId : ticketId,
      deviceId : deviceId,
 }
const handleConnect = async (e) => {
    e.preventDefault();
    try {
    const response = await axios.put(`${ApiUrl}/ConnectDevice`, TravellerData)
} catch (error){
  console.error(error.message)
}}

    return (
      <div className='flex justify-center flex-col items-center '>
        <span className='pt-20 font-bold text-2xl' >Connect Travellers to their BaGuard</span>
    <form className='flex flex-col p-10 gap-5 w-2/3' onSubmit={handleConnect}>
        <input className='bg-base-200 shadow-lg rounded-lg p-5' placeholder='enter name' value={Name} onChange={(e)=>{setName(e.target.value)}}/>
        <input className='bg-base-200 shadow-lg rounded-lg p-5' placeholder='enter device id' value={deviceId} onChange={(e)=>{setDeviceId(e.target.value)}}/>
        <input className='bg-base-200 shadow-lg rounded-lg p-5' placeholder='enter ticket id'value={ticketId} onChange={(e)=>{setTicketId(e.target.value)}}/>
        <button type='submit' className='p-3 bg-blue-200  rounded-lg font-bold hover:bg-blue-300 hover:scale-105'>connect</button>
    </form>
    </div>
  )
}

export default Device