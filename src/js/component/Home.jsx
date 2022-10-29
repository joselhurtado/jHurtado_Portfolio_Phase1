import React from "react";
import { Navbar } from "./Navbar.js";
import { HeroSection } from "./HeroSection.js";
import { ToolBoxSection } from "./ToolBoxSection.js";
import { Footer } from "./Footer.js";


export function Home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div>
        <HeroSection />
      </div>

      <div>
        <ToolBoxSection />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;