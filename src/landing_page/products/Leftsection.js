import React from "react";

function LeftSection({
  imageUrl,
  productName,
  productDesciption,
  tryDemo,
  learnMore,
  appleStore,
  playstore,
}) {
  return (
    <div className="container">
      <div className="row p-5">
        <div className="col-5 mt-3">
          <img src={imageUrl} />
        </div>
        <div className="col-2"></div>
        <div className="col-5 mt-3 p-5">
          <h1 className="fs-3 " style={{color:"#424242"}}>{productName}</h1>
          <p className="text-muted pe-5 fs-6 lh-lg">{productDesciption}</p>
          <div className="row mb-4">
            <a className="col-3" href={tryDemo} style={{ textDecoration: "none" }}>
              {tryDemo}
            </a>
            <a  className="col-6 " href={learnMore} style={{ textDecoration: "none", }}>
             {learnMore}
            </a>
          </div>
          <div>
            <a href={playstore} > 
              <img style={{height:"45px"}} src="media\images\googlePlayBadge.svg" />
            </a>
            <a href={appleStore}>
               <img style={{height:"45px"}} className="ms-3" src="media\images\appstoreBadge.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
