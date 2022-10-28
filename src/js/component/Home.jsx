import React from "react";
import { Navbar } from "./Navbar.js";
import { HeroSection } from "./HeroSection.js";
import { Footer } from "./Footer.js";


export function Home() {
  return (
    <div className="container">
      <div className="container">
        <Navbar />
      </div>
      <div className="container">
        <HeroSection />
      </div>

      <div className="container">
      </div>
      <div className="container">
        <Footer />
      </div>
    </div>
  );
}

export default Home;