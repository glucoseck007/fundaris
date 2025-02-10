import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../CustomCard/custom_card.scss";
import { useCart } from "../../pages/Cart/CartProvider";

interface Props {
  image?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  showButton?: boolean;
  price?: string;
}

function CustomCard(props: Props) {
  // Access addToCart from the CartContext
  const { addToCart } = useCart();

  // Handle adding the product to the cart
  const handleAddToCart = () => {
    // Ensure the product has valid values before adding it to the cart
    const product = {
      image: props.image || "", // Provide a default value if undefined
      title: props.title || "Untitled", // Default title
      subtitle: props.subtitle || "No price available", // Default subtitle
      description: props.description || "No description available", // Default description
      price: props.price || "249000",
    };

    addToCart(product); // Call the addToCart function
  };

  return (
    <Card className="card">
      {props.image && (
        <Card.Img variant="top" src={props.image} alt={props.title} />
      )}
      <Card.Body className="card-body">
        {props.title && (
          <Card.Title className="title">{props.title}</Card.Title>
        )}
        {props.subtitle && (
          <Card.Text className="title">{props.subtitle}</Card.Text>
        )}
        {props.description && (
          <Card.Text className="title">{props.description}</Card.Text>
        )}
        {props.showButton && (
          <Button className="button-card" onClick={handleAddToCart}>
            THÊM VÀO GIỎ HÀNG
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default CustomCard;
