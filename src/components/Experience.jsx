import "./experience.css";
import capstone from "../image/capstone.png";
import capstone1 from "../image/capstone1.png";
import capstone2 from "../image/capstone2.png";
import capstone3 from "../image/capstone3.png";
import minproj1 from "../image/minproj1.png";
import majproj2 from "../image/majproj2.png";

export default function Experience() {
  return (
    <div className="experience-container">
      <div className="experience-img">
        <h1 className="title">Portfolio</h1>
        <div className="tatoo-web">
          <h2>Mini Project</h2>
          <div className="content" style={{ cursor: "pointer" }}>
            <img src={minproj1} alt="" />
          </div>
        </div>
        <div className="Api-driven">
          <h2>Major Project</h2>
          <div className="content" style={{ cursor: "pointer" }}>
            <img src={majproj2} alt="" />
          </div>
        </div>
        <div className="ecommerce-container">
          <div className="capstone-title">
            <h2>Capstone Project</h2>
          </div>
          <div className="ecommerce1">
            <div className="content" style={{ cursor: "pointer" }}>
              <img className="capstone" src={capstone} alt="" />
            </div>
            <div className="content" style={{ cursor: "pointer" }}>
              <img className="capstone1" src={capstone1} alt="" />
            </div>
          </div>
          <div className="ecommerce2">
            <div className="content" style={{ cursor: "pointer" }}>
              <img className="capstone3" src={capstone3} alt="" />
            </div>
            <div className="content" style={{ cursor: "pointer" }}>
              <img className="capstone2" src={capstone2} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="experience-summary">
        <div className="miniproject">
          <div className="mini-title">
            <h2>Mini Project</h2>
          </div>
          <p>
            Mini-Project1 we created a Tattoo Website the technology we use is
            HTML,CSS,JavaScript for the project we showcase Online booking and
            appointment scheduling
          </p>
        </div>
        <div className="majorproject">
          <div className="major-title">
            <h2>Major Project</h2>
          </div>
          <p>
            Major-Project2 we created an API driven app using the technology
            ReactJS,React Bootstrap for the front-end Webpage design and
            Postman,MySQL fetching the data to the server.
          </p>
        </div>
        <div className="capstoneproject">
          <div className="capstone-title">
            <h2>Capstone Project</h2>
          </div>
          <p>
            Capstone-Project we created a E-Commerce website using the
            technology ReactJS,React Booststrap for the front-end Postman API
            for the development toolchain,MySQL, PHP MyAdmin and Laravel for the
            back-end.
          </p>
        </div>
      </div>
    </div>
  );
}
