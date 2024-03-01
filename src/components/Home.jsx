import { Fragment } from "react";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <Fragment>
      <div className="w-full h-screen p-10">
        <div className="bg-primary rounded-xl w-full h-full">
          <Outlet/>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
