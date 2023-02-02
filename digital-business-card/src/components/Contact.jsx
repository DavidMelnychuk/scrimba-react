import "../App.css";
import mailIcon from "../assets/mailIcon.svg";
import linkedInIcon from "../assets/linkedinIcon.svg";

export default function Contact() {
  return (
    <div className="contact">
      <h2>David Melnychuk</h2>
      <h4>Fullstack Developer</h4>
      <a href="https://www.davidmelnychuk.com">davidmelnychuk.com</a>
      <address>
        <a href="#" className="email-button">
          <img src={mailIcon} className="mail-icon" />
          Email
        </a>
        <a href="#" className="linkedIn-button">
          <img src={linkedInIcon} className="mail-icon" />
          LinkedIn
        </a>
      </address>
    </div>
  );
}
