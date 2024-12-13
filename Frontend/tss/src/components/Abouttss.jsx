import "../styles/Abouttss.css";
import tsscar from "../assets/tsscar.jpg";
import { useState } from "react";

const AboutSection = () => {
  const [showMission, setShowMission] = useState(false); // State to toggle mission section

  const toggleMission = () => {
    setShowMission(!showMission);
  };

  return (
    <section className="tssabout-section" id="about-tss">
      <div className="tssabout-images">
        <img src={tsscar} alt="TSSCAR Building" className="tss-image" />
      </div>
      <div className="tssabout-content">
        <h3 className="tssabout-tagline">
          TS Srinivasan Centre for Automotive Research (TSSCAR)
        </h3>
        <p>
          Inaugurated by Mr.Venu Srinivasan, Managing Director, TVS Motor Company, on 29th November 2019 in the presence of Mr. Karumuttu T. Kannan, Chairman, Thiagarajar College of Engineering.
          <br />
          TSSCAR was started with initial investment of Rs.11 Crores with a Built-up area of -16,400 sq. ft
        </p>
        <br />
        <div className="tssabout-buttons">
          <button className="mission-btn" onClick={toggleMission}>
            Our Mission
          </button>
        </div>

        {showMission && (
          <div className="mission-section">
            <h3>Mission of TSSCAR</h3>
            <p>
              To provide an interdisciplinary and collaborative environment for new product development.<br />
              To enable consultancy, training and testing projects to support industry needs.<br />
              To enable academic and sponsored research in the area of new product development.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutSection;
