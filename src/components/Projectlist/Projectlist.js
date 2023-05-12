import React from "react";
import "./ProjectCards.css";
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from "react-bootstrap";
import Zen_class from "../../Images/E-Learning-App.png";
import web_scrapper from "../../Images/Web-Scrapper-App.png";
import Foodie_Fusion from "../../Images/Foodie-Fusion-App.png";
import Chatter_Box from "../../Images/Chatter-Box-App.png";
import Library_Management from "../../Images/Libarary-App.png";
import student_teacher_db from "../../Images/student-teacher.png";
// import pending from "../../Images/pending.webp";
function Projectlist() {
  console.log(process.env.REACT_APP_STUDENT_E_LEARNING_APP);
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
                imgPath={Zen_class}
                isBlog={false}
                title="E-Learning App"
                description="This project is an innovative student e-learning app built using MERN stack, 
                offering an immersive learning experience. Attend daily classes, complete daily tasks,
                 access free courses, and raise queries for a seamless and interactive educational journey."
                Demo_Link={`${process.env.REACT_APP_STUDENT_E_LEARNING_APP}`}
                Front_end="https://github.com/Arunpraveen98/STUDENT-E-LEARNING-FRONTEND"
                Back_end="https://github.com/Arunpraveen98/STUDENT-E-LEARNING-BACKEND"
              />
            </Col>
            {/* ----------------------------- */}
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Foodie_Fusion}
                isBlog={false}
                title="Foodie-Fusion App"
                description="This application is built with MERN stack and Stripe API,
                 providing a seamless and secure checkout process for customers. 
                With a user-friendly interface, customers can browse through a variety of Burgers, 
                pizzas and Juicy drinks, and place their order, with real-time updates on their order status."
                Demo_Link={`${process.env.REACT_APP_FOODIE_FUSION_APP}`}
                Front_end="https://github.com/Arunpraveen98/FOODIE-FUSION-APP-FRONTEND"
                Back_end="https://github.com/Arunpraveen98/FOODIE-FUSION-APP-BACKEND"
              />
            </Col>
            {/* ----------------------------- */}

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={web_scrapper}
                isBlog={false}
                title="Web-Scrapper App"
                description="This App makes it easy to find
                the perfect mobile for you from e-commerce websites like Flipkart ,
                Amazon and Snapdeal. so you can easily compare features and prices
                side-by-side. The project utilizes Node.js and MongoDB for backend
                processing, while React and Express provide an interactive frontend
                experience."
                Demo_Link={`${process.env.REACT_APP_WEB_SCRAPPER_APP}`}
                Front_end="https://github.com/Arunpraveen98/Web-Scrapper-Frontend"
                Back_end="https://github.com/Arunpraveen98/Web-Scrapper-Backend"
              />
            </Col>

            {/* ----------------------------- */}

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Chatter_Box}
                isBlog={false}
                title="Chatter-Box App"
                description="This chat application is built using the MERN stack and Socket.io,
                 allowing real-time communication between users. With a modern and intuitive user interface, 
                 users can easily connect and chat with each other on a secure platform."
                Demo_Link={`${process.env.REACT_APP_CHATTER_BOX_APP}`}
                Front_end="https://github.com/Arunpraveen98/CHATTER-BOX-FRONTEND"
                Back_end="https://github.com/Arunpraveen98/CHATTER-BOX-BACKEND"
              />
            </Col>
            {/* ----------------------------- */}
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Library_Management}
                isBlog={false}
                title="Library-Management App"
                description="I created an efficient library management system using React.js, 
                empowering readers to explore a vast collection of books while granting librarians 
                the authority to seamlessly add, edit, and delete books as needed."
                Demo_Link={`${process.env.REACT_APP_LIBRARY_MANAGEMENT_APP}`}
                Front_end="https://github.com/Arunpraveen98/LIBRARY-MANAGEMENT-REACT"
                Back_end=""
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={student_teacher_db}
                isBlog={false}
                title="Student-Teacher-DB"
                description=" This Student-Teacher-Management is a Single Page web application built
                using React.js. With its intuitive user interface, where Students
                and Teachers can CREATE data, have access to the added data , EDIT
                and UPDATE the data, and DELETE the data."
                Demo_Link={`${process.env.REACT_APP_STUDENT_TEACHER_APP}`}
                Front_end="https://github.com/Arunpraveen98/Student-Teacher-CRUD-Api"
                Back_end=""
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
