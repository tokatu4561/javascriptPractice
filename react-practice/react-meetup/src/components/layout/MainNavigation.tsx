import React from "react";
import { Link } from "react-router-dom";

export const MainNavigation = () => {
  return (
    <header>
      <h1>React Meetup</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetup</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New Meetup</Link>
          </li>
          <li>
            <Link to="/favorites">My Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
