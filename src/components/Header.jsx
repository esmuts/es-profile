import "./Header.css";
import Title from "./Title.jsx";
import Nav from "./Nav.jsx";

export default function Header({ onMenuItemClick, onTitleClick }) {
  return (
    <div className="header">
      <Title onTitleClick={onTitleClick} />
      <Nav onMenuItemClick={onMenuItemClick} />
    </div>
  );
}
