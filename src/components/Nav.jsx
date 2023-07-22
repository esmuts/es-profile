import "./Nav.css";

export default function Nav({ onMenuItemClick }) {
  return (
    <ul className="menu">
      <li className="about" onClick={() => onMenuItemClick("about")}>
        About
      </li>
      <li className="academic" onClick={() => onMenuItemClick("academic")}>
        Academic
      </li>
      <li className="talks" onClick={() => onMenuItemClick("talks")}>
        Talks
      </li>
      <li className="fiction" onClick={() => onMenuItemClick("fiction")}>
        Fiction
      </li>
    </ul>
  );
}
