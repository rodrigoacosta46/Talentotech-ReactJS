import InputV1 from "../components/InputV1/InputV1";
import { Container, Row, Col, Spinner, Button, Stack } from "react-bootstrap";
import { useEffect, useState } from "react";
import Card from "../components/Card/Card.jsx";
import { useInView } from "react-intersection-observer";
import { toast, ToastContainer } from "react-toastify";
import { useUserContext } from "../Context/UserContext.jsx";
import { FaCartShopping } from "react-icons/fa6";
import Dialog from "../components/Dialog/Dialog.jsx";
import { FaMinus, FaTrash } from "react-icons/fa";
import Title from "../components/Title/Title.jsx";
import { Helmet } from "react-helmet-async";

export default function Store() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [hasMore, setHasMore] = useState(true);
  const { user, setUser, addCart, deleteSingle, emptyCart } = useUserContext();

  const notify = (msg, type = "success") => {
    toast[type](msg);
  };

  const { ref: loader } = useInView({
    onChange: (isIn) => {
      if (isIn && hasMore && search === "") {
        setPage((prev) => prev + 1);
      }
    },
  });

  useEffect(() => {
    setPage(1);
    setHasMore(true);
  }, [search]);

  useEffect(() => {
    const url = new URL(
      "https://692fcc6f778bbf9e006e845f.mockapi.io/dbdz/products"
    );
    url.searchParams.append("limit", 10);
    url.searchParams.append("page", page);

    if (search.trim() !== "") {
      url.searchParams.append("name", search);
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (!Array.isArray(data)) {
          setProducts([]);
          setHasMore(false);
          return;
        }

        if (page === 1) {
          setProducts(data);
        } else {
          setProducts((prev) => [...prev, ...data]);
        }

        if (data.length < 10) setHasMore(false);
      })
      .catch((err) => {
        console.error(err);
        setHasMore(false);
      });
  }, [page, search]);

  const handleCart = (product) => {
    addCart(product);
    notify(`${product.name} se ha añadido a tu carrito`);
  };

  const managePayment = () => {
    if (!user.auth) {
      notify("Debes logearte para mejorar tu equipo", "error");
      return;
    }

    if (user.cart.length != 0) {
      let sum = user.cart.reduce((acc, item) => acc + Number(item.price), 0);
      if (sum > user.coins) {
        notify(`No tenes monedas suficientes: $${sum}`, "error");
        return;
      }
      setUser((prev) => ({ ...prev, coins: user.coins - sum }));
      notify(`Compra por $${sum} efectuada`);
    }
  };

  return (
    <>
      <Helmet>
        <title>Tienda</title>
        <meta
          name="description"
          content="Mejora tu equipamiento, incrementa tu poder para vencer"
        />
      </Helmet>
      <Title content="tienda" />
      <Container fluid className="p-4">
        <InputV1
          id="searchbar"
          type="text"
          placeholder="Buscar..."
          width="400px"
          className="d-flex justify-content-end"
          onChange={(e) => setSearch(e.target.value)}
        />

        <Row className="g-4 mt-3">
          {products.map((p, i) => (
            <Col key={`${p.id}-${i}`} xs={12} sm={6} md={4} xl={3}>
              <Card {...p} onClick={() => handleCart(p)} />
            </Col>
          ))}

          {hasMore && search === "" && (
            <Col xs={12} className="d-flex justify-content-center">
              <Spinner ref={loader} animation="border" variant="warning" />
            </Col>
          )}
        </Row>
      </Container>
      <Dialog
        btnBg="#dc3545"
        buttonTxt={<FaCartShopping />}
        className="position-fixed end-0 bottom-0 rounded-circle fs-1 px-3 py-2 m-4 z-1"
        width="800px"
      >
        <Stack className="overflow-y-auto overflow-x-hidden h-100" gap={2}>
          <Title content="carrito" className="fs-2" />
          <div className="overflow-auto flex-grow-1 h-100 gap-4">
            {user.cart.map((p, i) => (
              <Row
                key={"cart-" + i}
                className="w-100 rounded-2 my-2"
                style={{ height: "4rem" }}
              >
                <Col xs={2} className="h-100">
                  <img src={p.img} className="w-100 h-100 object-fit-cover" />
                </Col>
                <Col xs={8}>{p.name}</Col>
                <Col
                  xs={2}
                  className="d-flex justify-content-center align-items-center"
                >
                  <Button variant="danger" onClick={() => deleteSingle(p)}>
                    <FaMinus />
                  </Button>
                </Col>
              </Row>
            ))}
          </div>
          <Stack direction="horizontal" gap={4}>
            <Button
              variant="dark"
              className="d-inline-block w-100 fs-4"
              onClick={managePayment}
            >
              Pagar
            </Button>
            <Button
              variant="danger"
              className="d-inline-block fs-4"
              onClick={emptyCart}
            >
              <FaTrash />
            </Button>
          </Stack>
        </Stack>
      </Dialog>
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}
