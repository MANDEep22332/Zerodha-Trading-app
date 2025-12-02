import React from "react";

function Hero() {
  return (
    <section className="container-fluid " id="supportHero">
      <div className="" id="supportWrapper">
        <h1 className="mt-5">Support Panel</h1>
        <button className=" mt-5 btn btn-primary">My Ticket</button>
      </div>
      <div className="p-5  mb-5 mx-5">
        <input 
          placeholder="Eg: How do I open my account, How do i activate F&O..."/>
      </div>
    </section>
  );
}

export default Hero;
