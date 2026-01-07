import React from "react";
import Beranda from "./components/Beranda";
import Aboutme from "./components/Aboutme";
import Expert from "./components/Expert";
import Appexpert from "./components/Appexpert";
// import Portofolio from "./components/Portofolio";
import Sosialmedia from "./components/Sosialmedia";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <div>
        <section
          id="Beranda"
          className="scroll-mt-20 min-h-screen flex flex-col items-center justify-center text-center bg-white"
        >
          <Beranda />
        </section>

        <section id="Aboutme" className="scroll-mt-0">
          <Aboutme />

          <Expert />
        </section>

        <section id="Appexpert" className="scroll-mt-0">
          <Appexpert />
        </section>

        {/* <section id="Portofolio" className="scroll-mt-0">
          <Portofolio />
        </section> */}
        <section id="Sosialmedia" className="scroll-mt-0">
          <Sosialmedia />
          <Footer />
        </section>
      </div>
    </div>
  );
}
