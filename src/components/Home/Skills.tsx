import {
  SiTypescript,
  SiJavascript,
  SiKotlin,
  SiDjango,
  SiRacket,
  SiCplusplus,
  SiExpress,
  SiMongodb,
} from "react-icons/si";
import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaBootstrap,
  FaPython,
  FaFlask,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";

export default function Skills() {
  return (
    <div>
      <h1>Skills</h1>
      <div className="container mb-4">
        <h6>Languages</h6>
        <FaPython className="fs-1" /> Python
        <FaJava className="fs-1" /> Java
        <SiTypescript className="fs-1" /> TypeScript
        <SiJavascript className="fs-1" /> JavaScript
        <SiKotlin className="fs-1" /> Kotlin
        <SiRacket className="fs-1" /> Dr.Racket
        <SiCplusplus className="fs-1" /> C++
        <FaHtml5 className="fs-1" /> HTML5
        <FaCss3Alt className="fs-1"/> CSS
      </div>
      <div className="container mb-4">
        <h6>Technologies</h6>
        <span className="me-2"><FaReact className="fs-1" /> React</span>
        <span className="me-2"><FaNodeJs className="fs-1" /> Node.js</span>
        <RiNextjsFill className="fs-1" /> Next.js
        <FaBootstrap className="fs-1" /> Bootstrap
        <RiTailwindCssFill className="fs-1" /> Tailwind CSS
        <SiDjango className="fs-1" /> Django
        <FaFlask className="fs-1" /> Flask
        <SiExpress className="fs-1"/> Express.js
        <SiMongodb className="fs-1" /> MongoDB 
      </div>

      <div>
        notes:
        <ul>
          <li>make these tags / cards</li>
          <li>filter them properly</li>
          <li>styling</li>
          <li>To consider: actual logo images (with colors?)</li>
          <li>SQL?</li>
        </ul>
      </div>
    </div>
  );
}
