import { Routes, Route } from "react-router-dom";

import Header from "./layout/Header";
import Contact from "./sections/Contact";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Footer from "./layout/Footer";
import NotFound from "./components/404";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
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
