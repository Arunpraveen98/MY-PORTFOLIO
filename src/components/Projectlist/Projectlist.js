import React from "react";
import "./ProjectCards.css";
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from "react-bootstrap";
import web_scrapper from "../../Images/Web-Scrapper.png";
import student_teacher_db from "../../Images/student-teacher.png";
import pending from "../../Images/pending.webp";
function Projectlist() {
  return (
    <div className="projectbackground">
      {/* ----------------------------- */}
      <Container fluid className="project-section">
        {/* ----------------------------- */}
        <Container>
          {/* ----------------------------- */}
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            {/* ----------------------------- */}
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={web_scrapper}
                isBlog={false}
                title="Web-Scrapper"
                description="This App makes it easy to find
                the perfect mobile for you from e-commerce websites like Flipkart ,
                Amazon and Snapdeal. so you can easily compare features and prices
                side-by-side. The project utilizes Node.js and MongoDB for backend
                processing, while React and Express provide an interactive frontend
                experience."
                Demo_Link="https://web-scrapper-e-commerce-arun.netlify.app/"
                Front_end="https://github.com/Arunpraveen98/Web-Scrapper-Frontend"
                Back_end="https://github.com/Arunpraveen98/Web-Scrapper-Backend"
              />
            </Col>
            {/* ----------------------------- */}
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={student_teacher_db}
                isBlog={false}
                title="Student-Teacher-DB"
                description=" This Student-Teacher-Management is a Single Page web application built
                using React.js. With its intuitive user interface, where Students
                and Teachers can CREATE data, have access to the added data , EDIT
                and UPDATE the data, and DELETE the data."
                Demo_Link="https://student-teacher-db-arun.netlify.app/"
                Front_end="https://github.com/Arunpraveen98/Student-Teacher-CRUD-Api"
                Back_end=""
              />
            </Col>
            {/* ----------------------------- */}
            {/* <Col md={4} className="project-card">
              <ProjectCard
                imgPath={student_db}
                isBlog={false}
                title="Student-DB"
                description="This project is a student management system that allows users to
                 create, read, update, and delete student records. 
                Developed using React.js, the user interface is intuitive and responsive, 
                making it easy for administrators to manage student data."
                ghLink="https://student-db-crud-app-arun.netlify.app/"
              />
            </Col> */}
            {/* ----------------------------- */}
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={pending}
                isBlog={false}
                title="Pending Project"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                aliquip ex ea commodo consequat"
              />
            </Col>
            {/* ----------------------------- */}
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={pending}
                isBlog={false}
                title="Pending Project"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                aliquip ex ea commodo consequat"
              />
            </Col>
            {/* ----------------------------- */}
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={pending}
                isBlog={false}
                title="Pending Project"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                aliquip ex ea commodo consequat"
              />
            </Col>
            {/* ----------------------------- */}
          </Row>
          {/* ----------------------------- */}
        </Container>
        {/* ----------------------------- */}
      </Container>
      {/* ----------------------------- */}
    </div>
  );
}
export default Projectlist;
