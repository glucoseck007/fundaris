import { Col, Container, Row } from "react-bootstrap";
import imagePaths from "../../constants/path";
import "../StoryPage/story_page.scss";

function VisionPage() {
  return (
    <Container className="story-container">
      <h2 className="title">TẦM NHÌN VÀ SỨ MỆNH</h2>
      <Row className="justify-content-md-center">
        <img className="logo" src={imagePaths.logo} alt="logo" />
      </Row>
      <Row className="justify-content-md-center">
        <Col md={8}>
          <p className="story-content">
            Tầm nhìn của Fungaris là trở thành thương hiệu hàng đầu trong lĩnh
            vực sản phẩm Nhộng trùng thảo, cung cấp các sản phẩm chất lượng cao,
            đáp ứng các tiêu chuẩn nghiêm ngặt và khắt khe, thúc đẩy sức khỏe và
            kéo dài tuổi thọ của người Việt Nam. Chúng tôi đang xây dựng một
            thương hiệu uy tín phản ánh sự sáng tạo và khát vọng của Việt Nam
            trong sản xuất và kinh doanh thực phẩm chức năng. Tiến tới, chúng
            tôi đặt mục tiêu mở rộng sản xuất và xuất khẩu sang các thị trường
            lớn trên toàn cầu, khẳng định vị thế của doanh nghiệp Việt Nam trên
            thị trường quốc tế.
            <br />
            <br />
            Fungaris cùng với các chuyên gia hàng đầu của AGI không ngừng nghiên
            cứu và phát triển các sản phẩm mới từ Đông trùng hạ thảo, kết hợp
            phương pháp chế biến truyền thống với công nghệ hiện đại để tạo ra
            các sản phẩm độc đáo, phù hợp với xu hướng, thói quen và khẩu vị của
            người Việt Nam. Chúng tôi cam kết thúc đẩy việc sử dụng và tái chế
            tài nguyên thiên nhiên, giảm thiểu chất thải và tác động tiêu cực
            đến môi trường, đảm bảo cung cấp các sản phẩm chất lượng cao nhất
            cho người tiêu dùng.
          </p>
          <h6>Sứ mệnh:</h6>
          <p className="mission-content">
            "Sứ mệnh của Fungaris là góp phần vào một Việt Nam khỏe mạnh hơn
            bằng cách giảm bệnh tật, nâng cao sức khỏe và kéo dài tuổi thọ, tạo
            ra cuộc sống bền vững và hạnh phúc thông qua các sản phẩm thực phẩm
            bổ sung chất lượng cao với mức giá phải chăng cho người dân Việt
            Nam."
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default VisionPage;
