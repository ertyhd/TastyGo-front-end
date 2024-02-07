import { useState, useEffect } from "react";

import MenuCategorySlider from "./MenuCategoriSlider/MenuCategoriSlider";

import MenuList from "./MenuList/MenuList";
// import MenuBoardSlider from "./MenuBoardSlider/MenuBoardSlider";
import Breadcrumbs from "../../../shared/components/Breadcrumbs/Breadcrumbs";
import { useSelector } from "react-redux";
import { getLoadingFoods } from "../../../redux/foods/foods-selector";
import { getLoadingCategory } from "../../../redux/category/category-selector";
import LoaderSpinner from "../../../shared/components/LoaderSpinner/LoaderSpinner";

import css from "./allMenu.module.scss";

import desktopImage from "../../../assete/jpg/menuBoard/monika-grabkowska-i14VzlCp-Eo-unsplash-descktop.jpg";
import tabletImage from "../../../assete/jpg/menuBoard/monika-grabkowska-i14VzlCp-Eo-unsplash-tablet.jpg";
import mobileImage from "../../../assete/jpg/menuBoard/monika-grabkowska-i14VzlCp-Eo-unsplash-mobil.jpg";



const AllMenu = ({ windowWidth }) => {
  
  const [stateTitle, setStateTitle] = useState(
    localStorage.getItem("activeCategory") || "salads"
  );
  const [urlImage, setUrlImage] = useState();
  
  const isLoadingFoods = useSelector(getLoadingFoods);
  const isLoadingCategory = useSelector(getLoadingCategory);

  const handleNameCategory = (title) => {
    // setStateTitle(title);
    if (title) {
      setStateTitle(title);
      localStorage.setItem("activeCategory", title);
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
  
  useEffect(() => {
    const sizeImg = currentSizeImg();
    setUrlImage(sizeImg);
  }, [windowWidth]);
  return (
    <div className={css.wrapperMenu}>
      <section className={css.board}>
        <div className={css.wrapperTextBoard}>
          <h1 className={css.textBoard}>
            Our choice - organic products for your dishes
          </h1>
        </div>
        <div className={css.wrapperImgBorder}>
          <img alt="FotoSalad" src={urlImage} className={css.imageBoard} />
        </div>
      </section>
      <section className={`${css.menu} ${"container"}`}>
        <div className={css.wrapperBreadcrumbs}>
          <Breadcrumbs />
        </div>
        {!isLoadingFoods && (
          <MenuCategorySlider
            nameCategory={stateTitle}
            handleNameCategory={handleNameCategory}
            sizeWindow={windowWidth}
          />
        )}

        {(isLoadingFoods ||
          isLoadingCategory) && (
            <div className={css.overlay}>
              <LoaderSpinner />
            </div>
          )}
        <MenuList nameCategory={stateTitle} />
      </section>
    </div>
  );
};
export default AllMenu;
