import { useDispatch, useSelector } from 'react-redux';
import {
  calculateEach,
  calculateTotal,
  closeCartPanel,
} from '../../redux/cartSlice';
import { useEffect } from 'react';

import CartItem from './CartItem';
import CheckoutButton from '../Buttons/CheckoutButton';
import CloseButton from '../Buttons/CloseButton';

const CartPanel = () => {
  const { cartData, totalPrice, isCartPanelOn } = useSelector(
    (store) => store.cartPanel
  );
  const dispatch = useDispatch();

  const cartList = cartData.map((cartItem) => {
    return (
      <CartItem
        key={cartItem.id}
        id={cartItem.id}
        src={'/src/assets/workThumbs/' + cartItem.id + '.jpg'}
        name={cartItem.name}
        size={cartItem.size}
        price={cartItem.price}
        amount={cartItem.amount}
      />
    );
  });

  useEffect(() => {
    dispatch(calculateEach());
    dispatch(calculateTotal());
  }, [cartData]);

  return (
    <section className={'cartPanelOn ' + (isCartPanelOn ? 'cartPanelOff' : '')}>
      <div id="cartPanel">
        <h1 id="cartTitle">Shopping cart</h1>
        <ul id="cartItems">{cartList}</ul>
        <div id="cartTotal">
          <div id="total">Total</div>
          <div id="totalPrice">{`£${totalPrice}`}</div>
        </div>
        <CheckoutButton />
        <CloseButton action={() => dispatch(closeCartPanel())} />
      </div>
    </section>
  );
};

export default CartPanel;
