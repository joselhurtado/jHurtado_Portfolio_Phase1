import React from "react";
import ProfilePic from "/src/img/Image_JoseHurtado.jpg"

export function HeroSection() {
	return (

<section className="container HeroSection">
  <div className="row">
    <div id="HeadlineHero" className="col-6">
    <h1>Hola, I’m Jose Hurtado, full-stack designer specialized in &#123;
      <span className="typer" id="main" data-colors="#001648" data-words=" User Experience, User Interface, Motion, Logo, Web" data-delay="100" data-deleteDelay="1000"></span> &#125; design, based in Miami
    </h1>
    </div>
    <div className="col-4">
      <img className="profileImage" src={ProfilePic} alt="Profile image" />
      </div>
  </div>
</section>
	);
}