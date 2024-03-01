import { Fragment } from "react";
import { Outlet } from "react-router-dom";

const Landing = () => {
  return (
    <Fragment>
      <div className="h-screen p-10 w-full">
        <div className="bg-white w-full h-full rounded-xl flex flex-col items-center justify-center">
          <Outlet />
        </div>
      </div>
    </Fragment>
  );
};

export default Landing;
