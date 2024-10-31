import React from 'react';
import '../styles/Home.css';


function Home() {
  return (
    <div className="home">
      <h1>Keaton Law - Developer</h1>
      <p>Welcome to my personal website! I’m exploring full-stack development and DevOps practices. Here, you can learn more about my projects, interests, and coding journey.</p>

      <section className="about">
        <h2>About Me</h2>
        <p>
          I'm a developer passionate about automating tasks, improving efficiency, and building meaningful software solutions.
          I'm currently learning containerization, CI/CD, and cloud technologies to enhance my development skills.
        </p>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>JavaScript, React, Python, Django</li>
          <li>DevOps Basics: CI/CD</li>
          <li>Version Control: Git & GitHub</li>
        </ul>
      </section>

      <section className="contact">
        <h2>Contact</h2>
        <p>If you'd like to connect or discuss potential collaborations, feel free to reach out!</p>
      </section>
    </div>
  )
};

export default Home;
