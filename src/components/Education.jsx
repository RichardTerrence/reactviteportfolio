import "./education.css";

export default function Education() {
  return (
    <div className="education">
      <div className="education-container">
        <div className="education-title">
          <h2>Education</h2>
        </div>
        <div className="education-year">
          <p>2002 - 2008</p>
          <ul>
            <li>ADFC - BSCOE</li>
          </ul>
        </div>
        <div className="education-year">
          <p>2000 - 2002</p>
          <ul>
            <li>ADFC - BSCS</li>
          </ul>
        </div>
        <div className="diploma">
          <a>
            <button>Diploma</button>
          </a>
        </div>
      </div>
      <div className="training-container">
        <div className="training-title">
          <h2>Training</h2>
        </div>
        <div className="training-year">
          <p>2022 - 2023</p>
          <ul>
            <li>Bootcamp</li>
          </ul>
        </div>
        <div className="training-certificate">
          <a>
            <button>Training Certificate</button>
          </a>
        </div>
      </div>
    </div>
  );
}
