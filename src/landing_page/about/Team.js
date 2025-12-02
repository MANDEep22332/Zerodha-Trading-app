import React from "react";
function TeamPage() {
  return (
    <div className="container">
      <div className="row p-5">
        <h1 className="fs-3 mt-5 ms-5 text-center text-muted">People</h1>
      </div>
      <div className="row p-5">
        <div className="col-6 p-5 lh-lg  " style={{ fontSize: "17px" }}>
          <img
            style={{ borderRadius: "100%", width: "45%" }}
            src="media\images\Mandeep_Grewal.jpg"
          />
          <h5 className="text-muted mt-4 ms-5" style={{ fontWeight: "500" }}>
            Mandeep Grewal
          </h5>
          <h6
            className="text-muted mt-3 ps-5 ms-5"
            style={{ fontWeight: "400" }}
          >
            Creator
          </h6>
        </div>
        <div className="col-6 lh-lg pe-5  " style={{ fontSize: "17px" }}>
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>Connect on Homepage / TradingQnA / Twitter</p>
        </div>
      </div>
    </div>
  );
}

export default TeamPage;
