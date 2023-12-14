import styles from "./faqSingleBlock.module.scss";
import { DeliverySvgSelector } from "../../../../shared/components/SvgSelector/DeliverySvgSelector";

const FaqSingleBlock = ({ handleClick, item, isId }) => {
  return (
    <div className={styles.fagSingleBlockWrapp}>
      <div className={styles.btnH3Wrap}>
        <h3>{item.q}</h3>
        <button
          className={
            isId !== item.id
              ? styles.btnH3Wrap_button
              : `${styles.btnH3Wrap_button} ${styles.active}`
          }
          onClick={() => {
            handleClick(item.id);
          }}
          type="button"
        >
          {" "}
          <div className={styles.btnH3Wrap_button_svgMinus}>
            <DeliverySvgSelector
              styles={styles.btnH3Wrap_button_svg}
              id={"minus"}
            />
          </div>
          <div className={styles.btnH3Wrap_button_svgPlus}>
            <DeliverySvgSelector
              // styles={styles.btnH3Wrap_button_svgBg}
              id={"plus"}
            />
          </div>
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
