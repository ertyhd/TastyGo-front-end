import styles from "./faq.module.scss";
import { useState } from "react";
import imageD2x from "../../../assete/jpg/delivery/girls-eating-pizzaD2x.jpg";
import imageD4x from "../../../assete/jpg/delivery/girls-eating-pizzaD4x.jpg";
import imageT2x from "../../../assete/jpg/delivery/girls-eating-pizzaT2x.jpg";
import imageT4x from "../../../assete/jpg/delivery/girls-eating-pizzaT4x.jpg";
import imageM2x from "../../../assete/jpg/delivery/girls-eating-pizzaM2x.jpg";
import imageM4x from "../../../assete/jpg/delivery/girls-eating-pizzaM4x.jpg";
import items from "./faqList";

import FaqSingleBlock from "./FaqSingleBlock/FaqSingleBlock";

const Faq = () => {
  // const [isItemID, setItemID] = useState(items[0].id);
  const [isItemID, setItemID] = useState("");
  const handleButtonClick = (id) => {
    if (isItemID === id) {
      return setItemID("");
    }
    setItemID(id);
    // setItemID("");
    // setTimeout(() => {
    //   setItemID(id);
    // }, 600);
  };
  const elements = items.map((item) => (
    <li key={item.id}>
      <FaqSingleBlock
        handleClick={handleButtonClick}
        item={item}
        isId={isItemID}
      />
    </li>
  ));
  return (
    <section className={`${styles.deliveryContainer} container`}>
      <h1>FAQ</h1>
      <div className={styles.mainSection}>
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
        <ul className={styles.mainSectionLeft}>{elements}</ul>
      </div>
    </section>
  );
};

export default Faq;
