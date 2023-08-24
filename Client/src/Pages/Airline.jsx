import Icon from "@mdi/react";
import { mdiAirplaneCheck , mdiSecurity ,mdiBagCarryOnCheck ,mdiSortReverseVariant, mdiAirplaneClock} from "@mdi/js";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AWSMap from '../Components/Map'
const Airline = () => {

  const [activeTab, setActiveTab] = useState("tab1");
  const { TicketId } = useParams();

   const [ticket , setTicket] = useState("");
  const [tickets,setTickets]=useState([    
    {name:"asma",_id:"123456", number:"0797979521", Latitude: 31.963158, Longitude: 35.930359},
    {name:"majdi",_id:"756887", number:"0797979521", Latitude: 61.539449, Longitude: 67.035957},
    {name:"tamara",_id:"757575", number:"0797979521",Latitude: -33.8688, Longitude: 151.2093},
])
  
useEffect(()=>{
 if (tickets && TicketId) {
  setTicket(
     tickets.filter((ticket)=>{
      return ticket._id === TicketId
    })
  )

 }
},[tickets, TicketId])

// console.log(ticket)

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <>
    <div className="h-screen w-screen flex justify-center bg-base-200">
        <AWSMap ticket={ticket}/>
        </div>

        <>
        <section className="px-0 pt-5 ">
  
  <ul className="flex flex-wrap lg:flex-nowrap text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
    <li className="w-full">
      <div
        className={`inline-block w-full p-4 h-full text-gray-900 cursor-pointer bg-gray-100 rounded-l-lg  active  dark:bg-gray-700 dark:text-white  ${
          activeTab === "tab1" ? "active:bg-gray-200" : ""
        }`}
        onClick={() => openTab("tab1")}
        aria-current="page"
      >
        Damage Report
      </div>
    </li>
  
    <li className="w-full">
      <div
        className={`inline-block w-full h-full p-4 bg-white cursor-pointer hover:text-gray-700 hover:bg-gray-50 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700 ${
          activeTab === "tab2" ? "active:bg-gray-200" : ""
        }`}
        onClick={() => openTab("tab2")}
      >
        Estimated Arrival Time
      </div>
    </li>
   
  </ul>
  <div
                id="tab1"
                className={`tabcontent p-10 text-center ${
                  activeTab === "tab1" ? "" : "hidden"
                }`}
              >
    
              a damage happend at the "UNLOADING" stage <br></br>
              <span className="font-bold text-lg">time</span> : 5:30 PM <br></br>
              <span className="font-bold text-lg">Date</span> : October 19 2023 <br></br>
              <span className="font-bold text-lg">Damage Percentage</span> : 10% 

              </div>
                <div
                id="tab2"
                className={`tabcontent p-10 text-center ${
                  activeTab === "tab2" ? "" : "hidden"
                }`}
              >I am an Estimation Time report 
               
               your lugagge will be at "Airport Name" <br></br>
               ready to be taken home in <span className="font-bold text-lg">40 minutes</span>
              </div>
  </section>
</>

      
    </>
  );
};

export default Airline;
