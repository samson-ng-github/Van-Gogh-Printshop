import CartItem from './CartItem';
import CartTotal from './CartTotal';
import CheckoutButton from '../Buttons/CheckoutButton';
import CloseButton from '../Buttons/CloseButton';

const CartPanel = ({ isCartPanelOn, toggleCartPanel }) => {
  return (
    <section className={'cartPanelOn ' + (isCartPanelOn ? 'cartPanelOff' : '')}>
      <div id="cartPanel">
        <h1 id="cartTitle">Shopping cart</h1>
        <ul id="cartItems">
          <CartItem />
          <CartItem />
        </ul>
        <CartTotal />
        <CheckoutButton />
        <CloseButton onclick={toggleCartPanel} />
      </div>
    </section>
  );
};

export default CartPanel;
