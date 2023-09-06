import SingleCard from "../../../shared/components/SingleCard/SingleCard";
import MenuCategorySlider from "./MenuCategoriSlider/MenuCategoriSlider";
import items from "./items";
import css from './allMenu.module.scss'
const AllMenu = () => {
    const element = items.map(({ id, name, description, weight, price }) => {
        return (
            <li key={id}>
                <SingleCard
                    name={name}
                    description={description}
                    weight={weight}
                    price={price}
                />
        
            </li>
    
        )
    })
    return (
      <div className="container">
        <ul className={css.pathList}>
          <li className={css.pathListItem}>Home</li>
          <li className={css.pathListItem}>/</li>
          <li className={css.pathListItem}>Menu</li>
          <li className={css.pathListItem}>/</li>
          <li className={css.pathListItem}>Salads</li>
        </ul>
        {/* <ul className={css.wrapperCategoryItem}> */}
          <MenuCategorySlider />
        {/* </ul> */}

        <ul className={css.dishesList}>{element}</ul>
      </div>
    );
};
export default AllMenu
