import React from "react";
import { Container, Button } from "react-bootstrap";
import ProductSection from "../../component/ProductSection/ProductSection";
import imagePaths from "../../constants/path";
import "../ProductPage/product_page.scss";
import { useCart } from "../../pages/Cart/CartProvider";

const ProductPage4: React.FC = () => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const product = {
      image: imagePaths.product4,
      title: "NẾN THƠM CUNG THIÊN BÌNH",
      subtitle: "140.000 đ",
      description:
        "Nến thơm dành riêng cho cung Thiên Bình, biểu tượng của sự cân bằng và thanh tao.",
      price: "140000",
    };

    addToCart(product);
  };

  return (
    <Container className="product-page">
      <ProductSection
        image={imagePaths.product4}
        title="NẾN THƠM CUNG THIÊN BÌNH"
        content={`
          Giá: 299.000 đ
          Mô tả: Nến thơm dành riêng cho cung Thiên Bình, biểu tượng của sự cân bằng và thanh tao.
          Thành phần: Sáp đậu nành tự nhiên, tinh dầu hoa nhài, vani và xạ hương.
          Hương thơm: Dịu dàng, tinh tế với sự kết hợp của hoa nhài và vani, mang lại cảm giác thư giãn và hài hòa.
          Tác dụng: Giúp tìm lại sự bình yên nội tại, cân bằng cảm xúc và tạo không gian thư giãn sau những bộn bề của cuộc sống.`}
        showImage={false}
      />
      <Button className="button-card" onClick={handleAddToCart}>
        THÊM VÀO GIỎ HÀNG
      </Button>
    </Container>
  );
};

export default ProductPage4;
