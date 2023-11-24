import AllMenu from "../../modules/Dishes/AllMenu/AllMenu";
import { useEffect, useState } from "react";
const MenuPage = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  console.log("windowWidth", windowWidth);
  // const size = window.innerWidth;
  const handleResize = () => {
    // setWindowWidth(window.innerWidth);
    setWindowWidth(window.innerWidth);
  };
  // const handleResetResize = () => {
  //   setWindowWidth(0);
  // };

  useEffect(() => {
    // Додаємо слухача подій resize при монтажі компонента
    window.addEventListener("resize", handleResize);
    //  console.log("slushatel", window.addEventListener("resize"))
    // Викликаємо handleResize при завантаженні компонента
    handleResize();

    // Прибираємо слухача подій при розмонтажі компонента
    return () => {
      window.removeEventListener("resize", handleResize);
      // handleResetResize();
    };
  }, [windowWidth]);
  return (
    <>
      <AllMenu windowWidth={windowWidth} />
    </>
  );
};

export default MenuPage;
