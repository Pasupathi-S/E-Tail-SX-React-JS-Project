import Slider from "react-slick";

const ReviewData = [
  {
    id: 1,
    name: "Pasupathi",
    text: "Enjoy a seamless and secure shopping experience at E-Tail SX. Browse through our user-friendly website, add your favorite dresses to the cart, Select your favorites, add them to your cart, and complete your purchase with confidence.Your journey to style and confidence starts here.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Vishnu",
    text: "Immerse yourself in an elevated shopping journey at E-Tail SX. Our intuitively Browse through our user-friendly website, add your designed website ensures a smooth and enjoyable experience. From effortlessly navigating through categories to securely checking out, your journey to finding the perfect dress starts here.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Saravana Kumar",
    text: "Embark on a journey of effortless elegance with E-Tail SX. Our user-friendly website allows you to effortlessly explore a world of stunning dresses. Select your favorites, add them to your cart, and experience the joy of securing your style with a simple and secure checkout process.",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 4,
    name: "Sasi Kumar",
    text: "Discovering your signature style has never been easier. At E-tail SX, our website Browse through our user-friendly website, add  is tailored for a seamless style discovery. With a few clicks, explore a curated collection of dresses, add them to your cart, and indulge in the pleasure of a hassle-free checkout.",
    img: "https://picsum.photos/103/103",
  },
];

const Review = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            What our customers are saying
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testimonials
          </h1>
          
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {ReviewData.map((data) => (
              <div key={data.id} className="my-6">
                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
                  {/* Display testimonial content */}
                  <div className="flex items-center">
                    <img src={data.img} alt={data.name} className="w-10 h-10 rounded-full" />
                    <span className="ml-3 font-semibold">{data.name}</span>
                  </div>
                  <p className="text-md">{data.text}</p>
                  
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Review;
