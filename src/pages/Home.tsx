import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { MdNavigateNext, MdLocationPin } from "react-icons/md";
import Skills from "../components/Home/Skills";
import Projects from "../components/Home/Projects";

export default function Home() {
  return (
    <div className="home">
      <div className="header row d-flex align-items-center">
        <div className="col-12 col-md-6 d-flex flex-column justify-content-center text-end">
          <h1 className="name">Jirath "Bart"</h1>
          <h1 className="name">Lojanarungsiri</h1>
          <h2 className="text-secondary">Full-Stack Web Developer</h2>
          <div className="based-in mb-2 text-secondary">
            <h5>
              Boston, MA <MdLocationPin className="fs-4 mb-2 " />{" "}
            </h5>
          </div>
          <div className="contacts">
            <a
              href="https://linkedin.com/in/jlojanarungsiri"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="fs-3 ms-3 accent1 icon rounded-1" />
            </a>
            <a
              href="https://github.com/Bartavius"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="fs-3 ms-3 accent1 icon rounded-5" />
            </a>
            <a
              href="mailto:lojanarungsiri.j@northeastern.edu"
              target="_blank"
              rel="noreferrer"
            >
              <IoMail className="fs-2 ms-3 accent1 icon rounded-3" />
            </a>
            <a
              className="ms-3"
              href="files/Web-Developer-Jirath-Lojanarungsiri-Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <button className="button-primary">
                Resume <MdNavigateNext className="fs-5" />
              </button>
            </a>
          </div>
        </div>

        <div className="profile-container col-sm-12 col-md-6">
          <div className="profile-border" />
          <img
            className="profile-picture"
            src="images/profile.jpeg"
            alt="Profile"
            draggable="false"
          />
        </div>
      </div>

      <hr />

      <Skills />
        
      <hr />

      <Projects />

      <hr />
      <a href="/about"><button className="button-secondary">About me</button></a>
<div className="container">
    <h1>Notes:</h1>

      <p>What this page should have</p>
      <ol>
        <li>Name with title (don't use a lot of texts), and location based</li>
        <li>picture</li>
        <li>
          If I'm including an about section (text) then don't use too much text,
          and have it be low attention component
        </li>
        <li>resume button, linkedin button, github button, email</li>
        <li>Projects section (cards)</li>
        <li>Skills / tech / stack / etc.</li>
        <li>education, related coursework, etc.</li>
      </ol>
      <p>Styling:</p>
      <ol>
        <li>needs to be compatible with every screen size</li>
        <li>4 colors: black, white, and two accent colors</li>
        <li>
          Projects / experience should be near the top (most important stuff
          closer to the top)
        </li>
        <ul>
          <li>
            Projects should have maybe a gif image as thumbnail with a simple
            title and short description / tech stack / role and responsibility
          </li>
          <li>Perhaps, "Hackathon submission for Hackbeanpot", etc</li>
          <li>
            Once clicked on, a modal window shows up with more information about
            the project, include a video demo and screenshots
          </li>
        </ul>
        <li>Skills / related courseworks should be "tags" styled</li>
        <li>
          Focus on minimality and simplicity. It should be there to show my
          abilities and what makes me unique. So, for that, be careful about
          choosing what styling that might detract the attention away from what
          really matters
        </li>
        <li>scrolling snap animation</li>
      </ol>
    </div>
    </div>
  );
}
