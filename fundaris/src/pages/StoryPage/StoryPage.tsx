import { Col, Container, Row } from "react-bootstrap";
import "../StoryPage/story_page.scss";
import imagePaths from "../../constants/path";

function StoryPage() {
  return (
    <Container className="story-container">
      <h2 className="title">CÂU CHUYỆN THƯƠNG HIỆU</h2>
      <Row className="justify-content-md-center">
        <img className="logo" src={imagePaths.logo} alt="logo" />
      </Row>
      <h2 className="title" style={{ marginBottom: 27 }}>
        Hành trình ra đời Fungaris – Kết tinh từ tình yêu thương
      </h2>
      <Row className="justify-content-md-center">
        <Col md={8}>
          <p className="story-content">
            Tất cả bắt đầu từ khi anh phải chuyển ra Hà Nội làm việc, xa bố mẹ
            và quê nhà. Mỗi ngày, anh đều đau đáu nghĩ về sức khỏe của bố mẹ,
            nhất là sau khi bố anh mắc bệnh lâu ngày, sức khỏe suy yếu rõ rệt vì
            chế độ dinh dưỡng không đảm bảo và ảnh hưởng tinh thần từ dịch
            COVID-19.
            <br />
            <br />
            Trước đây, bố anh từng là người đàn ông khỏe mạnh nhưng bệnh đã làm
            ông trở nên gầy và yếu hơn. Tiểu đường khiến hạn chế các loại thức
            ăn. Những lần hiếm hoi về quê, hình ảnh bố mệt và tiều tụy khiến anh
            buồn bã và lo lắng.
            <br />
            <br />
            Là một người con, anh không thể đứng nhìn bố mình chịu đựng như vậy.
            Từ đó, anh bắt đầu tìm kiếm một giải pháp dinh dưỡng vừa an toàn,
            vừa hiệu quả để cải thiện sức khỏe cho bố mình. Trong hành trình
            này, anh phát hiện ra Đông trùng hạ thảo – loại dược liệu quý giá
            với nhiều lợi ích vượt trội cho sức khỏe, đặc biệt phù hợp với bệnh
            nhân tiểu đường.
            <br />
            <br />
            Tuy nhiên, vấn đề lớn nhất là giá thành của Đông trùng hạ thảo tự
            nhiên quá đắt đỏ, lên tới hàng tỷ đồng mỗi kg, vượt xa khả năng tài
            chính của một nhân viên bình thường. Nhưng thay vì từ bỏ, anh quyết
            tâm tiếp tục tìm kiếm.
            <br />
            <br />
            May mắn khi anh tình cờ gặp được các nhà khoa học tại Viện Di truyền
            Nông nghiệp Việt Nam. Họ giới thiệu cho anh về Cordyceps militaris,
            một giống Nhộng trùng thảo được nuôi trồng nhân tạo với chi phí hợp
            lý nhưng vẫn giữ nguyên giá trị dinh dưỡng. Loại militaris này không
            chỉ giàu Cordycepin và Adenosine – hai hoạt chất quý giúp tăng cường
            sức khỏe và cải thiện tinh thần – mà còn an toàn tuyệt đối cho người
            bệnh tiểu đường.
            <br />
            <br />
            Nhận ra tiềm năng to lớn của sản phẩm này, anh quyết định bắt tay
            vào nghiên cứu sâu hơn và hợp tác với các chuyên gia để xây dựng
            thương hiệu Nhộng trùng thảo của riêng mình – Fungaris. Sứ mệnh của
            Fungaris không chỉ là mang đến các sản phẩm chất lượng cao mà còn
            làm cho Nhộng trùng thảo trở nên dễ tiếp cận hơn với mọi người, đặc
            biệt là những người cần cải thiện sức khỏe cho người thân.
            <br />
            <br />
            Hành trình từ một người con lo lắng cho sức khỏe của bố mẹ đến người
            sáng lập thương hiệu Fungaris chính là minh chứng cho tình yêu gia
            đình và khát khao đóng góp cho cộng đồng. Fungaris ra đời để lan tỏa
            giá trị chăm sóc sức khỏe bền vững, giúp mọi người sống vui, khỏe và
            tràn đầy năng lượng.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default StoryPage;
