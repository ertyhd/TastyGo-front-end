import Hero from "../../modules/Hero/Hero";
import PopularDishes from "../../modules/Dishes/PopularDishes/PopularDishes";
import Services from "../../modules/Services/Services";
import InfoContacts from "../../modules/InfoContacts/InfoContacts";
import Footer from "../../modules/Footer/Footer";

const MainPage = () => {
  return (
    <>
      <Hero />
      <PopularDishes/>
      <Services />
      <InfoContacts />
      <Footer />
    </>
  );
};

export default MainPage;
