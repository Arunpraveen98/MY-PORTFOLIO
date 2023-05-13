import React from "react";
import "./Myskills.css";
import {
  FaBootstrap,
  FaCss3Alt,
  FaGithubSquare,
  FaHtml5,
  FaJsSquare,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiMysql,
  SiMongodb,
  SiReact,
  SiExpress,
  SiNetlify,
  SiRender,
} from "react-icons/si";
function Skills() {
  return (
    <div className="skills-background">
      <div className="col-md-12">
        <div className="row">
          {/* ------------------------- */}
          <div className="col-lg-4 skills-col">
            <div className="tools-and-technologies-title">
              Tools and Technologies
            </div>
            {/* ------------------------- */}
            <div className="skills-card">
              <div className="skills-icon">
                <FaHtml5 className="html-icon" />
              </div>
              <div className="skills-name">HTML5</div>
            </div>
            {/* ------------------------- */}
            <div className="skills-card">
              <div className="skills-icon">
                <FaCss3Alt className="css-icon" />
              </div>
              <div className="skills-name">CSS3</div>
            </div>
            {/* ------------------------- */}
            <div className="skills-card">
              <div className="skills-icon">
                <FaJsSquare className="js-icon" />
              </div>
              <div className="skills-name">JavaScript</div>
            </div>
            {/* ------------------------- */}
            <div className="skills-card">
              <div className="skills-icon">
                <FaBootstrap className="bootstrap-icon" />
              </div>
              <div className="skills-name">Bootstrap</div>
            </div>
            {/* ------------------------- */}
            <div className="skills-card">
              <div className="skills-icon">
                <SiReact className="react-icon" />
              </div>
              <div className="skills-name">React.js</div>
            </div>
            {/* ------------------------- */}
            <div className="skills-card">
              <div className="skills-icon">
                <SiMysql className="mysql-icon" />
              </div>
              <div className="skills-name">MySQL</div>
            </div>
            {/* ------------------------- */}
            <div className="skills-card">
              <div className="skills-icon">
                <SiMongodb className="mongodb-icon" />
              </div>
              <div className="skills-name">MongoDB</div>
            </div>
            {/* ------------------------- */}
            <div className="skills-card">
              <div className="skills-icon">
                <SiExpress className="express-icon" />
              </div>
              <div className="skills-name">Express.js</div>
            </div>
            {/* ------------------------- */}
            <div className="skills-card">
              <div className="skills-icon">
                <FaNodeJs className="node-icon" />
              </div>
              <div className="skills-name">Node.js</div>
            </div>
            {/* ------------------------- */}
            <div className="skills-card">
              <div className="skills-icon">
                <FaGithubSquare className="github-icon" />
              </div>
              <div className="skills-name">GitHub</div>
            </div>
            {/* ------------------------- */}
            <div className="skills-card">
              <div className="skills-icon">
                <SiNetlify className="netlify-icon" />
              </div>
              <div className="skills-name">Netlify</div>
            </div>

            {/* ------------------------- */}
            <div className="skills-card">
              <div className="skills-icon">
                <SiRender className="render-icon" />
              </div>
              <div className="skills-name">Render</div>
            </div>
            {/* ------------------------- */}
          </div>
          {/* END OF SKILLS COL */}
          {/* ------------------------- */}
          {/* PROGRESS BAR */}
          <div className="col-lg-8 ratings-card">
            <div className="skills-title">Skills</div>
            <div className="row skills-row">
              {/* ------------------------- */}
              <div className="col-lg-5 progress-1st-col">
                {/* ------------------------- */}
                <div className="skill">
                  <h5 className="skills-name">HTML5</h5>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated html-progress"
                      role="progressbar"
                      style={{ width: "85%" }}
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                {/* ------------------------- */}
                <div className="skill">
                  <h5 className="skills-name">CSS3</h5>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated css-progress"
                      role="progressbar"
                      style={{ width: "80%" }}
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                {/* ------------------------- */}
                <div className="skill">
                  <h5 className="skills-name">JavaScript</h5>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated js-progress"
                      role="progressbar"
                      style={{ width: "85%" }}
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                {/* ------------------------- */}
                <div className="skill">
                  <h5 className="skills-name">Bootstrap</h5>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated bootstrap-progress"
                      role="progressbar"
                      style={{ width: "85%" }}
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                {/* ------------------------- */}
                <div className="skill">
                  <h5 className="skills-name">React.js</h5>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated react-progress"
                      role="progressbar"
                      style={{ width: "85%" }}
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                {/* ------------------------- */}
                <div className="skill">
                  <h5 className="skills-name">Netlify</h5>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated netlify-progress"
                      role="progressbar"
                      style={{ width: "85%" }}
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
              {/* END OF PROGRESS BAR 1st-COL */}
              {/* ------------------------- */}
              <div className="col-lg-5 progress-2nd-col">
                {/* ------------------------- */}
                <div className="skill">
                  <h5 className="skills-name">MySQL</h5>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated mysql-progress"
                      role="progressbar"
                      style={{ width: "80%" }}
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                {/* ------------------------- */}
                <div className="skill">
                  <h5 className="skills-name">MongoDB</h5>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated mongodb-progress"
                      role="progressbar"
                      style={{ width: "85%" }}
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                {/* ------------------------- */}
                <div className="skill">
                  <h5 className="skills-name">Express.js</h5>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated express-progress"
                      role="progressbar"
                      style={{ width: "85%" }}
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                {/* ------------------------- */}
                <div className="skill">
                  <h5 className="skills-name">Node.js</h5>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated node-progress"
                      role="progressbar"
                      style={{ width: "85%" }}
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                {/* ------------------------- */}
                <div className="skill">
                  <h5 className="skills-name">Github</h5>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated github-progress"
                      role="progressbar"
                      style={{ width: "85%" }}
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                {/* ------------------------- */}
                <div className="skill">
                  <h5 className="skills-name">Render</h5>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated render-progress"
                      role="progressbar"
                      style={{ width: "85%" }}
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                {/* ------------------------- */}
              </div>
              {/* END OF PROGRESS BAR 2nd-COL  */}
            </div>
            {/* END OF PROGRESS ROW */}
          </div>
          {/* END OF PROGRESS BAR WHOLE COL */}
        </div>
        {/* END OF SKILLS WHOLE ROW */}
      </div>
      {/* END OF SKILLS WHOLE COL */}
    </div>
  );
}

export default Skills;
