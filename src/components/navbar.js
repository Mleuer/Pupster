import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-light bg-light">
        <Link className="navbar-brand" to="/about">
        About
        </Link>
        <Link className="navbar-brand" to="/discover">
        Discover
        </Link>
        <Link className="navbar-brand" to="/search">
        Search
        </Link>
    </nav>
  );
}

export default Navbar;
