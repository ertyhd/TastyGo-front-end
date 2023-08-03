import { SvgSelector } from "../../shared/components/SvgSelector/SvgSelector";
import { nanoid } from "nanoid";

const RatingStars = ({ rating, styles }) => {
  const stars = [];
  for (let i = 0; i < Math.floor(rating); i++) {
    stars.push(<SvgSelector id="star" key={nanoid()} styles={styles} />);
  }
  return <>{stars}</>;
};

export default RatingStars;
