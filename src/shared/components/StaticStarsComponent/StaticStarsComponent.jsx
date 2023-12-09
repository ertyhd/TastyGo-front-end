import styles from "./staticStarsComponent.module.scss";
import { SvgSelector } from "../SvgSelector/SvgSelector";
import { nanoid } from "nanoid";

const StaticStarsComponent = ({ data }) => {
  const stars = [];
  for (let i = 0; i < data; i += 1) {
    stars.push(
      <SvgSelector id="star" key={nanoid()} styles={styles.chngStar} />
    );
  }
  for (let i = 0; i < 5 - data; i += 1) {
    stars.push(
      <SvgSelector id="star" key={nanoid()} styles={styles.defStar} />
    );
  }
  return <div className={styles.staticStarsComponentWrapp}>{stars}</div>;
};

export default StaticStarsComponent;
