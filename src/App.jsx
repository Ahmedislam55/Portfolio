import Hero from "./components/2-hero/Hero";
import Header from "./components/1-header/Header";
import Main from "./components/3-main/Main";
import Contact from "./components/4-contact/Contact";
import Footer from "./components/5-footer/Footer";
import Resume from "./components/6-Resume/Resume";
import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
function App() {
  const [showScrollBTN, setshowScrollBTN] = useState(false);
  const location = useLocation(); //  location for page 
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setshowScrollBTN(true);
      } else {
        setshowScrollBTN(false);
      }
    });
  }, []);

  return (
    <div id="up" className="container">
      {/* Header Section */}
      <Header />

      {/* Routes Configuration */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* Display all sections only on the homepage */}
              <Hero />
              <div className="divider" />
              <Resume />
              <div className="divider" />
              <Main />
              <div className="divider" />
              <Contact />
            </>
          }
        />
        <Route path="/hero" element={<Hero />} />
        <Route path="/main" element={<Main />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>

      {/* Scroll-to-Top Button */}
      {location.pathname === "/" && (
        <a
          style={{ opacity: showScrollBTN ? 1 : 0, transition: "1s" }}
          href="#up"
        >
          <button style={{right:"8%"}} className="icon-keyboard_arrow_up scroll2Top"></button>
        </a>
      )}
      <Footer />
    </div>
  );
}

export default App;

