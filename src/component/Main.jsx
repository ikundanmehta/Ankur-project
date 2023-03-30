import React from "react";
import Navbar from "./Navbar";
import Mainbody from "./Mainbody";
import FooterBody from "./FooterBody";
import Mbody from "./Mbody";

const Main = () => {
  return (
    <>
      <Navbar />
      <Mainbody />
      <div class="text-center m-5">
        <h2 class="font-style-bold">Resturants &amp; Musical places</h2>
      </div>
      <Mbody />
      <FooterBody />
    </>
  );
};

export default Main;
