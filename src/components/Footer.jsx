import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="footer">
      <a href="https://www.linkedin.com/in/eckard-smuts-7a315117/">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a href="https://www.instagram.com/eckardsmuts/?hl=en">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a href="https://twitter.com/eckardsmuts">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="https://github.com/esmuts?tab=repositories">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
    </div>
  );
}
