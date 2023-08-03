import Hero from "../../modules/Hero/Hero";
import PopularDishes from "../../modules/Dishes/PopularDishes/PopularDishes";
import Services from "../../modules/Services/Services";
import Reviews from "../../modules/Reviews/Reviews";
import InfoContacts from "../../modules/InfoContacts/InfoContacts";
import Footer from "../../modules/Footer/Footer";

const MainPage = () => {
  return (
    <>
      <Hero />
      <PopularDishes/>
      <Services />
      <Reviews />
      <InfoContacts />
      <Footer />
    </>
  );
};

export default MainPage;
