import styles from "./delivery.module.scss";
import { DeliverySvgSelector } from "../../../shared/components/SvgSelector/DeliverySvgSelector";
import imageD2x from "../../../assete/jpg/delivery/hoja-studioD2x.jpg";
import imageD4x from "../../../assete/jpg/delivery/hoja-studioD4x.jpg";
import imageT2x from "../../../assete/jpg/delivery/hoja-studioT2x.jpg";
import imageT4x from "../../../assete/jpg/delivery/hoja-studioT4x.jpg";
import imageM2x from "../../../assete/jpg/delivery/hoja-studioM2x.jpg";
import imageM4x from "../../../assete/jpg/delivery/hoja-studioM4x.jpg";
import items from "./deliveryServiceList";

const Delivery = () => {
  const elements = items.map((item) => (
    <li key={item.id}>
      <div className={styles.mainSectionLeft_img}>
        <DeliverySvgSelector id={item.svgId} />
      </div>
      <div className={styles.mainSectionLeft_text}>
        <h3>{item.title}</h3>
        <p>{item.text}</p>
      </div>
    </li>
  ));
  return (
    <section className={`${styles.deliveryContainer} container`}>
      <h1>Delivery</h1>
      <div className={styles.mainSection}>
        <ul className={styles.mainSectionLeft}>{elements}</ul>
        <picture className={styles.mainSectionRight}>
          <source
            srcSet={`${imageM2x} 1x, ${imageM2x} 2x, ${imageM4x} 4x`}
            media="(max-width: 767px)"
          />
          <source
            srcSet={`${imageT2x} 1x, ${imageT2x} 2x, ${imageT4x} 4x`}
            media="(max-width: 1439px)"
          />
          <source
            srcSet={`${imageD2x} 1x, ${imageD2x} 2x, ${imageD4x} 4x`}
            media="(min-width: 1440px)"
          />
          <img src={imageD4x} alt="pizza" />
        </picture>
      </div>
    </section>
  );
};

export default Delivery;
