import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Home from "./Pages/Home";
import Nav from "./Components/Navbar";
import Footer from "./Components/Footer";
import Login from "./Pages/Login";
import Airline from "./Pages/Airline";
import Sidebar from "./Dashboard/Components/Sidebar";
import MainDashboard from "./Dashboard/Pages/MainDashboard";
import ComplexNavbar from "./Dashboard/Components/ComplexNavbar";
import AdminInfo from "./Dashboard/Pages/AdminInfo";
import Airlines from "./Dashboard/Pages/Airlines";
import AddAirlines from "./Dashboard/Pages/AddAirlines";
import ContactAdmin from "./Dashboard/Pages/ContactAdmin";
import SidebarAirline from "./Airline/Components/SidebarAirline";
import ComplexNavbarAirline from "./Airline/Components/ComplexNavbarAirline";
import MainDashboardAirline from "./Airline/Pages/MainDashboardAirline"
import Luggage from "./Airline/Pages/Luggage";

import { UserContext } from "./context/userContext";
import { useContext } from "react";
function App() {
  const ApiUrl = import.meta.env.VITE_REACT_APP_API_URL;
  const ReactUrl = import.meta.env.VITE_REACT_APP_API_REACT_URL;
  const { user } = useContext(UserContext);

  const [hideRouter2, setHideRouterAdmin] = useState(true);
  const [hideRouter1, setHideRouterCustomer] = useState(localStorage.auth !==undefined);
  const [hideRouter3, setHideRouterAirline] = useState(true);

  useEffect(() => {
    if (user && user?.Role !== undefined && localStorage.auth !== undefined) {
      setHideRouterAdmin(user.Role !== "Admin" );
      setHideRouterAirline(user.Role !== "Airline");
      setHideRouterCustomer(user.Role === "Admin" || user.Role === "Airline");
    }
  }, [user]);

  const AppRouter1 = () => {
    return (
      <Router>
        <Nav />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Airline/:TicketId" element={<Airline />} />
        </Routes>
        <Footer />
      </Router>
    );
  };

  const AppRouter2 = () => {
    return (
      <Router>
        <Sidebar />
        <div style={{ width: "100%" }}>
          <ComplexNavbar />
          <Routes>
            <Route index element={<MainDashboard />} />
            <Route path="ListAdmin" element={<AdminInfo />} />
            <Route path="Airlines" element={<Airlines />} />
            <Route path="AddAirline" element={<AddAirlines />} />
            <Route path="ContactAdmin" element={<ContactAdmin />} />
          </Routes>
        </div>
      </Router>
    );
  };
  const AppRouter3 = () => {
    return (
      <Router>
        <SidebarAirline />
        <div style={{ width: "100%" }}>
          <ComplexNavbarAirline />
          <Routes>
            <Route index element={<MainDashboardAirline />} />
            <Route path="/Luggage" element={<Luggage/>}/>
     
          </Routes>
        </div>
      </Router>
    );
  };
  return (
    <>
      {hideRouter1 ? null : (
        <>
          <AppRouter1 />
        </>
      )}

      {hideRouter2 ? null : (
        <>
          <div className="flex">
            <AppRouter2 />
          </div>
        </>
      )}
      {hideRouter3 ? null : (
        <>
          <div className="flex">
            <AppRouter3 />
          </div>
        </>
      )}
    </>
  );
}

export default App;
