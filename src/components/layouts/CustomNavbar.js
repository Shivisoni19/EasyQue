import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Colors } from "../../utils/Colors";

export default function CustomNavbar() {
  const [show, setShow] = useState(false);
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light sticky-top"
        style={{ backgroundColor: Colors.Background }}
      >
        <div className="container">
          <Link
            className="navbar-brand nav-font"
            to="/"
          >
            <span className="text-white">EasyQue</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShow(!show)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${show ? "show" : ""}`}>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link mx-3 text-white font-44"
                  to="/about"
                  style={{ fontFamily: "Gilroy_Medium" }}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
              <Link
                  className="nav-link mx-3 text-white font-44"
                  style={{ fontFamily: "Gilroy_Medium" }}
                  to="/OurOfferings"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
