import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { links } from "../data";
import { BiMenu } from "react-icons/bi";
import { AppContext, AppProvider } from "../site-data/context";

const Navbar = () => {
  const { openSideBar } = useContext(AppContext);
  return (
    <div className="nav">
      <Link className="logo fw-bold">ELIXIR</Link>

      <BiMenu className="menuu fw-bold" onClick={() => openSideBar()} />

      <div className="navmenu">
        {links.map((item) => {
          const { id, url, text } = item;
          return (
            <Link key={id} to={url} className="nav-menu-link">
              {text}
            </Link>
          );
        })}
      </div>
      <button className="btn">contact us</button>
    </div>
  );
};

export default Navbar;
