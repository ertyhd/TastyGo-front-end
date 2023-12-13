import imageMobil1x from "../../../../assete/jpg/popularDishes/image-9-mobil-1x.jpg";
import imageMobil2x from "../../../../assete/jpg/popularDishes/image-9-mobil-2x.jpg";
import imageMobil4x from "../../../../assete/jpg/popularDishes/image-9-mobil-4x.jpg";
import imageTablet1x from "../../../../assete/jpg/popularDishes/image-9-tablet-1x.jpg";
import imageTablet2x from "../../../../assete/jpg/popularDishes/image-9-tablet-2x.jpg";
import imageTablet4x from "../../../../assete/jpg/popularDishes/image-9-tablet-4x.jpg";
import imageDesktop1x from "../../../../assete/jpg/popularDishes/image-9-desktop-1x.jpg";
import imageDesktop2x from "../../../../assete/jpg/popularDishes/image-9-desktop-2x.jpg";
import imageDesktop4x from "../../../../assete/jpg/popularDishes/image9desktop4x.jpg";

import css from './imageMainPopularSection.module.scss';
const ImageMainPopularSection = () => {
   
  return (
    <picture className={css.picture}>
      <source
        srcSet={`${imageDesktop1x} 1x, ${imageDesktop2x} 2x, ${imageDesktop4x} 4x`}
        media="(min-width: 1440px)"
      />
      <source
        srcSet={`${imageTablet1x} 1x, ${imageTablet2x} 2x, ${imageTablet4x} 4x`}
        media="(min-width: 768px)"
      />
      <source
        srcSet={`${imageMobil1x} 1x, ${imageMobil2x} 2x, ${imageMobil4x} 4x`}
        media="(min-width: 360px)"
      />
      <img alt="man cooks food" src={imageDesktop4x} />
    </picture>
  );
};
export default ImageMainPopularSection;
