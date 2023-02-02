import "../App.css";
import About from "./About";
import Interests from "./Interests";
import Contact from "./Contact";

export default function Info() {
  return (
    <div className="info">
      <Contact />
      <About />
      <Interests />
    </div>
  );
}
