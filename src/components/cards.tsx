import "./cards.css";

export default function Cards({
  image,
  title,
  body,
  tags,
  websiteLink,
  githubLink,
}: {
  image: string;
  title: string;
  body: string;
  tags: string[];
  websiteLink: string;
  githubLink: string;
}) {
  return (
    <div className="my-card blur-gradient d-inline-block border-accent1 card-container d-flex flex-column">
      <div className="row flex-grow-0">
        <div className="col">
          <img
            src={image}
            alt={title}
            className="image img-fluid"
            draggable="false"
          />
        </div>
      </div>

      <div className="my-card-body container mt-3 flex-grow-1">
        <div className="my-card-title glow-text">
          <div className="row">
            <div className="col">
              <h3>{title}</h3>
            </div>
          </div>
          <div className="row">
            <div className="col">{body}</div>
          </div>
          <div className="row mt-2">
            <div className="col">
              {tags.map((tag: string) => (
                <div className="d-inline-block tag">{tag}</div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div className="my-card-footer d-flex justify-content-end mt-auto">
        {websiteLink && (
          <a href={websiteLink} target="_blank" rel="noreferrer">
            <button className="button-secondary">
              {websiteLink.includes("devpost") ? "DevPost" : "Website"}
            </button>
          </a>
        )}
        {githubLink && (
          <a href={githubLink} target="_blank" rel="noreferrer">
            <button className="button-secondary ms-3">Github</button>
          </a>
        )}
      </div>
    </div>
  );
}
