import "../App.css";
import twitterIcon from "../assets/TwitterIcon.svg";
import githubIcon from "../assets/GitHubIcon.svg";

export default function Footer() {
  return (
    <footer>
      <a href="https://twitter.com/david_melnychuk" className="social-icon">
        <img src={twitterIcon}></img>
      </a>
      <a href="https://github.com/DavidMelnychuk" className="social-icon">
        <img src={githubIcon}></img>
      </a>
    </footer>
  );
}
