import { Col, Container, Row } from "react-bootstrap";
import "../ProductIntroPage/product_intro_page.scss";
import CustomCard from "../../component/CustomCard/CustomCard";
import imagePaths from "../../constants/path";

function ProductIntroPage() {
  return (
    <Container className="product-intro-container">
      <Row>
        <Col>
          <h2>Danh mục sản phẩm</h2>
        </Col>
      </Row>
      <Container fluid="xs">
        <Row>
          <Col className="column">
            <CustomCard
              image={imagePaths.product1}
              title="NHỘNG TRÙNG THẢO KHÔ (Lọ 20g)"
              subtitle="499.000đ"
              showButton={true}
              price="499000"
            />
          </Col>
          <Col className="column">
            <CustomCard
              image={imagePaths.product2}
              title="TRÀ NHỘNG TRÙNG THẢO (Hộp 20 gói)"
              subtitle="249.000đ"
              showButton={true}
              price="499000"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ProductIntroPage;
