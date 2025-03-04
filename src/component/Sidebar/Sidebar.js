import React from "react";
import { Link } from "react-router-dom";
import SideBarRoute from "../../routes/Sidebar";

const Sidebar = () => {
  return (
    <div className="dash_board">
      <div className="dashboard">
        <div className="img1">
          <img src="/images/Frame 1321314952.png" alt="" />
        </div>
        <div className="dash1">
          <h4>Dashboard</h4>
        </div>
        <hr />
      </div>
      <div className="dash2">
        <ul>
          {SideBarRoute?.map((route, i) => (
           <div key={i} className={route.heading ? "has-heading" : ""}>
        {route.heading && <h4>{route.heading}</h4>}
              <li className="dash_1">
                <Link to={route.path} className="side_comp_cont">
                  <div className="image">{route.img}</div>
                  <span>{route.name}</span>
                </Link>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
