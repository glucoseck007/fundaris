import { Link } from "react-scroll"; // For smooth scrolling to sections
import imagePaths from "../../constants/path.tsx";
import "../Header/header.scss";
import "../../styles/global.scss";
import { Outlet, Link as RouterLink } from "react-router-dom";
import { useCart } from "../../pages/Cart/CartProvider.tsx";

function Header() {
  const { getCartItemCount } = useCart();

  return (
    <header className="header">
      <RouterLink to="/">
        <img
          className="logo"
          src={imagePaths.logo}
          alt="logo-fundaris"
          width={320}
          height={76}
        />
      </RouterLink>
      <nav className="navigation">
        <Link to="productIntro" smooth={true} duration={500} offset={15}>
          Sản phẩm
        </Link>
        <Link to="story" smooth={true} duration={500} offset={-70}>
          Câu chuyện thương hiệu
        </Link>
        {/* <Link to="collection" smooth={true} duration={500} offset={-70}>
          Bộ sưu tập
        </Link> */}
        {/* <Link to="vision" smooth={true} duration={500} offset={-70}>
          Tầm nhìn và sứ mệnh
        </Link> */}
        <Link to="info" smooth={true} duration={500} offset={-160}>
          Thông tin sản phẩm
        </Link>
        <RouterLink to="/cart">
          <img
            src={imagePaths.cart} // Assuming you have a cart icon in your imagePaths
            alt="Cart"
            width={40}
            height={40}
          />
          {getCartItemCount() > 0 && (
            <span className="cart-count">{getCartItemCount()}</span> // Display cart count
          )}
        </RouterLink>
      </nav>
      <Outlet />
    </header>
  );
}

export default Header;
