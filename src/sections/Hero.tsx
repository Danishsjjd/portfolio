import myImg from "../assets/images/my.jpg";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="relative mx-auto flex min-h-[calc(100vh-88px)] max-w-7xl items-center justify-between gap-5 px-14">
      <div className="blur-bg -left-60 -top-32 aspect-square w-[500px] bg-yellow/30" />
      <div>
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
      <div>
        <img
          src={myImg}
          alt="Danish Sajjad"
          className=" -z-10 aspect-square min-w-[40px]  rounded-lg"
          // absolute right-0 top-1/2 -translate-y-1/2
        />
      </div>
      <div className="absolute top-[96%] left-1/2 -translate-x-1/2 -translate-y-1/2">
        hell yes
      </div>
    </div>
  );
};

export default Hero;
