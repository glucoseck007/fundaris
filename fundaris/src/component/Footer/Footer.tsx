import React from "react";
import "../Footer/footer.scss";
import imagePaths from "../../constants/path";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section: Logo and Description */}
        <div className="footer-section footer-logo">
          <img src={imagePaths.logo} alt="Fungaris Logo" className="logo" />
          <p>
            Cung cấp các sản phẩm Nhộng Trùng Hạ Thảo chính hãng từ Viện Hàn Lâm
            Khoa Học và Công Nghệ Việt Nam
          </p>
        </div>

        {/* Middle Section: Links */}
        <div className="footer-section footer-links">
          <h4>Sản phẩm</h4>
          <ul>
            <li>Nhộng trùng thảo tươi</li>
            <li>Nhộng trùng thảo khô</li>
            <li>Trà nhộng trùng thảo</li>
            <li>Rượu nhộng trùng thảo</li>
          </ul>
        </div>

        {/* About Us Section */}
        <div className="footer-section footer-about">
          <h4>Về chúng tôi</h4>
          <ul>
            <li>Câu chuyện khởi nghiệp</li>
            <li>Tầm nhìn và sứ mệnh</li>
            <li>0987865086</li>
            <li>fungarisg29@gmail.com</li>
          </ul>
        </div>

        {/* Right Section: Location */}
        <div className="footer-section footer-contact">
          <h4>Hà Nội</h4>
          <p>Số 210, phố Trung Kính, phường Yên Hòa, quận Cầu Giấy</p>
          <a href="#" className="social-icon">
            <img src={imagePaths.fb} alt="Facebook" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
