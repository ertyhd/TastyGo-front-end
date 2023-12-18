import styles from "./allReviews.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState, useRef } from "react";
import { getItemsReviews } from "../../redux/reviews/reviews-selector";
import { getReviews } from "../../redux/reviews/reviews-operation";
import { SvgSelector } from "../../shared/components/SvgSelector/SvgSelector";
import Breadcrumbs from "../../shared/components/Breadcrumbs/Breadcrumbs";
import AddReview from "../../shared/components/AddReview/AddReview";

import SingleRevieweCard from "../../shared/components/SingleRevieweCard/SingleRevieweCard";

const buttonList = [
  { id: "increaseDate", lavble: "Date: Newest First" },
  { id: "decreaseDate", lavble: "Date: Oldest First" },
  { id: "decreaseRating", lavble: "Star Rating: Lowest to Highest" },
  { id: "increaseRating", lavble: "Star Rating: Highest to Lowest" },
];

const AllReviews = () => {
  const [isCardsArr, setCardsArr] = useState([]);
  const [isSortCardsArr, setSortCardsArr] = useState([]);
  const [isAllCards, setAllCards] = useState(false);
  const [isSortOpen, setSortOpen] = useState(false);
  const [isSortBtn, setSortBtn] = useState("");
  const sortButtonRef = useRef(null);
  const sortModalRef = useRef(null);

  const dispatch = useDispatch();
  const items = useSelector(getItemsReviews);

  useEffect(() => {
    setCardsArr(isAllCards ? items : items.slice(0, 6));
  }, [isAllCards, items]);

  useEffect(() => {
    dispatch(getReviews());
  }, [dispatch]);

  useEffect(() => {
    setCardsArr(isSortCardsArr);
  }, [isSortCardsArr]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sortButtonRef.current &&
        !sortButtonRef.current.contains(event.target) &&
        sortModalRef.current &&
        !sortModalRef.current.contains(event.target)
      ) {
        setSortOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isSortOpen]);

  const handleButtonClick = () => {
    setSortOpen(!isSortOpen);
  };

  const sortCards = (action) => {
    setAllCards(true);
    setSortBtn(action);
    let dataNew = [];
    if (action === "increaseDate") {
      dataNew = [...items].sort((a, b) => parseInt(b.date) - parseInt(a.date));
    }
    if (action === "decreaseDate") {
      dataNew = [...items].sort((a, b) => parseInt(a.date) - parseInt(b.date));
    }
    if (action === "increaseRating") {
      dataNew = [...items].sort((a, b) => b.rating - a.rating);
    }
    if (action === "decreaseRating") {
      dataNew = [...items].sort((a, b) => a.rating - b.rating);
    }
    setSortCardsArr([...dataNew]);
  };

  const elements = isCardsArr.map((item) => (
    <li key={item._id} className={styles.cardsSection_gridLi}>
      <SingleRevieweCard item={item} />
    </li>
  ));
  const Buttonselements = buttonList.map((item) => (
    <li key={item.id} className={styles.sortModal_li}>
      <button type="button" onClick={() => sortCards(item.id)}>
        <SvgSelector
          id={isSortBtn === item.id ? "sortPointFill" : "sortPointClear"}
        />
        <p>{item.lavble}</p>
      </button>
    </li>
  ));

  return (
    <section className={`${styles.allReviewsContainer} container`}>
      <div className={styles.breadcrumbsWrapper}>
        <Breadcrumbs />
      </div>
      <div className={styles.cardsSection}>
        <div className={styles.cardsSection_header}>
          <h1 className={styles.reviewsH1}>
            Reviews<sup>{items.length}</sup>
          </h1>
          <button
            ref={sortButtonRef}
            type="button"
            className={styles.sortButton}
            onClick={handleButtonClick}
          >
            <p>Sort by</p>{" "}
            <SvgSelector id={isSortOpen ? "sortArrowUp" : "sortArrowDown"} />
          </button>
          {isSortOpen && (
            <ul ref={sortModalRef} className={styles.sortModal}>
              {Buttonselements}
            </ul>
          )}
        </div>

        <ul className={styles.cardsSection_grid}>{elements}</ul>
        {!isAllCards && (
          <button
            type="button"
            onClick={() => setAllCards(true)}
            className={styles.ButtonDark}
          >
            Read more reviews
          </button>
        )}
      </div>
      <div className={styles.fieldsSection}>
        <div className={styles.fieldsSection_titleBlock}>
          <h1>We value your feedback: rate and review</h1>
          <p>*Only registered users can leave reviews</p>
        </div>
        <AddReview />
      </div>
    </section>
  );
};

export default AllReviews;
