import "./Display.css";
import profilePic from "../assets/profile-square.jpeg";

export default function Display({ resumeSection }) {
  let resumeItems = [];

  // Checks props array length to determine if it is the "about" section, which
  // has a length of precisely 1, in which case image + about text is rendered.
  resumeSection.length === 1
    ? (resumeItems = resumeSection.map((item, index) => (
        <div key={index + item.par1.slice(0, 10)}>
          <img className="profile-pic" src={profilePic} />
          <p className="about-text">{item.par1}</p>
          <p className="about-text">{item.par2}</p>
          <p className="about-text">{item.par3}</p>
        </div>
      )))
    : // Otherwise maps resume section to JSX element list
      (resumeItems = resumeSection.map((item, index) => (
        <li key={index + item.url.slice(8, 18)}>
          {item.title} <a href={item.url}> {item.journal}</a>, {item.date}
        </li>
      )));
  return (
    <div className="display">
      <ul className="display-list">{resumeItems}</ul>
    </div>
  );
}
