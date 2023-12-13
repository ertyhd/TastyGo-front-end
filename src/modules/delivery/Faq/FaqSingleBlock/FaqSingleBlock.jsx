import styles from "./faqSingleBlock.module.scss";
import { DeliverySvgSelector } from "../../../../shared/components/SvgSelector/DeliverySvgSelector";

const FaqSingleBlock = ({ handleClick, item, isId }) => {
  return (
    <div className={styles.fagSingleBlockWrapp}>
      <div className={styles.btnH3Wrap}>
        <h3>{item.q}</h3>
        <button
          className={styles.btnH3Wrap_button}
          onClick={() => {
            handleClick(item.id);
          }}
          type="button"
        >
          <DeliverySvgSelector
            styles={styles.btnH3Wrap_button_svg}
            id={isId === item.id ? "minus" : "plus"}
          />
        </button>
      </div>
      <div
        className={`${styles.movingBlock} ${
          isId === item.id ? styles.expanded : ""
        }`}
      >
        <p>{item.a}</p>
      </div>
    </div>
  );
};

export default FaqSingleBlock;
