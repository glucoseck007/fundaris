import { Col, Container, Row } from "react-bootstrap";
import imagePaths from "../../constants/path";

import "../HomePage/home_page.scss";
import ProductIntroPage from "../ProductIntroPage/ProductIntroPage";
import CustomerPage from "../CustomerPage/CustomerPage";
import AboutUsPage from "../AboutUsPage/AboutUsPage";
import StoryPage from "../StoryPage/StoryPage";
import VisionPage from "../VisionPage/VisonPage";
import ProductPage from "../ProductPage/product_page";

function HomePage() {
  return (
    <>
      <section id="header">
        <Container fluid="xs" className="home-page-container">
          <Row className="background-row">
            <Col>
              <img
                className="backgroundImage"
                src={imagePaths.background}
                alt="background"
              />
            </Col>
          </Row>
          <section id="productIntro">
            <ProductIntroPage />
          </section>
          <CustomerPage />
          <AboutUsPage />
          <section id="story">
            <StoryPage />
          </section>
          <section id="vision">
            <VisionPage />
          </section>
          <section id="info">
            <ProductPage />
          </section>
        </Container>
      </section>
    </>
  );
}

export default HomePage;
