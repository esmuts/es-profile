/**
 * A static online resume.
 *
 * @author Eckard Smuts.
 *
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

  // Display component is wrapped in a div to allow ternary selection for
  // intro message display --> Need to update navigation with Routes at some
  // point.

  return (
    <div className="container">
      <Header onMenuItemClick={handleMenuItemClick} />
      <div>
        {resumeSection.length === 0 ? (
          <div className="intro-message">
            <p>
              “Dear future generations: Please accept our apologies. We were
              rolling drunk on petroleum.”
            </p>
            <p>-- Kurt Vonnegut</p>
          </div>
        ) : (
          <Display resumeSection={resumeSection} />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
