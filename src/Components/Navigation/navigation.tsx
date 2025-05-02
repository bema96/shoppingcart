import { NavLink } from "react-router-dom"

const Navigation: React.FC = () => {

    return (
        <ul>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/Cart">Cart</NavLink>
            <NavLink to="/Checkout">Checkout</NavLink>
        </ul>
    )
}

export default Navigation;