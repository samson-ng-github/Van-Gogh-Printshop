import { useDispatch, useSelector } from 'react-redux';
import {
  clearCart,
  calculateTotal,
  closeCartPanel,
} from '../../redux/cartSlice';
import { useState, useEffect } from 'react';

import CartItem from './CartItem';
import CheckoutButton from '../Buttons/CheckoutButton';
import CloseButton from '../Buttons/CloseButton';
import Pagination from './Pagination';

const CartPanel = () => {
  const {
    cartData,
    itemsPerPage,
    totalPages,
    currentPage,
    totalPrice,
    isCartPanelOn,
  } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  const firstItemIndex = (currentPage - 1) * itemsPerPage;
  const lastItemIndex = firstItemIndex + itemsPerPage;

  const cartList = [...cartData]
    .slice(firstItemIndex, lastItemIndex)
    .map((cartItem) => {
      return (
        <CartItem
          key={cartItem.id}
          id={cartItem.id}
          src={'/src/assets/workThumbs/' + cartItem.id.split(' ')[0] + '.jpg'}
          name={`${cartItem.name} (${cartItem.productType})`}
          size={cartItem.size}
          price={cartItem.productPrice}
          amount={cartItem.amount}
          productSize={cartItem.productSize}
        />
      );
    });

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartData]);

  return (
    <section className={'cartPanelOn ' + (isCartPanelOn ? 'cartPanelOff' : '')}>
      <div id="cartPanel">
        <h1 id="cartTitle">Shopping cart</h1>
        <Pagination totalPages={totalPages} itemsPerPage={itemsPerPage} />
        {!cartData.length ? (
          <p id="cartMessage">Your shopping cart is currently empty.</p>
        ) : (
          <>
            <ul id="cartItems">{cartList}</ul>
            <div id="cartSummery">
              <div id="clearCart" onClick={() => dispatch(clearCart())}>
                Clear cart
              </div>
              <div id="totalPrice">
                <span id="totalWord">Total</span>
                <span id="totalFigure">{`£${totalPrice}`}</span>
              </div>
            </div>
            <CheckoutButton />
          </>
        )}
        <CloseButton action={() => dispatch(closeCartPanel())} />
      </div>
    </section>
  );
};

export default CartPanel;
