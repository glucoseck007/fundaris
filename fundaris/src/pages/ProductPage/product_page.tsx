import React from "react";
import { Container } from "react-bootstrap";
import ProductSection from "../../component/ProductSection/ProductSection";
import imagePaths from "../../constants/path";
import "../ProductPage/product_page.scss";

const ProductPage: React.FC = () => {
  return (
    <Container className="product-page">
      <ProductSection
        image={imagePaths.product3}
        title="THÀNH PHẦN TRÀ NHỘNG TRÙNG THẢO"
        content={`Định lượng: 1 hộp/20 gói
          Giá: 249.000 đ
          Mô tả: Sử dụng Nhộng Trùng Thảo loại 2 và 3 xay thành bột
          Nhộng trùng thảo có thành phần khiến tôn hơn: Chứa khoảng 17 loại acid amin, vitamin A, C và các hoạt chất sinh học quý như cordycepin, polysaccharide...
          Tác dụng: Nhộng trùng thảo: ăn khỏe, ngủ khỏe, kháng khuẩn, kháng viêm, giảm mệt mỏi, tăng cường sinh lý...`}
        showImage={false}
      />
      <ProductSection
        image={imagePaths.product4}
        title="THÀNH PHẦN NHỘNG TRÙNG THẢO KHÔ"
        content={`Định lượng: 1 lọ/20 g
          Giá: 249.000 đ
          Mô tả: Sử dụng Nhộng Trùng Thảo loại 2 và 3 xay thành bột
          Nhộng trùng thảo có thành phần khiến tôn hơn: Chứa khoảng 17 loại acid amin, vitamin A, C và các hoạt chất sinh học quý như cordycepin, polysaccharide...
          Tác dụng: Nhộng trùng thảo: ăn khỏe, ngủ khỏe, kháng khuẩn, kháng viêm, giảm mệt mỏi, tăng cường sinh lý...`}
        showImage={true}
      />
    </Container>
  );
};

export default ProductPage;
