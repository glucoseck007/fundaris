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
        Hành trình ra đời Candle Tales – Thắp sáng những câu chuyện của tâm hồn
      </h2>
      <Row className="justify-content-md-center">
        <Col md={8}>
          <p className="story-content">
            Tất cả bắt đầu từ những ngày đông lạnh giá khi cô sống một mình
            trong căn hộ nhỏ giữa lòng thành phố tấp nập. Xa gia đình, xa quê
            hương, những buổi tối dài trở nên trống vắng và lạnh lẽo. Cô nhớ da
            diết không gian ấm áp của ngôi nhà nhỏ nơi có mùi thơm quen thuộc từ
            những cây nến mẹ hay thắp mỗi tối—hương cam dịu nhẹ, chút quế nồng
            nàn, và thoang thoảng mùi vani ấm áp. Những mùi hương ấy không chỉ
            là ký ức mà còn là sự an ủi, giúp cô cảm thấy được bao bọc trong
            tình yêu thương dù ở bất cứ đâu.
            <br />
            <br />
            Nhận ra sức mạnh kỳ diệu của hương thơm trong việc chạm đến những
            cảm xúc sâu thẳm nhất, cô bắt đầu tìm hiểu về nghệ thuật làm nến.
            Không đơn thuần chỉ là thắp sáng, cô muốn mỗi cây nến đều kể một câu
            chuyện riêng—về ký ức, về những khoảnh khắc đáng nhớ hay đơn giản là
            cảm giác bình yên sau một ngày dài mệt mỏi. Tuy nhiên, hành trình ấy
            không hề dễ dàng. Cô thử nghiệm hàng trăm công thức, từ sáp ong tự
            nhiên, sáp đậu nành cho đến các loại tinh dầu thiên nhiên, để tìm ra
            sự kết hợp hoàn hảo giữa hương thơm và sự an toàn cho sức khỏe.
            <br />
            <br />
            Trong quá trình đó, cô nhận ra rằng hương thơm không chỉ làm dịu tâm
            hồn mà còn có thể trở thành cầu nối giữa con người với những kỷ niệm
            quý giá. Đó là lý do <b>Candle Tales</b> ra đời—một thương hiệu nến
            thơm không chỉ để chiếu sáng không gian, mà còn thắp lên những câu
            chuyện đầy cảm xúc. Mỗi sản phẩm đều được tạo ra bằng tình yêu và sự
            tỉ mỉ, từ khâu lựa chọn nguyên liệu đến thiết kế bao bì mang đậm nét
            nghệ thuật.
            <br />
            <br />
            Sứ mệnh của Candle Tales không chỉ là mang lại những cây nến đẹp
            mắt, mà còn lan tỏa sự ấm áp, yêu thương và cảm giác bình yên trong
            từng khoảnh khắc nhỏ bé của cuộc sống. Đó là hành trình từ một cô
            gái tìm kiếm cảm giác thân thuộc giữa thành phố xa lạ đến người sáng
            lập thương hiệu nến thơm, với mong muốn mỗi ngọn nến sẽ là một câu
            chuyện nhỏ, chạm đến trái tim của những người xung quanh.
            <br />
            <br />
            <b>Candle Tales – Thắp sáng ký ức, kể câu chuyện của riêng bạn.</b>
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default StoryPage;
