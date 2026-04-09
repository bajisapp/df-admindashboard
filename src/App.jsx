import React from "react";
/* react-router-dom */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import MainLayout from "./layouts/MainLayout";
import ComingSoon from "./components/ComingSoon";

function App() {
  return (
     <BrowserRouter>
     <Routes>
      {/* Login */}
      <Route path="/" element={<Login />} />
      {/* Dashboard Layout */}
      <Route path="/dashboard" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
              <Route path="analytics" element={<ComingSoon title="Analytics" />} />
          <Route path="data" element={<ComingSoon title="Data" />} />
          <Route path="users" element={<ComingSoon title="Users" />} />
          <Route path="neoguest" element={<ComingSoon title="NeoGuest" />} />
          <Route path="access" element={<ComingSoon title="Access" />} />
          <Route path="iot" element={<ComingSoon title="IoT" />} />
          <Route path="settings" element={<ComingSoon title="Settings" />} />
            
      </Route>
     </Routes>
     </BrowserRouter>
  );
}

export default App;

/*  npm install react-router-dom */