
import Navbar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import AboutCollege from "./components/AboutCollege";
import StatisticsSection from "./components/StatisticsSection";
import Abouttss from "./components/Abouttss";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <AboutCollege/>
      <StatisticsSection />
      <Abouttss />
    </div>
  );
};

export default App;
