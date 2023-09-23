import downArrow from "../assets/images/down-arrow.svg"

const About = () => {
  return (
    <section
      className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 px-6 sm:px-14 lg:flex-row lg:gap-28"
      id="About"
    >
      <div className="blur-bg -left-60 -top-32 aspect-square w-[500px] bg-yellow/30" />
      {/* arrow */}
      <div className="absolute inset-0 z-10 flex items-center justify-center text-xl">
        <div className="sticky top-[95vh] text-red-400">
          <div
            className="cursor-pointer rounded-full bg-yellow p-4"
            onClick={() => {
              window.scrollTo({
                top: document.getElementById("Projects")?.offsetTop,
                behavior: "smooth",
              })
            }}
          >
            <img
              src={downArrow}
              alt="goto next section"
              className="relative isolate z-10"
            />
            <div className="absolute inset-0 animate-ping rounded-full bg-yellow" />
          </div>
        </div>
      </div>
      {/* content div */}
      <div className="z-20 self-start pt-14 lg:sticky lg:top-8 lg:pt-20">
        <h1 className="mb-2 font-Lexend text-5xl font-bold sm:text-8xl">
          Hello, I am <span className="text-yellow">Danish.</span>
        </h1>
        <p className="sm:text-lg">
          Danish is a freelance and a full-stack developer based in Pakistan. He
          has a knack for all things launching products, from planning and
          designing all the way to solving real-life problems with code. When
          not online, he loves to design some graphic and do motion graphic.
        </p>
      </div>
      {/* img div */}
      <div className="about-img aspect-square max-h-[800px] w-full overflow-hidden rounded-2xl sm:h-[100vh] md:min-w-[700px] " />
    </section>
  )
}

export default About
