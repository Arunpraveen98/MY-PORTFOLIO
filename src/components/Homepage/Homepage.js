import React from "react";
import "./Homepage.css";
import { Container, Row, Col } from "react-bootstrap";
import Text from "../Homepage/Text";
import { AiFillGithub } from "react-icons/ai";
import { GrMail } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";
function Home() {
  return (
    <div className="homepagebackground">
      {/* ----------------------------- */}
      <Container>
        {/* ----------------------------- */}
        <Row>
          {/* ----------------------------- */}
          <Col md={7}>
            {/* ----------------------------- */}
            <h2 className="headtext">
              Hello <span className="wave">👋 </span>
            </h2>
            {/* ----------------------------- */}
            <h2 className="nametext">I'm ARUN PRAVEEN R</h2>
            {/* ----------------------------- */}
            <span></span>
            <Text />
            {/* ----------------------------- */}
            <button
              onClick={() => {
                window.open(`${process.env.REACT_APP_GITHUB}`);
              }}
              className="socailmediabtn"
            >
              <AiFillGithub className="icon-github" />
            </button>
            {/* ----------------------------- */}
            <button
              onClick={() => {
                window.open(`${process.env.REACT_APP_LINKED_IN}`);
              }}
              className="socailmediabtn"
            >
              <FaLinkedinIn className="icon-linkedin" />
            </button>
            {/* ----------------------------- */}
            <button className="socailmediabtn">
              <a href={`${process.env.REACT_APP_MAIL}`}>
                <GrMail className="icon-mail" />
              </a>
            </button>
          </Col>
          {/* ----------------------------- */}
          <Col md={5}>
            <div className="imagedeveloper"></div>
          </Col>
          {/* ----------------------------- */}
        </Row>
        {/* ----------------------------- */}
      </Container>
      {/* ----------------------------- */}
    </div>
  );
}

export default Home;
