import React from "react";
import { NavLink } from "react-router-dom";

import "./sidebar.css";

import sidebarMenu from "../../untils/sidebarMenu";


const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-container">
        {sidebarMenu.map((item) => (
          <NavLink
            className="sidebarNavLink"
            key={item.path}
            to={item.path}
            end={item.end}
          >
            <span className="sidebar-text" key={item.id}>
              {item.text}
            </span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
