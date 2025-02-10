import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  {
    title: "Khám Phá Bộ Sưu Tập Cung Hoàng Đạo",
    description:
      "Những sản phẩm độc đáo lấy cảm hứng từ 12 cung hoàng đạo, thể hiện cá tính của bạn.",
    imageUrl: "/zodiac_collection.svg?height=400&width=800",
  },
  {
    title: "Hành Trình Qua 63 Tỉnh Thành Việt Nam",
    description:
      "Khám phá sự đa dạng văn hóa và sản phẩm đặc trưng từ mọi vùng miền.",
    imageUrl: "/vietnam_provinces.svg?height=400&width=800",
  },
  {
    title: "Ưu Đãi Đặc Biệt Mỗi Tháng",
    description:
      "Đừng bỏ lỡ những chương trình khuyến mãi hấp dẫn và sản phẩm mới nhất.",
    imageUrl: "/special_offers.svg?height=400&width=800",
  },
];

const Carousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative h-64">
            <img
              src={slide.imageUrl}
              alt={slide.title}
              className="w-full h-64 object-cover rounded-xl"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white p-4 rounded-xl transition-transform duration-500 hover:scale-105">
              <h2 className="text-2xl font-bold mb-2 animate-bounce">
                {slide.title}
              </h2>
              <p className="text-sm text-center">{slide.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
