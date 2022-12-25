import { format } from "date-fns";

const Header = () => {
  return (
    <div className="pt-8 pb-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xl text-secondary">
            {format(new Date(), "eeee, MMMM do")}
          </p>
          <h2 className="text-3xl font-bold">Today</h2>
        </div>
        <div className="h-16 w-16 overflow-hidden rounded-full">
          <img
            src="http://source.unsplash.com/random"
            alt="random unsplash image"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
