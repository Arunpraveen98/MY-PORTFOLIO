import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { AiFillFileExclamation } from "react-icons/ai";

import { Link } from "react-router-dom";
import "./Navbar.css";
import {
  FcBusinessman,
  FcHome,
  FcRating,
  FcDocument,
  FcContacts,
} from "react-icons/fc";

function Header() {
  // -------------------------------
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  // -------------------------------
  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }
  // -------------------------------
  window.addEventListener("scroll", scrollHandler);
  // -------------------------------
  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      {/* ----------------------------- */}
      <Navbar.Brand className="logotext" as={Link} to="/">
        {/* ----------------------------- */}
        <div className="logo">
          P<span className="logo-span">ortfolio</span>
        </div>
        {/* ----------------------------- */}
      </Navbar.Brand>
      {/* ----------------------------- */}
      <Navbar.Toggle
        className="navbar-toggler"
        aria-controls="responsive-navbar-nav"
        onClick={() => {
          updateExpanded(expand ? false : "expanded");
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </Navbar.Toggle>
      {/* ----------------------------- */}
      <Navbar.Collapse id="responsive-navbar-nav" className="responsive-navbar">
        {/* ----------------------------- */}
        <Nav className="ms-auto" defaultActiveKey="#home">
          {/* ----------------------------- */}
          <Nav.Item>
            <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
              <FcHome className="navbar-icons" /> Home
            </Nav.Link>
          </Nav.Item>
          {/* ----------------------------- */}
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/about"
              onClick={() => updateExpanded(false)}
            >
              <FcBusinessman className="navbar-icons" />
              About
            </Nav.Link>
          </Nav.Item>
          {/* ----------------------------- */}
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/skills"
              onClick={() => updateExpanded(false)}
            >
              <FcRating className="navbar-icons" />
              Skills
            </Nav.Link>
          </Nav.Item>
          {/* ----------------------------- */}
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/project"
              onClick={() => updateExpanded(false)}
            >
              <FcDocument className="navbar-icons" />
              Projects
            </Nav.Link>
          </Nav.Item>
          {/* ----------------------------- */}
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/contact"
              onClick={() => updateExpanded(false)}
            >
              <FcContacts className="navbar-icons" />
              Contact
            </Nav.Link>
          </Nav.Item>
          {/* ----------------------------- */}
          <Button
            onClick={() => {
              window.open(`${process.env.REACT_APP_ARUN_RESUME}`);
            }}
            className="resumebtn"
          >
            <span className="resume-title">Resume</span>{" "}
            <AiFillFileExclamation className="resume-title" />
          </Button>
          {/* ----------------------------- */}
        </Nav>
        {/* ----------------------------- */}
      </Navbar.Collapse>
      {/* ----------------------------- */}
    </Navbar>
  );
}

export default Header;
