import styles from "./allReviews.module.scss";
import Breadcrumbs from "../../shared/components/Breadcrumbs/Breadcrumbs";
// Import the Cloudinary class
import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";

// Create your transformation

const AllReviews = () => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "demo",
    },
  });

  const myImage = cld.image(
    "https://res.cloudinary.com/dxmkpbs6r/image/upload/v1697977255/TastyGo_Project/content/dishes_png/Salad_with_chicken_mvd5ei.png"
  );
  myImage.resize(fill().width(200).height(300).gravity(autoGravity()));

  console.log(myImage);
  return (
    <section className={`${styles.wrapperHeder} container`}>
      <div className={styles.breadcrumbsWrapper}>
        <Breadcrumbs />
      </div>
      <div className={styles.testImg}>
        <img alt="" src={myImage.publicID} />
      </div>
      <h1 className={styles.reviewsH1}>Reviews</h1>
    </section>
  );
};

export default AllReviews;
