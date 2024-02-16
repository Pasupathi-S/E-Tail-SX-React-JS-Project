import React from "react";
import NavbarComponent from "./components/NavbarComponent/NavbarComponent";
import HeroComponent from "./components/HeroComponent/HeroComponent";
import ProductsComponent from "./components/ProductsComponent/ProductComponent";
import AOS from "aos";
import "aos/dist/aos.css";
import TopProductsComponent from "./components/TopProductsComponent/TopProductsComponent";
import Top from "./components/Top/Top";
import SubscribeComponent from "./components/SubscribeComponent/SubscribeComponent";
import ReviewComponent from "./components/ReviewComponent/ReviewComponent";
import FooterComponent from "./components/FooterComponent/FooterComponent";
import PopupComponent from "./components/PopupComponent/PopupComponent";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <NavbarComponent handleOrderPopup={handleOrderPopup} />
      <HeroComponent handleOrderPopup={handleOrderPopup} />
      <ProductsComponent />
      <TopProductsComponent handleOrderPopup={handleOrderPopup} />
      <Top />
      <SubscribeComponent />
      <ProductsComponent />
      <ReviewComponent />
      <FooterComponent />
      <PopupComponent orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  );
};

export default App;
