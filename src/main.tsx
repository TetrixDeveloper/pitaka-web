import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { lightTheme, darkTheme } from "./theme";

import GlobalStyles from "./GlobalStyles";
import NavBar from "./components/NavBar";
import Home from "./routes/home";
import UserGuide from "./routes/user-guides";
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/guides" element={<UserGuide />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
