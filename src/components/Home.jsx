import { Fragment } from "react";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <Fragment>
      <div className="w-full h-screen p-10">
        <div className=" border-2 border-primary rounded-xl w-full flex flex-col gap-2  justify-center items-center h-full">
          <h1 className="uppercase antialiased font-bold text-5xl">Listado</h1>
          <Outlet/>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
