import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { SvgSelector } from "../SvgSelector/SvgSelector";
import css from "./sectionLink.module.scss";

const SectionLink = ({ children }) => {
    const [isCenterMode, setIsCenterMode] = useState(false);
      useEffect(() => {
        const handleResize = () => {
          setIsCenterMode(window.innerWidth <= 767);
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);
  return (
    <Link className={css.sectionLink}>
      {children}
      <SvgSelector
        styles={css.arrowBtnSvg}
        id="arrowTopRight"
        viewBox={isCenterMode ? "8 8 32 32" : "7 7 32 32"}
      />
    </Link>
  );
};

export default SectionLink;
