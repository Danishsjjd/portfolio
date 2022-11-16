import Header from "./layout/Header";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <div className="mt-28 flex flex-col gap-28">
        <Projects />
      </div>
    </>
  );
}

export default App;
