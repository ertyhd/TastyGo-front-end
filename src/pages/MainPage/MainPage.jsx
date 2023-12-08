import Hero from "../../modules/Hero/Hero";
import PopularDishes from "../../modules/Dishes/PopularDishes/PopularDishes";
import Services from "../../modules/Services/Services";
import SeasonalDishes from "../../modules/Dishes/SeasonalDishes/SeasonalDishes";
import Reviews from "../../modules/Reviews/Reviews";
import InfoContacts from "../../modules/InfoContacts/InfoContacts";
import { useState, useEffect } from "react";

const MainPage = () => {
  const [windowWidth, setWindowWidth] = useState();
  console.log("windowWidth", windowWidth);
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);
  return (
    <>
      <Hero />
      {/* <PopularDishes windowWidth={windowWidth} /> */}
      <Services />
      {/* <SeasonalDishes windowWidth={windowWidth} /> */}
      <Reviews />
      <InfoContacts />
    </>
  );
};

export default MainPage;
