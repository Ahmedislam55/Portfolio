import React from "react";
import "./resume.css";
import {
  FaGraduationCap,
  FaBriefcase,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaWpforms,
} from "react-icons/fa";

export default function Resume() {
  return (
    <div className="resume">
      {/* Education Section */}
      <section className="timeline">
        <div className="section-header">
          <div className="icon-box">
            <FaGraduationCap />
          </div>
          <h3 className="section-title">Education</h3>
        </div>
        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="timeline-item-title">
              Modern Academy Computer Science
            </h4>
            <span className="timeline-item-date">2019 — 2023</span>
            <p className="timeline-item-description">
              I graduated from Modern Academy with a degree in Computer Science,
              achieving a B+ grade.
              <br /> During my studies, I gained strong knowledge in Computer
              Science, programming, web development, and intelligent systems.
            </p>
          </li>
        </ol>
      </section>

      {/* Experience Section */}
      <section className="timeline">
        <div className="section-header">
          <div className="icon-box">
            <FaBriefcase />
          </div>
          <h3 className="section-title">Experience</h3>
        </div>
        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="timeline-item-title">Front end developer</h4>
            <span className="timeline-item-date">2022 — Present</span>
            <p className="timeline-item-description">
              Working on tasks and projects using HTML, CSS, JS, and React.{" "}
              <br />
              Front-end Development diploma by Route Academy.
            </p>
          </li>
          <li className="timeline-item">
            <h4 className="timeline-item-title">YouMats company</h4>
            <span className="timeline-item-date">2025 - Present</span>
            <p className="timeline-item-description">
              Working as a Frontend Developer. <br />
              Learned new materials and processes. <br />
              Developed responsive web applications. <br />
              Worked on a company page project assignment.
            </p>
          </li>
        </ol>
      </section>

      {/* Skills Section */}
      <section className="skills">
        <h3 className="skills-title">My Skills</h3>
        <ul className="skills-list">
          {/* Skill Item */}
          <li className="skill-item">
            <div className="skill-title">
              <FaHtml5 className="icon" />
              <h5 className="skill-name">HTML</h5>
            </div>
            <div className="skill-progress">
              <div className="progress-bar" style={{ width: "90%" }}></div>
            </div>
          </li>

          <li className="skill-item">
            <div className="skill-title">
              <FaCss3Alt className="icon" />
              <h5 className="skill-name">CSS</h5>
            </div>
            <div className="skill-progress">
              <div className="progress-bar" style={{ width: "90%" }}></div>
            </div>
          </li>
          <li className="skill-item">
            <div className="skill-title">
              <FaCss3Alt className="icon" />
              <h5 className="skill-name">JavaScript</h5>
            </div>
            <div className="skill-progress">
              <div className="progress-bar" style={{ width: "90%" }}></div>
            </div>
          </li>
          <li className="skill-item">
            <div className="skill-title">
              <FaCss3Alt className="icon" />
              <h5 className="skill-name">Bootstrap</h5>
            </div>
            <div className="skill-progress">
              <div className="progress-bar" style={{ width: "90%" }}></div>
            </div>
          </li>
          <li className="skill-item">
            <div className="skill-title">
              <FaCss3Alt className="icon" />
              <h5 className="skill-name">React.js</h5>
            </div>
            <div className="skill-progress">
              <div className="progress-bar" style={{ width: "80%" }}></div>
            </div>
          </li>
          <li className="skill-item">
            <div className="skill-title">
              <FaCss3Alt className="icon" />
              <h5 className="skill-name">Next.js</h5>
            </div>
            <div className="skill-progress">
              <div className="progress-bar" style={{ width: "80%" }}></div>
            </div>
          </li>
          <li className="skill-item">
            <div className="skill-title">
              <FaCss3Alt className="icon" />
              <h5 className="skill-name">Git</h5>
            </div>
            <div className="skill-progress">
              <div className="progress-bar" style={{ width: "80%" }}></div>
            </div>
          </li>
          <li className="skill-item">
            <div className="skill-title">
              <FaCss3Alt className="icon" />
              <h5 className="skill-name">GitHup</h5>
            </div>
            <div className="skill-progress">
              <div className="progress-bar" style={{ width: "80%" }}></div>
            </div>
          </li>

          {/* You can continue with other skills similarly */}
        </ul>
      </section>
    </div>
  );
}
