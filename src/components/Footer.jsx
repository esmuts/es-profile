import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="footer">
      <a>
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a>
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a>
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a>
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
    </div>
  );
}
