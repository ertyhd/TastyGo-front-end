import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { FadeLoader } from "react-spinners";
import css from './LoaderSpinner.module.scss';

const override = {
  display: "block",
  margin: "0 auto",
  //   borderColor: "red",
  //   height: "10",
  //   width: "10",
  //   radius: "5",
  //   margin,
  //   color,
//   speedMultiplier: "1",
};

function LoaderSpinner() {
  

    return (
      
        <div className="sweet-loading">
          <FadeLoader
            height={10}
            width={10}
            radius={10}
            margin={8}
            speedMultiplier={1}
            cssOverride={override}
          />
        </div>
    
    );
}

export default LoaderSpinner;
