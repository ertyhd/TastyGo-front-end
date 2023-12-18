import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getItemsFoodsByCategory,
  getAllItemsFoods,
  getItemsSeason,
} from "../../../../redux/foods/foods-selector";
import {
  fetchFoodsByCategory,
  fetchAllFoods,
  fetchFoodsSeasonal,
} from "../../../../redux/foods/foods-operations";

import DishesList from "../../../../shared/components/DishesList/DishesList";

// import SingleCard from "../../../../shared/components/SingleCard/SingleCard";
import css from "./menuList.module.scss";

const MenuList = ({ nameCategory }) => {
  const dispatch = useDispatch();
  const ItemsFoodsByCategory = useSelector(getItemsFoodsByCategory);
  const ItemsSeasonFoods = useSelector(getItemsSeason);
  useEffect(() => {
    if (nameCategory === "Seasonal menu") {
      dispatch(fetchFoodsSeasonal({ page: 1 }));
    } else {
      dispatch(fetchFoodsByCategory({ category: `${nameCategory}`, page: 1 }));
    }
  }, [dispatch, nameCategory]);
  // const element = ItemsFoodsByCategory.map(
  //   ({ _id, title, description, weight, price }) => {
  //     return (
  //       <li key={_id}>
  //         <SingleCard
  //           name={title}
  //           description={description}
  //           weight={weight}
  //           price={price}
  //         />
  //       </li>
  //     );
  //   }
  // );
  return (
    <ul className={css.dishesList}>
      {/* {element} */}
      <DishesList items={ItemsFoodsByCategory} />
    </ul>
  );
};
export default MenuList;
