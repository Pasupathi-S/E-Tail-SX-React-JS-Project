import PropTypes from "prop-types";
import Img1 from "../../Images/Shirt/Shirt1.png";
import Img2 from "../../Images/Shirt/Shirt2.png";
import Img3 from "../../Images/Shirt/Shirt3.png";
import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Casual Wear",
    description:
      "Discover laid-back chic with our latest casual wear collection. From cozy knits to versatile denim, embrace comfort without compromising style. Effortlessly transition from day to night with our casual essentials, designed for the modern, on-the-go lifestyle.",
  },
  {
    id: 2,
    img: Img2,
    title: "Printed shirt",
    description:
      "Step into the spotlight with our vibrant printed shirts, where style meets individuality. Express yourself with eye-catching patterns and premium comfort, ensuring you stand out effortlessly in every crowd.our curated collection of printed shirts",
  },
  {
    id: 3,
    img: Img3,
    title: "Women shirt",
    description:
      "Discover timeless elegance with our collection of women's shirts. From classic button-downs to chic blouses, each piece is meticulously crafted for comfort and style. Elevate your wardrobe with versatile designs that embracing the perfect blend of fashion and functionality.",
  },
];

const TopProductsComponent = ({ handleOrderPopup }) => {
  return (
    <div>
      <div className="container">
        {/* Header section */}
        <div className="text-left mb-24">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Rated Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Best Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi Sit asperiores modi
          </p>
        </div>
        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {ProductsData.map((data) => (
            <div
              key={data.id} // Add unique key here
              data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
            >
              {/* image section */}
              <div className="h-[100px]">
                <img
                  src={data.img}
                  alt=""
                  className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>
              {/* details section */}
              <div className="p-4 text-center">
                {/* star rating */}
                <div className="w-full flex items-center justify-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {data.description}
                </p>
                <button
                  className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                  onClick={handleOrderPopup}
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

TopProductsComponent.propTypes = {
  handleOrderPopup: PropTypes.func.isRequired,
};

export default TopProductsComponent;
