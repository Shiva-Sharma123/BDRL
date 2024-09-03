import React, { Suspense, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "../component/Sidebar/Sidebar";
import Navbar from "../component/Navbar/Navbar";
import routes from "../routes";

const Layout = () => {

  return (
    <div className="container">
      <Sidebar />

      <div className="main">
        {/* Example: Add a header component */}
        {/* <header> */}
          <Navbar />
        {/* </header> */}
        {/* Main content area */}
        <div className="main_container">
          <Suspense fallback={<h1>Loading...</h1>}>
            <Routes>
              {routes.map((route, key) => {
                return (
                  <Route
                    key={key}
                    exact={true}
                    path={`${route.path}`}
                    element={<route.component />}
                  />
                );
              })}

              {/* Redirecting unknown url to 404 page */}
              {/* <Route path="*" element={<Page404 />} /> */}
            </Routes>
          </Suspense>
          <div className="main_container_bottom"></div>
        </div>
      </div>
      {/* Example: Add a footer component */}
      {/* <footer>
        <Footer />
      </footer> */}
    </div>
  );
};

export default Layout;
