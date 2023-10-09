import React from "react";
import Landingpage from "./Pages/Landingpage";
import Teamspage from "./Pages/Teamspage";
import Loginpage from "./Pages/Loginpage";
import Signinpage from "./Pages/Signinpage";
import { Route, Routes } from "react-router-dom";
import Roomspage from "./Pages/Roomspage";

function App() {
  return (
    <>
    <Routes>
     <Route excat path="/" element={<Landingpage />} />
     <Route path="/rooms" element={<Roomspage />} />
     <Route path="/teams" element={<Teamspage />} />
     <Route path="/login" element={<Loginpage />} />
     <Route path="/signin" element={<Signinpage />} />
    </Routes>
    </>
  );
}

export default App;
