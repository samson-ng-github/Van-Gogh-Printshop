import img from '../../assets/workThumbs/2802032.jpg';
import PlusButton from '../Buttons/PlusButton';
import MinusButton from '../Buttons/MinusButton';
import BinButton from '../Buttons/BinButton';

const CartItem = () => {
  return (
    <li>
      <img src={img}></img>
      <div className="itemInfo">
        <p className="itemTitle">
          Village Street and Steps in Auvers with Two Figures
        </p>
        <hr />
        <span className="itemSize">94 x 74cm</span>
        <span className="itemPrice">£23.19</span>
        <hr />
        <div className="itemCount">
          <span className="itemCountText">2</span>
          <PlusButton />
          <MinusButton />
        </div>
        <BinButton />
      </div>
    </li>
  );
};
export default CartItem;
