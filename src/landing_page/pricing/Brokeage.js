import React from "react";
function Brokeage() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-8 mt-5">
          <a href="" style={{ textDecoration: "none" }}>
            {" "}
            <h1 className="fs-5 text-center">Brokeage</h1>
          </a>
          <ul className="text-muted ms-5 mt-5" style={{lineHeight:"1.8"}}>
            <li>Equity delivery -- Zero</li>
            <li>STT/CTT --- 0.1% on buy & sell</li>
            <li>Transaction charges---- NSE: 0.00297%, BSE: 0.00375%</li>
            <li>GST 18% on (brokerage + SEBI charges + transaction charges)</li>
            <li>SEBI charges	₹10 / crore</li>
          </ul>
        </div>
        <div className="col-4 mt-5 mb-5">
          <a href="" style={{ textDecoration: "none" }}>
            <h1 className="fs-5">Costs</h1>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokeage;
