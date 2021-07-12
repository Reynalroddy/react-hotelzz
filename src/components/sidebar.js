import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { links } from "../data";
import { AppContext, AppProvider } from "../site-data/context";

const Sidebar = () => {
  const { closeSideBar, sideBar } = useContext(AppContext);
  return (
    <aside className={`${sideBar ? "sidebar show-sidebar" : "sidebar"}`}>
      <div className="sidebar-header">
        <Link className="logo fw-bold text-dark">ELIXIR</Link>
        <button className="close-btn" onClick={() => closeSideBar()}>
          <FaTimes></FaTimes>
        </button>
      </div>

      <ul className="links">
        {links.map((link) => {
          const { id, text, url } = link;
          return (
            <li key={id}>
              <a href={url}>{text}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
