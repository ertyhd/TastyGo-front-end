import { useState } from "react";

import MenuCategorySlider from "./MenuCategoriSlider/MenuCategoriSlider";

import MenuList from "./MenuList/MenuList";
import MenuBoardSlider from "./MenuBoardSlider/MenuBoardSlider";
import Breadcrumbs from "../../../shared/components/Breadcrumbs/Breadcrumbs";
import { useSelector } from "react-redux";
import { getLoading } from "../../../redux/foods/foods-selector";
import css from './allMenu.module.scss'


const AllMenu = () => {

  const [stateTitle, setStateTitle] = useState("salads");
  const isLoading = useSelector(getLoading);
  
  const handleNameCategory = (title) => {
    
    setStateTitle(title);
    if (title) {
      setStateTitle(title);
    } else {
      setStateTitle('salads');
    }
    
  }

  return (
    
      <div className={`${css.wrapperMenu} ${"container"}`}>
        <MenuBoardSlider nameCategory={stateTitle} />
        <Breadcrumbs/>
      
        <MenuCategorySlider
          nameCategory={stateTitle}
          handleNameCategory={handleNameCategory}
        />
      
        {isLoading&& <p>irejoghiieohr</p>}
        <MenuList nameCategory={stateTitle} />
      </div>

    );
};
export default AllMenu
