import React from "react";

const Header = props => {
  return (
    <header className="header">
      <h1>To Do List :</h1>
      <span className="tagline">{props.tagline}</span>
    </header>
  );
};

export default Header;