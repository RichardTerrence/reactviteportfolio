import "./experience.css";
import capstone from "../image/capstone.png";
import capstone1 from "../image/capstone1.png";
import capstone2 from "../image/capstone2.png";
import capstone3 from "../image/capstone3.png";
import minproj1 from "../image/minproj1.png";
import majproj2 from "../image/majproj2.png";

export default function Experience() {
  return (
    <div className="experience">
      <h1 className="title">Portfolio</h1>
      <div className="content" style={{ cursor: "pointer" }}>
        <img src={minproj1} alt="" />
      </div>

      <div className="content" style={{ cursor: "pointer" }}>
        <img src={majproj2} alt="" />
      </div>

      <div className="content" style={{ cursor: "pointer" }}>
        <img src={capstone} alt="" />
      </div>

      <div className="content" style={{ cursor: "pointer" }}>
        <img src={capstone1} alt="" />
      </div>

      <div className="content" style={{ cursor: "pointer" }}>
        <img src={capstone3} alt="" />
      </div>

      <div className="content" style={{ cursor: "pointer" }}>
        <img src={capstone2} alt="" />
      </div>
    </div>
  );
}
