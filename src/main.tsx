import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { lightTheme, darkTheme } from "./theme";

import GlobalStyles from "./GlobalStyles";
import NavBar from "./components/NavBar";
import Home from "./routes/home";
import About from "./routes/about";
import UserGuide from "./routes/guides";
import Faqs from "./routes/faqs";
import Footer from "./components/Footer";
import NotFound from "./routes/not-found";

const App = () => {
  const [currentTheme, setCurrentTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    localStorage.setItem("theme", currentTheme);
  }, [currentTheme]);

  return (
    <ThemeProvider theme={currentTheme === "dark" ? lightTheme : darkTheme}>
      <Router>
        <GlobalStyles />
        <NavBar toggleTheme={toggleTheme} currentTheme={currentTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/guides" element={<UserGuide />} />
          <Route path="#faqs" element={<Faqs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <About />
        <UserGuide />
        <Faqs />
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
