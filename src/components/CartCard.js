import { useCart } from "../context/CartContext";
import "./CartCard.css";

export const CartCard = ({product}) => {
  const {removeProduct} = useCart()
  const {name, price, image} = product;

  return (
      <div className="cartCard">
        <img src={image} alt={name} />
        <p className="productName">{name}</p>
        <p className="productPrice">${price}</p>
        <button onClick={() => removeProduct(product)}>Remove</button>
      </div>
  )
}
