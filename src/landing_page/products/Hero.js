import React from "react";

function Hero() {
  return (
    <div className="container mb-5">
      <div className="text-center p-3 border-bottom mb-5">
        <h1 className="mt-5 fs-3" style={{color:"#424242"}}>Zerodha Products</h1>
        <h3 className="text-muted fs-5 mt-3">Sleek, modern, and intuitive trading platforms</h3>
        <p style={{marginBottom:"100px"}} className="mt-3 text-muted ">Check out our <a style={{textDecoration:"none"}} href="">  investment offerings<i class="fa-solid fa-arrow-right"></i></a></p>
      </div>
    </div>
  );
}

export default Hero;
