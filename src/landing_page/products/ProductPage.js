import React from "react";
import Hero from "./Hero";
import LeftSection from "./Leftsection";
import RIght from "./Right";
import Universe from "./Universe";

function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageUrl="media\images\kite.png"
        productName="Kite"
        productDesciption="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="Try Demo"
        learnMore="Learn More"
        appleStore=""
        playstore=""
      />
      <RIght
        imageUrl="media\images\console.png"
        productName="Console"
        productDesciption="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        link="learn more "
      />
      <LeftSection
        imageUrl="media\images\coin.png"
        productName="Coin"
        productDesciption="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo="Coin"
        appleStore=""
        playstore=""
      />
      <RIght
        imageUrl="media\images\kiteconnect.png"
        productName="Kite Connect API"
        productDesciption="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        link="learn more "
      />
      <LeftSection
        imageUrl="media\images\varsity.png"
        productName="Varsity Mobile"
        productDesciption="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        appleStore=""
        playstore=""
      />

      <Universe />
    </>
  );
}

export default ProductPage;
