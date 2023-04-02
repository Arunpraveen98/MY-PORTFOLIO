import React from "react";
import "./Contactpage.css";
import { Container } from "react-bootstrap";
import { IoLogoWhatsapp } from "react-icons/io";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { AiFillMessage } from "react-icons/ai";
import { IoMdSend } from "react-icons/io";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contactpage() {
  // -------------------------------
  const success = () => {
    toast.success("👍Successfully Message sended", {
      position: "top-center",
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 1,
      theme: "dark",
    });
  };
  // -------------------------------
  const form = useRef();
  // -------------------------------
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          form.current.reset();
          if (result.text) {
            success();
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  // -------------------------------
  return (
    <>
      <div className="contactbackground">
        {/* -------------------------- */}
        <div className="col-md-12">
          {/* -------------------------- */}
          <div className="row contact-row">
            {/* -------------------------- */}
            <div className="col-md-6 get-in-touch">
              {/* -------------------------- */}
              <Container className="contact-container">
                <h2 className="contacthead">Get In Touch</h2>
                {/* -------------------------- */}
                <div className="col-md-7 get-div">
                  {/* -------------------------- */}
                  <p className="contactpara">
                    Thank you for taking the time to visit my portfolio. I am a
                    MERN stack developer currently seeking new opportunities to
                    grow and develop my skills in web development. If you are
                    looking for a skilled and passionate developer to join your
                    team, I would love to hear from you or just want to chat
                    about web development, please feel free to reach out to me.
                  </p>
                  {/* -------------------------- */}
                  <button
                    className="contactbtn"
                    onClick={() => {
                      window.open(process.env.REACT_APP_WHATSAPP);
                    }}
                  >
                    Say Hello
                    <IoLogoWhatsapp className="watsapp-icon" />{" "}
                  </button>
                  {/* -------------------------- */}
                </div>
                {/* -------------------------- */}
              </Container>
              {/* -------------------------- */}
            </div>
            {/* -------------------------- */}
            <div className="col-md-6 input-form">
              {/* -------------------------- */}
              <div className="contact-form">
                {/* -------------------------- */}
                <h2 className="contact-me">
                  Contact Me <AiFillMessage className="contact-icon" />
                </h2>
                {/* -------------------------- */}
                <form ref={form} onSubmit={sendEmail} className="contact">
                  {/* -------------------------- */}
                  <div className="input-div">
                    {/* -------------------------- */}
                    <div>
                      <label className="input-label">Name</label>
                      <br></br>
                      <input
                        type="text"
                        name="user_name"
                        className="text-box"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    {/* -------------------------- */}
                    <div>
                      <label className="input-label">Email</label>
                      <br></br>
                      <input
                        type="email"
                        name="user_email"
                        className="text-box"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                    {/* -------------------------- */}
                    <div>
                      <label className="input-label">Message</label>
                      <br></br>
                      <textarea
                        name="message"
                        className="text-box"
                        placeholder="Your Message"
                        required
                      />
                    </div>
                    {/* -------------------------- */}
                  </div>
                  {/* -------------------------- */}
                  <div className="send-button">
                    <button
                      type="submit"
                      name="submit"
                      className="send-btn"
                      value="Send"
                    >
                      SEND <IoMdSend />
                    </button>
                  </div>
                  {/* -------------------------- */}
                </form>
                {/* -------------------------- */}
              </div>
              {/* -------------------------- */}
            </div>
            {/* -------------------------- */}
            <p className="copyright">
              © Copyright 2023.
              <br />
              Designed & Built by - <span>Arun Praveen</span>
            </p>
            {/* -------------------------- */}
          </div>
          {/* -------------------------- */}
        </div>
        {/* -------------------------- */}
      </div>
      {/* -------------------------- */}
    </>
  );
}

export default Contactpage;
