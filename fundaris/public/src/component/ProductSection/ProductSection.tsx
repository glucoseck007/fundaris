import React from "react";
import { Row, Col } from "react-bootstrap";
import "../ProductSection/product_section.scss";

interface ProductSectionProps {
  image: string;
  title: string;
  content: string;
  showImage?: boolean; // Default is true (content on the right)
}

const ProductSection: React.FC<ProductSectionProps> = ({
  image,
  title,
  content,
  showImage = true,
}) => {
  return (
    <Row
      className={`product-section ${
        showImage ? "content-right" : "content-left"
      } align-items-center mb-5`}
    >
      <Col
        md={6}
        className={`image-col ${
          showImage ? "align-image-left" : "align-image-right"
        }`}
      >
        <img src={image} alt={title} className="product-image" />
      </Col>
      <Col
        md={6}
        className={`content-col ${
          showImage ? "align-content-right" : "align-content-left"
        }`}
      >
        <div className="product-content-wrapper">
          <h3 className="product-title">{title}</h3>
          <hr className="title-divider" />
          <p className="product-content">{content}</p>
        </div>
      </Col>
    </Row>
  );
};

export default ProductSection;
