import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { lightTheme, darkTheme } from "./theme";

import GlobalStyles from "./GlobalStyles";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import WhyPitaka from "./components/WhyPitaka";
import Promos from "./components/Promos";
import Footer from "./components/Footer";

const App = () => {
  const [currentTheme, setCurrentTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    localStorage.setItem("theme", currentTheme);
  }, [currentTheme]);

  return (
    <ThemeProvider theme={currentTheme === "light" ? lightTheme : darkTheme}>
      <Router>
        <GlobalStyles />
        <NavBar toggleTheme={toggleTheme} currentTheme={currentTheme} />
        <Hero />
        <WhyPitaka />
        <Promos />
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
