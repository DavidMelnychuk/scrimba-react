import "../App.css";
import earthIcon from "../assets/earth.svg";

export default function Header() {
  return (
    <header>
      <img src={earthIcon}></img>
      my travel journal.
    </header>
  );
}
