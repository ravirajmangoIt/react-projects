import React from "react";

import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Home = () => {
  const { openSideBar, openModal } = useGlobalContext();
  console.log(openSideBar,"ddd");
  return (
    <main className="main-context">
      <button onClick={openSideBar} className="sidebar-toggle">
        <FaBars />
      </button>
      <button onClick={openModal} className="btn">
        show modal
      </button>
    </main>
  );
};

export default Home;
