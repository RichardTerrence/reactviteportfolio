import "./skill.css";

export default function Skill() {
  return (
    <div className="skills">
      <div className="skill">
        <div>
          <h1 className="title">Skill</h1>
        </div>
        <div className="progress">
          <div className="progressbar">
            <ul className="progresstitle">
              <li>REACT JS</li>
            </ul>
            <div className="progressbar1">
              <div className="progresspercent1">75%</div>
            </div>
          </div>
          <div className="progressbar">
            <ul className="progresstitle">
              <li>VITE</li>
            </ul>
            <div className="progressbar2">
              <div className="progresspercent2">60%</div>
            </div>
          </div>
          <div className="progressbar">
            <ul className="progresstitle">
              <li>BOOTSTRAP</li>
            </ul>
            <div className="progressbar3">
              <div className="progresspercent3">70%</div>
            </div>
          </div>
          <div className="progressbar">
            <ul className="progresstitle">
              <li>HTML / CSS</li>
            </ul>
            <div className="progressbar4">
              <div className="progresspercent4">80%</div>
            </div>
          </div>
          <div className="progressbar">
            <ul className="progresstitle">
              <li>LARAVEL</li>
            </ul>
            <div className="progressbar5">
              <div className="progresspercent5">50%</div>
            </div>
          </div>
        </div>
      </div>
      <div className="soft-skill">
        <div>
          <h1 className="title">Soft Skill</h1>
        </div>
        <div className="progress">
          <div className="progressBar">
            <ul className="progresstitle">
              <li>COMMUNICATION SKILL</li>
            </ul>
            <div className="progressbar-1">
              <div className="progresspercent-1">75%</div>
            </div>
          </div>
          <div className="progressBar">
            <ul className="progresstitle">
              <li>TEAMWORK</li>
            </ul>
            <div className="progressbar-2">
              <div className="progresspercent-2">60%</div>
            </div>
          </div>
          <div className="progressBar">
            <ul className="progresstitle">
              <li>ADAPTABILITY</li>
            </ul>
            <div className="progressbar-3">
              <div className="progresspercent-3">70%</div>
            </div>
          </div>
          <div className="progressBar">
            <ul className="progresstitle">
              <li>
                <p>TIME MANAGEMENT</p>
              </li>
            </ul>
            <div className="progressbar-4">
              <div className="progresspercent-4">80%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
