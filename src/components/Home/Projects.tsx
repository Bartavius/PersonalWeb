import Cards from "../cards";

export default function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <div className="project-cards container d-flex flex-wrap justify-content-center">
        <div className="d-inline-block">
          <Cards
            image="images/HighCard/HighCard.png"
            title="High Card"
            body="FinHacks 2025 Best Startup Potential Winner"
            tags={["React", "Next.js", "TailwindCSS", "MongoDB", "TypeScript", "JavaScript", "HTML", "CSS"]}
            websiteLink="https://devpost.com/software/high-card"
            githubLink="https://github.com/williampan22/finhacks2025"
          />
        </div>
        <div className="d-inline-block">
          <Cards
            image="images/JAZA/JAZA.png"
            title="J.A.Z.A - Just A Zip Away"
            body="HackBeanpot 2025 Submission"
            tags={["React", "Django", "Bootstrap", "SQLite", "TypeScript", "JavaScript", "Python", "HTML", "CSS"]}
            websiteLink="https://devpost.com/software/j-a-z-a-just-a-zip-away"
            githubLink="https://github.com/Bartavius/JAZA-Just-A-Zip-Away"
          />
        </div>
        <div className="d-inline-block">
          <Cards
            image="images/Kanbas/kanbas.png"
            title="Kanbas - Canvas Clone"
            body="The server is hosted for free on render. Please wait a moment for the server to load."
            tags={["React", "Node.js", "Express.js", "MongoDB", "Redux.js", "Axios", "TypeScript", "HTML", "CSS"]}
            websiteLink="https://kanbas-mern.netlify.app/"
            githubLink="https://github.com/Bartavius/Kanbas"
          />
        </div>
      </div>

      <div>
        <h1>Notes</h1>
        <ul>
          <li>gif thumbnails</li>
          <li>Design card (blur background)</li>
          <li>
            The card (pre-click) should just have title, tags of technologies
            used, and perhabs a subheading like "hackathon submission", etc
          </li>
          <li>
            Should have a button to open up the website if hosted, and github
            repo
          </li>
          <li>
            Clicking on it brings up a modal window (add zoom in animation?)
          </li>

          <li>
            once clicked, the details should include
            <ol>
              <li>Same stuff as pre-click</li>
              <li>collaborators</li>
              <li>
                slightly (but still relatively short) description of what the
                project is
              </li>
              <li>
                a section about what I learned (this doesn't help with
                hireability, it's just a personal touch)
              </li>
            </ol>
          </li>
        </ul>
      </div>
    </div>
  );
}
