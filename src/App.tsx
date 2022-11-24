import { Toaster } from "react-hot-toast";
import Header from "./layout/Header";
import Contact from "./sections/Contact";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Footer from "./layout/Footer";

function App() {
  return (
    <>
      <Toaster position="bottom-right" />
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
