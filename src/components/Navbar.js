import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const [country, setCountry] = useState("us");
  const onTrigger = (e) => {
    e.preventDefault();
    console.log("hello");
    props.countryCallback(e.target.getAttribute("attributeval"));
    console.log(e.target);
    setCountry(e.target.getAttribute("attributeval"));
  };
  return (
    <div>
      {" "}
      <nav className="navbar fixed-top navbar-expand-lg bg-dark text-white ">
        <div className="container-fluid ">
          <Link className="navbar-brand  text-white" to="/">
            News-quick
          </Link>
          <button
            className="navbar-toggler  text-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon navbar-dark"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active  text-white"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  text-white " to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle text-white"
                  to="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Countries
                </Link>
                <ul className="dropdown-menu  text-white">
                  <li
                    style={{ cursor: "pointer" }}
                    className="navbar-text text-white mx-2"
                    onClick={onTrigger}
                  >
                    <Link
                      to="/United-states"
                      className="dropdown-item"
                      attributeval="us"
                    >
                      United States
                    </Link>
                  </li>
                  <li
                    style={{ cursor: "pointer" }}
                    className="navbar-text mx-2 text-white"
                    onClick={onTrigger}
                  >
                    <Link
                      className="dropdown-item"
                      to="/United-Kingdom"
                      attributeval="gb"
                    >
                      United Kingdom
                    </Link>
                  </li>
                  <li
                    className="navbar-text mx-2 text-white"
                    onClick={onTrigger}
                    style={{ cursor: "pointer" }}
                  >
                    <Link
                      className="dropdown-item"
                      to="/India"
                      attributeval="in"
                    >
                      India
                    </Link>
                  </li>
                  <li
                    className="navbar-text mx-2 text-white"
                    onClick={onTrigger}
                    style={{ cursor: "pointer" }}
                  >
                    <Link
                      className="dropdown-item"
                      to="/China"
                      attributeval="cn"
                    >
                      China
                    </Link>
                  </li>
                  <li
                    className="navbar-text mx-2 text-white"
                    onClick={onTrigger}
                    style={{ cursor: "pointer" }}
                  >
                    <Link
                      className="dropdown-item"
                      to="/France"
                      attributeval="fr"
                    >
                      France
                    </Link>
                  </li>
                  <li
                    className="navbar-text mx-2 text-white"
                    onClick={onTrigger}
                    style={{ cursor: "pointer" }}
                  >
                    <Link
                      className="dropdown-item"
                      to="/Italy"
                      attributeval="it"
                    >
                      Italy
                    </Link>
                  </li>
                  <li
                    className="navbar-text mx-2 text-white"
                    onClick={onTrigger}
                    style={{ cursor: "pointer" }}
                  >
                    <Link
                      className="dropdown-item"
                      to="/Japan"
                      attributeval="jp"
                    >
                      Japan
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item ">
                <Link className="nav-link text-white" to={`/Business`}>
                  Business
                </Link>
              </li>
              <li className="nav-item text-white">
                <Link className="nav-link text-white" to={`/Entertainment`}>
                  Entertainment
                </Link>
              </li>
              <li className="nav-item text-white">
                <Link className="nav-link text-white" to={`/Health`}>
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to={`/Science`}>
                  Science
                </Link>
              </li>
              <li className="nav-item text-white">
                <Link className="nav-link text-white" to={`/Sports`}>
                  Sports
                </Link>
              </li>
              <li className="nav-item text-white">
                <Link className="nav-link text-white" to={`/Technology`}>
                  Technology
                </Link>
              </li>
            </ul>
            <span
              className="navbar-text mx-2 text-white country-acronym"
              style={{ position: "absolute" }}
            >
              {country ? country.toUpperCase() : "NA"}
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
