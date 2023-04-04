import React from "react";
import "./Aboutpage.css";
import { Container, Row, Col } from "react-bootstrap";
import { FaUser } from "react-icons/fa";

function Aboutpage() {
  return (
    <div className="aboutpagebackground">
      {/* -------------------------- */}
      <Container>
        {/* -------------------------- */}
        <Row className="textbackground">
          {/* -------------------------- */}
          <Col md={7}>
            {/* -------------------------- */}
            <h3 className="aboutmetext">
              <FaUser className="about-user" /> <span>About Me</span>
            </h3>
            {/* -------------------------- */}
            <p className="aboutdetails">
              I am a skilled Full Stack Developer with expertise in the MERN
              stack, With hands-on experience in both front-end and back-end
              development. I am well-versed in creating dynamic and responsive
              web applications. I am passionate about developing intuitive user
              experiences and optimizing performance through efficient coding
              practices.Curious to learn more about developing scalable
              distribution systems, love problem solving, and care about writing
              and maintainable code.
            </p>
            {/* -------------------------- */}
          </Col>
          {/* -------------------------- */}
          <Col md={5}>
            <div className="webimage">
              <lottie-player
                src="https://assets7.lottiefiles.com/packages/lf20_jtbfg2nb.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>
          </Col>
          {/* -------------------------- */}
        </Row>
        {/* -------------------------- */}
      </Container>
      {/* -------------------------- */}
    </div>
  );
}

export default Aboutpage;
