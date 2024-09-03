import React from "react";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import checkAuth from "./auth";
import Login from "./component/Login/Login.js";
import Layout from "./Layout/Layout.js";


const App = () => {
  const token = checkAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* Place new routes over this */}
        <Route path="/app/*" element={<Layout />} />

        <Route
          path="*"
          element={
            <Navigate to={token ? "/app/overview" : "/login"} replace />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
