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

function App() {
  const ApiUrl = import.meta.env.VITE_REACT_APP_API_URL;
  const ReactUrl = import.meta.env.VITE_REACT_APP_API_REACT_URL;

  const [hideRouter1, setHideRouterAirline] = useState(false);
  const [hideRouter2, setHideRouterAdmin] = useState(true);

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
    </>
  );
}

export default App;
