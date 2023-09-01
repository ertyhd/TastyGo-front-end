import { useEffect, useState } from "react";

import { Link, NavLink } from "react-router-dom";
import styles from "./footer.module.scss";
import Logo_TastyGo_White_Desktop from "../../assete/svg/Logo_TastyGo_White_Desktop.svg";
import Logo_TastyGo_White_Mobil from "../../assete/svg/Logo_TastyGo_White_Mobil.svg";

import { SvgSelector } from "../../shared/components/SvgSelector/SvgSelector";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);
    // Don`t forget. If need to checking media query in real time then switch addListaner
    const handleMediaChange = (event) => {
      setIsMobile(event.matches);
    };
    handleMediaChange(mediaQuery);

    mediaQuery.addListener(handleMediaChange);
    return () => {
      mediaQuery.removeListener(handleMediaChange);
    };
  }, []);

  return (
    <section className={styles.footer_section}>
      <Link className={styles.footer_container_whiteLogoLink}>
        <img
          src={isMobile ? Logo_TastyGo_White_Mobil : Logo_TastyGo_White_Desktop}
          alt="logo"
        />
        <span className={styles.footer_container_whiteLogoLink_span}>
          tasty go
        </span>
      </Link>
      <div className={styles.footer_container}>
        <ul className={styles.footer_container_menu}>
          <li>
            <NavLink>Menu</NavLink>
          </li>
          <li>
            <NavLink>delivery</NavLink>
          </li>
          <li>
            <NavLink>Reviews</NavLink>
          </li>
          <li>
            <NavLink>Contacts</NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <p>delivery & payment</p>
          </li>
          <li>
            <Link>terms of delivery</Link>
          </li>
          <li>
            <Link>Paymant methods</Link>
          </li>
        </ul>
        <ul>
          <li>
            <p>private policy</p>
          </li>
          <li>
            <Link>Offer agreement</Link>
          </li>
          <li>
            <Link>Privacy policy</Link>
          </li>
          <li>
            <Link>Rules of online sales</Link>
          </li>
        </ul>
        <div className={styles.footer_container_block}>
          <span>
            <p>We in social medias:</p>
            <div className={styles.footer_container_block__svg}>
              <Link>
                <SvgSelector id="instagram" />
              </Link>
              <Link>
                <SvgSelector id="tiktok" />
              </Link>
              <Link>
                <SvgSelector id="facebook" />
              </Link>
            </div>
          </span>
          <span>
            <p>we accept payment</p>
            <div className={styles.footer_container_block__svg}>
              <Link>
                <SvgSelector id="visa" />
              </Link>
              <Link>
                <SvgSelector id="mastercard" />
              </Link>
            </div>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
