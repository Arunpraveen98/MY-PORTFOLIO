import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./ProjectCards.css";
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
            Live Demo
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
            Front-end
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
            Back-end
          </Button>
        ) : (
          ""
        )}
        {/* ----------------------------- */}
      </div>
      {/* <div className="project-demo">
            <Button
              className="viewbtn"
              variant="primary"
              href={props.ghLink}
              target="_blank"
            >
              Live Demo
            </Button>
          </div> */}
      {"\n"}
      {"\n"}

      {/* 
        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >

            {"Demo"}
          </Button>
        )} */}
      {/* ----------------------------- */}
    </Card>
  );
}
export default ProjectCard;
