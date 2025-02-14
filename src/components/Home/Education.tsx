export default function Education() {
  return (
    <div className="d-flex flex-column justify-content-start">
      <h1>Education</h1>
      <div className="">
        <div className="row">
          <div className="col-3 d-flex align-items-center">
            <img
              src="images/northeastern_icon.png"
              alt="northeastern_icon"
              style={{ width: "7rem" }}
            />
          </div>
          <div className="col-9">
            <div className="edu-heading">
              <h2>Northeastern University</h2>
            </div>
            <div className="edu-body text-secondary">
              <h4>
                <i>B.S. Computer Science with a Concentration in Software</i>
              </h4>
              <h6>September 2023 - May 2027</h6>
              <h6>
                <b>GPA:</b> 3.97 / 4.00
              </h6>
              <h6>
                <b>Honors:</b> Dean's List Fall 2023, Spring
                2024, Fall 2024
              </h6>
              <h6>
                <b>Activities:</b> President of Club Greenovation, VP of Asian Student Alliance,
                Hacker of CTF Club
              </h6>
            </div>
          </div>
        </div>
      </div>
      <h1>Notes</h1>
      <p>Again, make a card here or something</p>
    </div>
  );
}
