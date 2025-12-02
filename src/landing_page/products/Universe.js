import React from "react";
function Universe() {
  return (
    <div className="container">
      <div className="row">
        <h1 className="fs-5 text-muted text-center mt-5 mb-5">
          Want to know more about our technology stack? Check out the{" "}
          <a style={{ textDecoration: "none" }} href="">
            Zerodha.tech
          </a>{" "}
          blog.
        </h1>

        <h2 style={{ color: "#424242" }} className="mt-5 mb-4 text-center fs-4">
          The Zerodha Universe
        </h2>
        <p className="text-muted text-center mb-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-5">
          <img
            style={{ width: "50%" }}
            src="media\images\zerodhaFundhouse.png"
          />
          <p className="text-small p-4">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-5">
          <img src="media\images\sensibullLogo.svg" />
          <p className="text-small p-4">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4 p-5">
          <img src="media\images\goldenpiLogo.png" />
          <p className="text-small p-4">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
        <div className="col-4 p-5">
          <img style={{ width: "50%" }} src="media\images\streakLogo.png" />
          <p className="text-small p-4">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-4 p-5">
          <img src="media\images\smallcaseLogo.png" />
          <p className="text-small p-4">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-5">
          <img style={{ width: "35%" }} src="media\images\dittoLogo.png" />
          <p className="text-small p-4">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Universe;
