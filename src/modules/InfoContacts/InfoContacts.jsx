import { Link } from "react-router-dom";
import styles from "./infoContacts.module.scss";
import { SvgSelector } from "../../shared/components/SvgSelector/SvgSelector";

const InfoContacts = () => {
  return (
    <section className={styles.infoContacts_container}>
      <div className={styles.infoContacts_container__background}>
        <div className={styles.infoContacts_container__block}>
          <div className={styles.infoContacts_container__blockContacts}>
            <p className={styles.infoContacts_container__headSpan}>Contacts</p>
            <h2>
              You can find us
              <br />
              at the adress
            </h2>
            <div className={styles.infoContacts_container__locSpan}>
              <span>
                <SvgSelector
                  id="location"
                  styles={styles.infoContacts_container__blockContactsSvg}
                />
                Kyiv, st.Shevchenka, 98
              </span>
              <span>
                <SvgSelector
                  id="telephone"
                  styles={styles.infoContacts_container__blockContactsSvg}
                />
                +38 (098) 000-11-22
              </span>
              <span>
                <SvgSelector
                  id="workingHours"
                  styles={styles.infoContacts_container__blockContactsSvg}
                />
                sun-mon 10:00-22:00
              </span>
            </div>
          </div>
          <div className={styles.infoContacts_container__blockLinks}>
            <Link
              onClick={() => (window.location.href = "tel:+380980001122")}
              className={styles.infoContacts_container__blockLink}
            >
              <SvgSelector
                id="arrowTopRight"
                styles={styles.infoContacts_container__blockLinkArrow}
                viewBox={"7 7 32 32"}
              />
              <p className={styles.phone}></p>
            </Link>
            <Link
              to="https://goo.gl/maps/oeu81a1tXeM5aGa18"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.infoContacts_container__blockLink}
            >
              <SvgSelector
                id="arrowTopRight"
                styles={styles.infoContacts_container__blockLinkArrow}
                viewBox={"7 7 32 32"}
              />
              <p className={styles.location}></p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoContacts;
