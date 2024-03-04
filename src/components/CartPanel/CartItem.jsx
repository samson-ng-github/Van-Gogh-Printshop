import { useDispatch } from 'react-redux';
import {
  increaseCartItem,
  decreaseCartItem,
  removeCartItem,
} from '../../redux/cartSlice';

import PlusButton from '../Buttons/PlusButton';
import MinusButton from '../Buttons/MinusButton';
import BinButton from '../Buttons/BinButton';

const CartItem = ({ id, src, name, size, price, amount }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <img src={src}></img>
      <div className="itemInfo">
        <p className="itemTitle">{name}</p>
        <hr />
        <span className="itemSize">{`${size} cm`}</span>
        <span className="itemPrice">{`£${price}`}</span>
        <hr />
        <div className="itemCount">
          <span className="itemCountText">{amount}</span>
          <PlusButton action={() => dispatch(increaseCartItem(id))} />
          <MinusButton
            action={() => {
              if (amount === 1) {
                dispatch(removeCartItem(id));
                return;
              }
              dispatch(decreaseCartItem(id));
            }}
          />
        </div>
        <BinButton action={() => dispatch(removeCartItem(id))} />
      </div>
    </li>
  );
};
export default CartItem;
