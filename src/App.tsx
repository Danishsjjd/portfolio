import Header from "./layout/Header";
import Contact from "./sections/Contact";
import About from "./sections/About";
import Projects from "./sections/Projects";

function App() {
  return (
    <>
      <Header />
      <About />
      <div className="my-52 flex flex-col gap-40">
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
