import { Col, Container, Row } from "react-bootstrap";
import imagePaths from "../../constants/path";
import "../AboutUsPage/about_us_page.scss";
import { Link } from "react-scroll";

function AboutUsPage() {
  return (
    <Container className="about-us-container">
      <Row>
        <Col>
          <h2>GIỚI THIỆU VỀ CHÚNG TÔI</h2>
        </Col>
      </Row>
      <Container fluid="md">
        <Row>
          <Col xs={12} md={6}>
            <img src={imagePaths.aboutus}></img>
            <Link to="story" smooth={true} duration={500} offset={-70}>
              <div className="text-overlay-1">CÂU CHUYỆN THƯƠNG HIỆU</div>
            </Link>
          </Col>
          <Col xs={12} md={6}>
            <img src={imagePaths.aboutus}></img>
            <Link to="vision" smooth={true} duration={500} offset={-70}>
              <div className="text-overlay-2">TẦM NHÌN VÀ SỨ MỆNH</div>
            </Link>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default AboutUsPage;
