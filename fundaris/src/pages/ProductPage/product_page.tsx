import React from "react";
import { Container, Button } from "react-bootstrap";
import ProductSection from "../../component/ProductSection/ProductSection";
import imagePaths from "../../constants/path";
import "../ProductPage/product_page.scss";
import { useCart } from "../../pages/Cart/CartProvider";

const ProductPage: React.FC = () => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const product = {
      image: imagePaths.product1,
      title: "NẾN THƠM CUNG BẠCH DƯƠNG",
      subtitle: "140.000 đ",
      description:
        "Nến thơm dành riêng cho cung Bạch Dương, biểu tượng của sự nhiệt huyết và mạnh mẽ.",
      price: "140000",
    };

    addToCart(product);
  };

  return (
    <Container className="product-page">
      <ProductSection
        image={imagePaths.product1}
        title="NẾN THƠM CUNG BẠCH DƯƠNG"
        content={`
          Giá: 140.000 đ
          Khám phá vẻ đẹp của sự nhiệt huyết và mạnh mẽ với nến thơm cung Bạch Dương. Bao bì được thiết kế ấn tượng với tông màu rực rỡ, họa tiết sắc nét biểu tượng cho sự quyết đoán và dũng cảm. Hương thơm tươi mát từ cam chanh, gừng và gỗ đàn hương mang lại nguồn năng lượng tích cực, khơi dậy tinh thần bùng cháy và sự tự tin chinh phục mọi thử thách.`}
        showImage={true}
      />
      <Button className="button-card" onClick={handleAddToCart}>
        THÊM VÀO GIỎ HÀNG
      </Button>
    </Container>
  );
};

export default ProductPage;
