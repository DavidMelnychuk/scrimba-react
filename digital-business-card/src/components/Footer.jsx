import "../App.css";
import twitterIcon from "../assets/TwitterIcon.svg";
import facebookIcon from "../assets/FacebookIcon.svg";
import instagramIcon from "../assets/InstagramIcon.svg";
import githubIcon from "../assets/GithubIcon.svg";

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
