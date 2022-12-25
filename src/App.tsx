import { Routes, Route, useLocation } from "react-router-dom";

import Header from "./layout/Header";
import Contact from "./sections/Contact";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Footer from "./layout/Footer";
import NotFound from "./components/404";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  const cardRegex = /\/project\/./;
  const lPathname = location.pathname;

  let pathname;
  if (lPathname === "/" || cardRegex.test(lPathname)) pathname = "default";
  else pathname = lPathname;

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

const Home = () => {
  return (
    <>
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
