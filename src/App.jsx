/**
 * A static online resume by Eckard Smuts.
 *
 * I consulted the following sites for help:
 *
 */

import { useState } from "react";
import "./App.css";
// Imports resume data from JSON file.
import resume from "./assets/resume.json";
import Header from "./components/Header.jsx";
import Display from "./components/Display.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [resumeSection, setResumeSection] = useState([]);

  // Selects resume category based on menu item selection.
  function handleMenuItemClick(menuItem) {
    setResumeSection(resume[menuItem]);
  }

  return (
    <div className="container">
      <Header onMenuItemClick={handleMenuItemClick} />
      <Display resumeSection={resumeSection} />
      <Footer />
    </div>
  );
}

export default App;
