import "bootstrap/dist/css/bootstrap.min.css";
import "../src/styles/global.scss";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ProductIntroPage from "./pages/ProductIntroPage/ProductIntroPage";
import Header from "./component/Header/Header";
import VisionPage from "./pages/VisionPage/VisonPage";
import StoryPage from "./pages/StoryPage/StoryPage";
import Footer from "./component/Footer/Footer";
import ProductPage from "./pages/ProductPage/product_page";
import { CartProvider } from "./pages/Cart/CartProvider";
import CartPage from "./pages/Cart/CartPage";
import { ToastContainer } from "react-bootstrap";

function App() {
  return (
    <>
      <ToastContainer />
      <CartProvider>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/cart" element={<CartPage />}></Route>
          <Route path="productIntro" element={<ProductIntroPage />}></Route>
          <Route path="vision" element={<VisionPage />}></Route>
          <Route path="story" element={<StoryPage />}></Route>
          <Route path="info" element={<ProductPage />}></Route>
        </Routes>
        <Footer />
      </CartProvider>
    </>
  );
}

export default App;
