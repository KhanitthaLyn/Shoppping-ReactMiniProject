import "./Header.css";
import { useCart } from "../context/CartContext";
export default function Header(){
    const {amount} = useCart()
    return(
        <header>
            <p>Shopping Application</p>
            <p>Shopping Basket : {amount}</p>
        </header>
    )
}