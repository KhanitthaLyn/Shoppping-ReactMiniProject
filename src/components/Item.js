import "./Item.css";
import {useCart} from "../context/CartContext";
export default function Item(props) {
  const { id, name, price, image, quantity } = props;
  const {formatMoney,removeItem,addQuantity,subtractQuantity} = useCart();
  return (
    <div className="card">
      <img src={image} alt={id} />
      <div className="product">
        <p className="name">Name : {name}</p>
        <p className="price">Price : {formatMoney(price)} Baht</p>
      </div>
      <div className="quantity">
        <button onClick={()=>addQuantity(id)}>+</button>
        <input type="text" value={quantity} disabled />
        <button onClick={()=>subtractQuantity(id)}>-</button>
      </div>
      <div className="total-price">{formatMoney(quantity * price)}</div>
      <button onClick={()=>removeItem(id)}>delete</button>
    </div>
  );
}
