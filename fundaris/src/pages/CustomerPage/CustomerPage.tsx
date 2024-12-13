import { Card, Col, Container, Row } from "react-bootstrap";
import "../CustomerPage/customer.scss";
import imagePaths from "../../constants/path";

function CustomerPage() {
  return (
    <Container className="customer-container">
      <Row>
        <Col>
          <h2>Phản hồi khách hàng</h2>
        </Col>
      </Row>
      <Container fluid="md">
        <Row>
          <Col className="column">
            <Card className="customer-card">
              <Card.Img
                variant="top"
                src={imagePaths.customer1}
                alt="customer"
              />
              <Card.Body className="c-card-body">
                <Card.Text className="des">
                  “Dùng trà nhộng trùng thảo Fungaris bà thấy ăn uống dễ dàng
                  hơn, giấc ngủ sâu hơn và không còn hay mệt mỏi’
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="column">
            <Card className="customer-card">
              <Card.Img
                variant="top"
                src={imagePaths.customer2}
                alt="customer"
              />
              <Card.Body className="c-card-body">
                <Card.Title className="customer-title">
                  Anh N. T. Nhã
                </Card.Title>
                <Card.Text className="customer-text">
                  Đà Nẵng, Giải 2 chỉ vàng
                </Card.Text>
                <Card.Text className="des">
                  “Uống mỗi ngày, bác thấy sức bền tăng lên, cơ thể ít bị kiệt
                  sức như trước. Mùi vị trà cũng rất dễ uống, phù hợp để bổ sung
                  vào thói quen chăm sóc sức khỏe hàng ngày”
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="column">
            <Card className="customer-card">
              <Card.Img
                variant="top"
                src={imagePaths.customer3}
                alt="customer"
              />
              <Card.Body className="c-card-body">
                <Card.Title className="customer-title">
                  Anh N. T. Nhã
                </Card.Title>
                <Card.Text className="customer-text">
                  Đà Nẵng, Giải 2 chỉ vàng
                </Card.Text>
                <Card.Text className="des">
                  “Dùng trà nhộng trùng thảo Fungaris bà thấy ăn uống dễ dàng
                  hơn, giấc ngủ sâu hơn và không còn hay mệt mỏi’
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default CustomerPage;
