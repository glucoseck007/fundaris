import React from "react";
import { Container, Button } from "react-bootstrap";
import ProductSection from "../../component/ProductSection/ProductSection";
import imagePaths from "../../constants/path";
import "../ProductPage/product_page.scss";
import { useCart } from "../../pages/Cart/CartProvider";

const ProductPage2: React.FC = () => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const product = {
      image: imagePaths.product2,
      title: "NẾN THƠM CUNG KIM NGƯU",
      subtitle: "140.000 đ",
      description:
        "Nến thơm dành riêng cho cung Kim Ngưu, mang đến sự thư thái và cảm giác an yên.",
      price: "140000",
    };

    addToCart(product);
  };

  return (
    <Container className="product-page">
      <ProductSection
        image={imagePaths.product2}
        title="NẾN THƠM CUNG KIM NGƯU"
        content={`
          Giá: 140.000 đ
          Mô tả: Nến thơm dành riêng cho cung Kim Ngưu, mang đến sự thư thái và cảm giác an yên.
          Thành phần: Sáp đậu nành tự nhiên, tinh dầu hoa hồng, gỗ tuyết tùng và xạ hương.
          Hương thơm: Ngọt ngào, quyến rũ với sự hòa quyện của hoa hồng và gỗ tuyết tùng, tạo nên không gian ấm áp và dễ chịu.
          Tác dụng: Giúp thư giãn tinh thần, cân bằng cảm xúc và tăng cường sự thoải mái trong không gian sống.`}
        showImage={false}
      />
      <Button className="button-card" onClick={handleAddToCart}>
        THÊM VÀO GIỎ HÀNG
      </Button>
    </Container>
  );
};

export default ProductPage2;
