import { useState } from "react";
import "./App.css";

import Header from "./components/Header.jsx";
import Display from "./components/Display.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <Header />
      <Display />
      <Footer />
    </div>
  );
}

export default App;
