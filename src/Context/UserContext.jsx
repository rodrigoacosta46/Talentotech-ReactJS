import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";

const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState({
    id: "",
    name: "",
    password: "",
    role: "user",
    coins: 0,
    damage: 1000,
    auth: false,
    cart: [],
  });
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const authToken = localStorage.getItem("authToken");

    if (storedUser && authToken) {
      const userData = JSON.parse(storedUser);
      setUser({
        ...userData,
        password: "",
        auth: true,
        damage: 1000,
        cart: JSON.parse(userData.cart),
      });
    }
  }, []);

  const register = (name, pass) => {
    fetch("https://692fcc6f778bbf9e006e845f.mockapi.io/dbdz/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        password: pass,
        role: "user",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        login(data);
      })
      .catch((res) => console.log(res));
  };

  const login = (newUser) => {
    localStorage.setItem("authToken", `token-${newUser.name}`);
    localStorage.setItem("user", JSON.stringify({ ...newUser, cart: [] }));

    navigate("/");
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    let storedUser = JSON.parse(localStorage.getItem("user"));
    localStorage.setItem(
      "user",
      JSON.stringify({ ...storedUser, coins: user.coins })
    );
    window.location.reload();
  };

  const addCart = (product) => {
    console.log(user, product);
    if (!user.cart.some((p) => p.id == product.id)) {
      setUser((prev) => {
        let newCart = prev.cart.concat(product);
        localStorage.setItem(
          "user",
          JSON.stringify({ ...prev, cart: JSON.stringify(newCart) })
        );
        return { ...prev, cart: newCart };
      });
    }
  };

  const deleteSingle = (product) => {
    setUser((prev) => {
      let filter = user.cart.filter((p) => p.id != product.id);
      localStorage.setItem(
        "user",
        JSON.stringify({ ...prev, cart: JSON.stringify(filter) })
      );
      return {
        ...prev,
        cart: filter,
      };
    });
  };

  const emptyCart = () => {
    setUser((prev) => {
      localStorage.setItem("user", JSON.stringify({ ...prev, cart: [] }));
      return { ...prev, cart: [] };
    });
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        login,
        register,
        logout,
        addCart,
        deleteSingle,
        emptyCart,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export const useUserContext = () => useContext(UserContext);
