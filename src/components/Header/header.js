import React from "react";
import "./header.css";

const Header = ({ changePage }) => (
  <header>
    <h1>My Makeup Bag</h1>
    <div id="flex-nav">
      <nav className="nav-link" onClick={changePage}>
        Home
      </nav>
      <nav className="nav-link" onClick={changePage}>
        Search
      </nav>
      <nav className="nav-link" onClick={changePage}>
        My Bag
      </nav>
    </div>
  </header>
);

export default Header;
