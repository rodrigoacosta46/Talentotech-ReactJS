import { FaCartPlus } from "react-icons/fa6";
import * as Styled from "./Card.styles.jsx";
import Dialog from "../Dialog/Dialog.jsx";

export default function Card({ img, name, description, price, damage, onClick }) {
  return (
    <Styled.Card>
      <Dialog buttonTxt="?" btnBg="#3d83b9" width="850px" height="500px" className="position-absolute end-0 me-2 fs-4">
        <h4>Descripcion del producto</h4>
        {description}
        <article className="fs-5 mt-4 overflow-visible">
           <Styled.Attr>Daño:</Styled.Attr>&nbsp;{damage}
        </article>
        <article className="fs-5 mt-4 overflow-visible">
            <Styled.Attr>Precio:</Styled.Attr>&nbsp;${price}
        </article>
      </Dialog>
      <Styled.Img variant="top" src={img} />
      <Styled.Body $price={price}>
        <Styled.Title>{name}</Styled.Title>
        <Styled.Button onClick={onClick} className="mt-3">
            <FaCartPlus />
        </Styled.Button>
      </Styled.Body>
    </Styled.Card>
  );
}
