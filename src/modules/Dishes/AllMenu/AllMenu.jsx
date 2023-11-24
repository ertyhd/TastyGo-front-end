import { useState, useEffect } from "react";

import MenuCategorySlider from "./MenuCategoriSlider/MenuCategoriSlider";

import MenuList from "./MenuList/MenuList";
import MenuBoardSlider from "./MenuBoardSlider/MenuBoardSlider";
import Breadcrumbs from "../../../shared/components/Breadcrumbs/Breadcrumbs";
import { useSelector } from "react-redux";
import { getLoading } from "../../../redux/foods/foods-selector";
import css from './allMenu.module.scss'

import desktopImage from "../../../assete/jpg/menuBoard/monika-grabkowska-i14VzlCp-Eo-unsplash-descktop.jpg";
import tabletImage from "../../../assete/jpg/menuBoard/monika-grabkowska-i14VzlCp-Eo-unsplash-tablet.jpg";
import mobileImage from "../../../assete/jpg/menuBoard/monika-grabkowska-i14VzlCp-Eo-unsplash-mobil.jpg";


const AllMenu = ({ windowWidth }) => {
  console.log("windowWidth", windowWidth);
  const [stateTitle, setStateTitle] = useState("salads");
  const [urlImage, setUrlImage] = useState();
  // console.log("urlImage", urlImage);
  const isLoading = useSelector(getLoading);

  const handleNameCategory = (title) => {
    setStateTitle(title);
    if (title) {
      setStateTitle(title);
    } else {
      setStateTitle("salads");
    }
  };
  const currentSizeImg = () => {
    switch (true) {
      case windowWidth < 768:
        return mobileImage;
      case windowWidth < 1440:
        return tabletImage;
      default:
        return desktopImage;
    }
  };
  // console.log("currentSizeImg", currentSizeImg());
  useEffect(() => {
    const sizeImg = currentSizeImg();
    setUrlImage(sizeImg);
}, [windowWidth]);
  return (
    <div className={css.wrapperMenu}>
      {/* <MenuBoardSlider nameCategory={stateTitle} /> */}
      <section className={css.board}>
        <h1 className={css.textBoard}>
          Our choice - organic products for your dishes
        </h1>
        <div className={css.wrapperImgBorder}>
          <img alt="FotoSalad" src={urlImage} className={css.imageBoard} />
          {/* {windowWidth >= 1440 && (
            <img
              alt="FotoSalad"
              src={require(`../../../assete/jpg/menuBoard/monika-grabkowska-i14VzlCp-Eo-unsplash-descktop.jpg`)}
            />
          )}
          {windowWidth < 768 && (
            <img
              alt="FotoSalad"
              src={require(`../../../assete/jpg/menuBoard/monika-grabkowska-i14VzlCp-Eo-unsplash-mobil.jpg`)}
            />
          )}
          {(windowWidth < 1440 &&
            windowWidth >= 768) && (
              <img
                alt="FotoSalad"
                src={require(`../../../assete/jpg/menuBoard/monika-grabkowska-i14VzlCp-Eo-unsplash-tablet.jpg`)}
              />
            )} */}
        </div>
      </section>
      <div className={`${css.wrapperBreadcrumbs} ${"container"}`}>
        <Breadcrumbs />
      </div>
      <section className={`${css.menu} ${"container"}`}>
        <MenuCategorySlider
          nameCategory={stateTitle}
          handleNameCategory={handleNameCategory}
          sizeWindow={windowWidth}
        />

        {isLoading && <p>irejoghiieohr</p>}
        <MenuList nameCategory={stateTitle} />
      </section>
    </div>
  );
};
export default AllMenu
