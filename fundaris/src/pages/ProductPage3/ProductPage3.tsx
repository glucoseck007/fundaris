import React from "react";
import { Container, Button } from "react-bootstrap";
import ProductSection from "../../component/ProductSection/ProductSection";
import imagePaths from "../../constants/path";
import "../ProductPage/product_page.scss";
import { useCart } from "../../pages/Cart/CartProvider";

const ProductPage3: React.FC = () => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const product = {
      image: imagePaths.product3,
      title: "NẾN THƠM CUNG MA KẾT",
      subtitle: "140.000 đ",
      description:
        "Nến thơm dành riêng cho cung Ma Kết, mang đến sự vững chãi và tập trung.",
      price: "140000",
    };

    addToCart(product);
  };

  return (
    <Container className="product-page">
      <ProductSection
        image={imagePaths.product3}
        title="NẾN THƠM CUNG MA KẾT"
        content={`
          Giá: 140.000 đ
          Mô tả: Nến thơm dành riêng cho cung Ma Kết, mang đến sự vững chãi và tập trung.
          Thành phần: Sáp ong tự nhiên, tinh dầu gỗ đàn hương, hoắc hương và hổ phách.
          Hương thơm: Nồng ấm, sâu lắng với sự kết hợp của gỗ đàn hương và hổ phách, giúp tăng cường sự kiên định và ổn định tinh thần.
          Tác dụng: Giúp thư giãn, giảm căng thẳng, tăng khả năng tập trung và mang lại cảm giác bình yên.`}
        showImage={false}
      />
      <Button className="button-card" onClick={handleAddToCart}>
        THÊM VÀO GIỎ HÀNG
      </Button>
    </Container>
  );
};

export default ProductPage3;
