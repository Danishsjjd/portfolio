type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="relative mx-auto flex  min-h-[calc(100vh-88px)] max-w-7xl items-center justify-between gap-28  px-14">
      <div className="blur-bg -left-60 -top-32 aspect-square w-[500px] bg-yellow/30" />
      {/* arrow */}
      <div className="absolute inset-0 z-10 flex items-center justify-center text-xl">
        <div className="sticky top-[95vh] text-red-400">hell yes</div>
      </div>
      {/* content div */}
      <div className="sticky top-8 z-20 self-start pt-20">
        <h1 className="mb-2 font-Lexend text-8xl font-bold">
          Hello, I am <span className="text-yellow">Danish.</span>
        </h1>
        <p className="text-lg">
          Danish is a freelance and a full-stack developer based in Pakistan. He
          has a knack for all things launching products, from planning and
          designing all the way to solving real-life problems with code. When
          not online, he loves to design some graphic and do motion graphic.
        </p>
      </div>
      {/* img div */}
      <div className="apply-bg h-[100vh] min-w-[700px] overflow-hidden rounded-2xl" />
    </div>
  );
};

export default Hero;
