import React, { useEffect, useState } from "react";
import { useCart } from "../Cart/CartProvider";
import "../Cart/cart.scss";
import { Button, Modal, Form, Toast } from "react-bootstrap";
import imagePaths from "../../constants/path";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CartPage: React.FC = () => {
  const navigate = useNavigate();
  const { cart, clearCart, updateQuantity, getTotalPrice } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
  });
  const [showToast, setShowToast] = useState(false);

  const handleIncrease = (product: any) => {
    const newQuantity = (product.quantity || 1) + 1;
    updateQuantity(product, newQuantity);
  };

  const handleDecrease = (product: any) => {
    if (product.quantity && product.quantity > 1) {
      const newQuantity = product.quantity - 1;
      updateQuantity(product, newQuantity);
    }
  };

  const handleInputChange = (product: any, value: string) => {
    const quantity = parseInt(value, 10);
    if (!isNaN(quantity) && quantity > 0) {
      updateQuantity(product, quantity);
    }
  };

  const handleOrderClick = (product: any) => {
    setIsModalOpen(true); // Open the modal
  };

  const handleInputChangeModal = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    console.log("User Data:", formData); // Log form data (or replace with API call)
    setShowToast(true);
    // <Toast bg="success">
    //   <Toast.Body>Đặt hàng thành công!</Toast.Body>
    // </Toast>;
    toast.success("Đặt hàng thành công");

    setIsModalOpen(false);

    setTimeout(() => {
      clearCart();
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
      navigate("/", { replace: true });
    }, 3000);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="product-page">
      <h2 className="product-title">THÔNG TIN SẢN PHẨM</h2>
      {cart.length === 0 ? (
        <p>Giỏ hàng của bạn đang trống</p> // Display this message if the cart is empty
      ) : (
        <div className="cart-products">
          {cart.map((product, index) => (
            <div key={index} className="product-container">
              <div className="product-image">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="product-details">
                <h2>{product.title}</h2>
                <hr />
                <div className="product-info">
                  <p className="quantity">{product.quantity || 1} Cốc</p>
                  <h3>{getTotalPrice()} đ</h3>
                </div>
                <hr />

                <div className="quantity-control">
                  <button
                    className="btn-decrease"
                    onClick={() => handleDecrease(product)}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    className="quantity-input"
                    value={product.quantity || 1}
                    onChange={(e) => handleInputChange(product, e.target.value)}
                  />
                  <button
                    className="btn-increase"
                    onClick={() => handleIncrease(product)}
                  >
                    +
                  </button>
                  <Button
                    className="button-order"
                    onClick={() => handleOrderClick(product)} // Open modal to order
                  >
                    Đặt hàng
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal for collecting user data */}
      <Modal
        show={isModalOpen}
        onHide={() => setIsModalOpen(false)} // Close the modal
        centered
        dialogClassName="custom-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Thông tin tư vấn</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            {/* Left Column: Form */}
            <div className="col-md-8">
              <Form>
                <Form.Group controlId="formName">
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChangeModal}
                    placeholder="Họ và tên *"
                  />
                </Form.Group>
                <Form.Group controlId="formPhone">
                  <Form.Control
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChangeModal}
                    placeholder="Số điện thoại *"
                  />
                </Form.Group>
                <Form.Group controlId="formYear">
                  <Form.Control
                    type="text"
                    name="year"
                    // value={formData.year}
                    onChange={handleInputChangeModal}
                    placeholder="Năm sinh"
                  />
                </Form.Group>
                <div className="row">
                  <div className="col-md-6">
                    <Form.Group controlId="formCity">
                      <Form.Control
                        as="select"
                        name="city"
                        // value={formData.city}
                        onChange={handleInputChangeModal}
                      >
                        <option>Chọn tỉnh/thành *</option>
                        <option value="Hanoi">Hà Nội</option>
                        <option value="HCMC">TP.HCM</option>
                        <option value="Danang">Đà Nẵng</option>
                      </Form.Control>
                    </Form.Group>
                  </div>
                  <div className="col-md-6">
                    <Form.Group controlId="formDistrict">
                      <Form.Control
                        as="select"
                        name="district"
                        // value={formData.district}
                        onChange={handleInputChangeModal}
                      >
                        <option>Chọn quận/huyện *</option>
                        <option value="District1">Quận 1</option>
                        <option value="District2">Quận 2</option>
                        <option value="District3">Quận 3</option>
                      </Form.Control>
                    </Form.Group>
                  </div>
                </div>
                <Form.Group controlId="formProvince">
                  <Form.Control
                    as="select"
                    name="province"
                    // value={formData.province}
                    onChange={handleInputChangeModal}
                  >
                    <option>Chọn phường/xã *</option>
                    <option value="Ward1">Phường 1</option>
                    <option value="Ward2">Phường 2</option>
                    <option value="Ward3">Phường 3</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="formCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="* Bằng việc đăng ký tư vấn miễn phí, tôi cam kết và đồng ý với quy tắc bảo mật, quy tắc sử dụng của Fungaris"
                    name="agree"
                    // value={formData.agree}
                    onChange={handleInputChangeModal}
                    // custom
                  />
                </Form.Group>
                <Button className="btn-primary" onClick={handleSubmit}>
                  Gửi thông tin
                </Button>
              </Form>
            </div>

            {/* Right Column: Product Image */}
            <div className="col-md-4 d-flex justify-content-center align-items-center">
              <img
                src={imagePaths.product2}
                alt="Product"
                style={{
                  maxWidth: "100%",
                  borderRadius: "10px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
              />
            </div>
          </div>
        </Modal.Body>
      </Modal>
      {showToast && (
        <Toast
          className="order-toast"
          onClose={() => setShowToast(false)}
          bg="success"
          delay={3000}
          autohide
        >
          <Toast.Body>Đặt hàng thành công!</Toast.Body>
        </Toast>
      )}
    </div>
  );
};

export default CartPage;
