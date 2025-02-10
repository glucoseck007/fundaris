import React, { createContext, useContext, useState, ReactNode } from "react";

interface Product {
  price: string;
  image: string;
  title: string;
  subtitle: string;
  description?: string; // Thêm dòng này
  quantity?: number;
}

interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  clearCart: () => void; // Function to clear the entire cart
  updateQuantity: (product: Product, quantity: number) => void;
  getCartItemCount: () => number;
  getTotalPrice: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(
        (item) => item.title === product.title
      );
      if (existingProduct) {
        // If product already exists, increase its quantity
        return prevCart.map((item) =>
          item.title === product.title
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      }
      // Otherwise, add the product with an initial quantity of 1
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (product: Product) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.title !== product.title)
    );
  };

  const clearCart = () => {
    setCart([]); // Clears the entire cart
  };

  const updateQuantity = (product: Product, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.title === product.title ? { ...item, quantity } : item
      )
    );
  };

  const getCartItemCount = () => {
    return cart.reduce((total, product) => total + (product.quantity || 1), 0);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, product) => {
      const price = parseFloat(product.price.replace(/[^0-9.-]+/g, "")); // Remove non-numeric characters
      return total + price * (product.quantity || 1);
    }, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart, // Provide clearCart function
        updateQuantity,
        getCartItemCount,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
