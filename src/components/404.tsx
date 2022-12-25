import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const [navigateTime, setNavigateTime] = useState(4);

  useEffect(() => {
    let time: number | null;
    if (navigateTime >= 1) {
      time = setTimeout(() => {
        setNavigateTime((pre) => pre - 1);
      }, 1000);
    } else {
      navigate("/");
    }

    return () => {
      time && clearTimeout(time);
    };
  }, [navigateTime]);

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-3 text-2xl font-medium text-zinc-300">
      <span>404 (Not Found)</span>
      <span>
        You'll be redirected in:{" "}
        <span className="font-bold">{navigateTime}</span>
      </span>
    </div>
  );
};

export default NotFound;
