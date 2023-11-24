import Hero from "../../modules/Hero/Hero";
import PopularDishes from "../../modules/Dishes/PopularDishes/PopularDishes";
import Services from "../../modules/Services/Services";
import SeasonalDishes from "../../modules/Dishes/SeasonalDishes/SeasonalDishes";
import Reviews from "../../modules/Reviews/Reviews";
import InfoContacts from "../../modules/InfoContacts/InfoContacts";
import { useEffect } from "react";
import { useState } from "react";

const MainPage = () => {
  const [windowWidth, setWindowWidth] = useState();
  console.log("windowWidth", windowWidth);
  const size = window.innerWidth;
  const handleResize = () => {
      
    // setWindowWidth(window.innerWidth);
    setWindowWidth(window.innerWidth);
  };
  const handleResetResize = () => {
    setWindowWidth(0);
  };

    useEffect(() => {
      // Додаємо слухача подій resize при монтажі компонента
      // window.addEventListener("resize", handleResize);

      // Викликаємо handleResize при завантаженні компонента
      handleResize();

      // Прибираємо слухача подій при розмонтажі компонента
      return () => {
        window.removeEventListener("resize", handleResize);
        handleResetResize();
      };
    }, [size]);
  return (
    <>
      <Hero />
      <PopularDishes windowWidth={windowWidth} />
      <Services />
      <SeasonalDishes windowWidth={windowWidth} />
      {/* <Reviews /> */}
      <InfoContacts />
    </>
  );
};

export default MainPage;
