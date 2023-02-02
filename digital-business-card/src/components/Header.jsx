import "../App.css";
import headshot from "../assets/headshot.jpg";

export default function Header() {
  return (
    <header className="header">
      <img src={headshot}></img>
    </header>
  );
}
