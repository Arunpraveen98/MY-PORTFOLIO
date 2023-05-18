import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./ProjectCards.css";
import { FaCode, FaLink } from "react-icons/fa";
function ProjectCard(props) {
  return (
    <Card className="project-card-view">
      {/* ----------------------------- */}
      <div className="card-img-div">
        <Card.Img
          className="card-img shadow-inset-center"
          variant="top"
          src={props.imgPath}
          alt="card-img"
        />
      </div>
      {/* ----------------------------- */}
      <Card.Body>
        {/* ----------------------------- */}
        <Card.Title className="project-title">{props.title}</Card.Title>
        {/* ----------------------------- */}
        <Card.Text
          className="card-description"
          style={{ textAlign: "justify" }}
        >
          {props.description}
        </Card.Text>
        {/* ----------------------------- */}
      </Card.Body>
      {/* ----------------------------- */}
      <div className="button-groups">
        {/* ----------------------------- */}
        {props.Demo_Link ? (
          <Button
            className="viewbtn"
            variant="primary"
            href={props.Demo_Link}
            target="_blank"
          >
            Live Demo <FaLink className="btn-link" />
          </Button>
        ) : (
          ""
        )}
        {/* ----------------------------- */}
        {props.Front_end ? (
          <Button
            className="viewbtn"
            variant="primary"
            href={props.Front_end}
            target="_blank"
          >
            Front-end <FaCode className="btn-link" />
          </Button>
        ) : (
          ""
        )}
        {/* ----------------------------- */}
        {props.Back_end ? (
          <Button
            className="viewbtn"
            variant="primary"
            href={props.Back_end}
            target="_blank"
          >
            Back-end <FaCode className="btn-link" />
          </Button>
        ) : (
          ""
        )}
        {/* ----------------------------- */}
      </div>

      {/* ----------------------------- */}
    </Card>
  );
}
export default ProjectCard;
