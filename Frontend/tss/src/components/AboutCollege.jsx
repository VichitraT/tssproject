import "../styles/AboutCollege.css";
import buildingImage from "../assets/building.jpg"; // Replace with your actual image

const AboutSection = () => {
  return (
    <section className="about-section" id="about-college">
      <div className="about-images">
        <img src={buildingImage} alt="College Building" className="building-image" />
        
      </div>
      <div className="about-content">
        <h3 className="about-tagline">About The College</h3>
        <p>
        Established in the year 1957.<br></br>
        Funded by State & Central Governments & Management.<br></br> Granted autonomy by UGC in 1987 Accredited by NAAC  <br></br>
        Ranked in National Institutional Ranking Framework<br></br>
        Affiliated to Anna University<br></br>
        Approved by All India Council for Technical Education.<br></br>
        Offers 9 Undergraduate Programmes, 10 Postgraduate Programmes<br></br>
        Doctoral Programmes in Engineering, Sciences and Architecture
        </p><br></br>
        <button className="program-btn">View Our Website →</button>
      </div>
    </section>
  );
};

export default AboutSection;
