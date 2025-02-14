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
    <div className="d-flex flex-column align-items-center justify-content-center">
      <h1 className="mb-4">Skills & Technologies</h1>
      <div className="container mb-4 d-flex flex-wrap justify-content-center">
        <div className="rounded-1 m-2 d-inline-block">
          <FaPython className="fs-1 accent1" /> Python
        </div>
        <div className="rounded-1 m-2 d-inline-block">
          <FaJava className="fs-1 accent1" /> Java
        </div>
        <div className="rounded-1 m-2 d-inline-block">
          <SiTypescript className="fs-1 accent1 rounded-1" /> TypeScript
        </div>
        <div className="rounded-1 m-2 d-inline-block">
          <SiJavascript className="fs-1 accent1 rounded-1" /> JavaScript
        </div>
        <div className="rounded-1 m-2 d-inline-block">
          <SiKotlin className="fs-1 accent1" /> Kotlin
        </div>
        <div className="rounded-1 m-2 d-inline-block">
          <SiRacket className="fs-1 accent1" /> Dr.Racket
        </div>
        <div className="rounded-1 m-2 d-inline-block">
          <SiCplusplus className="fs-1 accent1" /> C++
        </div>
        <div className="rounded-1 m-2 d-inline-block">
          <FaHtml5 className="fs-1 accent1" /> HTML5
        </div>
        <div className="rounded-1 m-2 d-inline-block">
          <FaCss3Alt className="fs-1 accent1" /> CSS
        </div>
      </div>
      <div className="container mb-4 d-flex flex-wrap justify-content-center">
        <div className="rounded-1 m-2 d-inline-block">
          <FaReact className="fs-1 accent1" /> React
        </div>
        <div className="rounded-1 m-2 d-inline-block">
          <FaNodeJs className="fs-1 accent1" /> Node.js
        </div>
        <div className="rounded-1 m-2 d-inline-block">
          <RiNextjsFill className="fs-1 accent1" /> Next.js
        </div>
        <div className="rounded-1 m-2 d-inline-block">
          <FaBootstrap className="fs-1 accent1" /> Bootstrap
        </div>
        <div className="rounded-1 m-2 d-inline-block">
          <RiTailwindCssFill className="fs-1 accent1" /> Tailwind CSS
        </div>
        <div className="rounded-1 m-2 d-inline-block">
          <SiDjango className="fs-1 accent1" /> Django
        </div>
        <div className="rounded-1 m-2 d-inline-block">
          <FaFlask className="fs-1 accent1" /> Flask
        </div>
        <div className="rounded-1 m-2 d-inline-block">
          <SiExpress className="fs-1 accent1" /> Express.js
        </div>
        <div className="rounded-1 m-2 d-inline-block">
          <SiMongodb className="fs-1 accent1" /> MongoDB
        </div>
      </div>
    </div>
  );
}
