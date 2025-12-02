import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row mt-5 mb-5">
        <h1 style={{ color: "#424242" }} className="text-center mt-5 fs-3 ">
          Charges
        </h1>
        <h4 style={{ color: "#9b9b9b" }} className="text-center mt-2 fs-4  ">
          List of all charges and taxes
        </h4>
        {/* pricing */}

        <div className="mt-5 row">
          <div className="col-4 mt-5 p-5 text-center">
            <img style={{ width: "70%" }} src="media\images\pricing0.svg" />
            <h1 className="fs-3">Free equity delivery</h1>
            <p className="mt-4 text-muted" style={{fontSize:"18px"}}>
              All equity delivery investments (NSE, BSE), are absolutely free —
              ₹ 0 brokerage
            </p>
          </div>
          <div className="col-4 mt-5 p-3 text-center">
            <img
              style={{ width: "70%" }}
              src="media\images\intradayTrades.svg"
            />
            <h1 className="fs-3">Intraday and F&O trades</h1>
            <p className="mt-4 text-muted"  style={{fontSize:"18px"}}>
              Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
              intraday trades across equity, currency, and commodity trades.
              Flat ₹20 on all option trades.
            </p>
          </div>
          <div className="col-4 mt-5 p-5 text-center">
            <img style={{ width: "70%" }} src="media\images\pricing0.svg" />
            <h1 className="fs-3">Free direct MF</h1>
            <p className="mt-4 text-muted"  style={{fontSize:"18px"}}>
              All direct mutual fund investments are absolutely free — ₹ 0
              commissions & DP charges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
<></>;
