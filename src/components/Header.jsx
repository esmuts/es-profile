import "./Header.css";
import Title from "./Title.jsx";
import Nav from "./Nav.jsx";

export default function Header({ onMenuItemClick }) {
  return (
    <div className="header">
      <Title />
      <Nav onMenuItemClick={onMenuItemClick} />
    </div>
  );
}
