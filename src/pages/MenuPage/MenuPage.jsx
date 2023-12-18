import AllMenu from "../../modules/Dishes/AllMenu/AllMenu";
import { useEffect, useState } from "react";
const MenuPage = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleResize = () => {
    // setWindowWidth(window.innerWidth);
    setWindowWidth(window.innerWidth);
  };
  // const handleResetResize = () => {
  //   setWindowWidth(0);
  // };

  useEffect(() => {
   
    window.addEventListener("resize", handleResize);
    //  console.log("slushatel", window.addEventListener("resize"))
    
    handleResize();

    
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
