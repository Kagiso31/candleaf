import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const ShoppingCartContext = createContext({});

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};

export const ShoppingCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useLocalStorage("shopping-cart", []);

  // total cart quantity
  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  // quantity of single item
  //   const getItemQuantity = (id) => {
  //     return cartItems.find((item) => item.id === id)?.quantity || 0;
  //   };

  const addToCart = (id, quantity) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + quantity };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeFromCart = (id) => {
    return setCartItems((currItems) =>
      currItems.filter((item) => item.id !== id)
    );
  };

  const increaseCartQuantity = (id) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) != null) {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const decreaseCartQuantity = (id) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        // remove item if there is 1 left
        return currItems.filter((item) => item.id !== id);
      } else {
        // decrease quantity if item exists
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        addToCart,
        removeFromCart,
        cartItems,
        cartQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
