import { Container } from "react-bootstrap";
import "../ProductIntroPage/product_intro_page.scss";
import CustomCard from "../../component/CustomCard/CustomCard";
import imagePaths from "../../constants/path";
import { Link } from "react-router-dom";
import Slider, { CustomArrowProps } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const PrevArrow: React.FC<CustomArrowProps> = ({ className, style, onClick }) => {
  return (
    <div
      className={`${className} custom-prev-arrow`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
     <FaArrowLeft  />
    </div>
  );
};

const NextArrow: React.FC<CustomArrowProps> = ({ className, style, onClick }) => {
  return (
    <div
      className={`${className} custom-next-arrow`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <FaArrowRight />
    </div>
  );
};

const ProductIntroPage: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Container className="product-intro-container">
      <h2 className="text-center">Danh mục sản phẩm</h2>
      <Slider {...settings}>
        <div>
          <Link to={"/product1"}>
            <CustomCard
              image={imagePaths.product1}
              title="NHỘNG TRÙNG THẢO KHÔ (Lọ 20g)"
              subtitle="499.000đ"
              showButton={true}
              price="499000"
            />
          </Link>
        </div>
        <div>
          <Link to={"/product1"}>
            <CustomCard
              image={imagePaths.product1}
              title="NHỘNG TRÙNG THẢO KHÔ (Lọ 20g)"
              subtitle="499.000đ"
              showButton={true}
              price="499000"
            />
          </Link>
        </div>
        <div>
          <Link to={"/product1"}>
            <CustomCard
              image={imagePaths.product1}
              title="NHỘNG TRÙNG THẢO KHÔ (Lọ 20g)"
              subtitle="499.000đ"
              showButton={true}
              price="499000"
            />
          </Link>
        </div>
        <div>
          <Link to={"/product2"}>
            <CustomCard
              image={imagePaths.product2}
              title="TRÀ NHỘNG TRÙNG THẢO(Hộp 20 gói)"
              subtitle="249.000đ"
              showButton={true}
              price="249000"
            />
          </Link>
        </div>
        {/* Thêm sản phẩm khác nếu cần */}
      </Slider>
    </Container>
  );
};

export default ProductIntroPage;
