import './cart-dropdown.styles.scss'
import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'


const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem} />)}
                <Button>GO TO CHECKOUT</Button>
            </div>

        </div>
    )

}

export default CartDropdown;
