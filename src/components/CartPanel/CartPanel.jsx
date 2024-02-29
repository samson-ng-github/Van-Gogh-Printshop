import CrossButton from './CrossButton';
import PlusButton from './PlusButton';
import MinusButton from './MinusButton';
import BinButton from './BinButton';
import img from '../../assets/workThumbs/2802032.jpg';

const CartPanel = ({ isCartPanelOn, toggleCartPanel }) => {
  return (
    <section className={'cartPanelOn ' + (isCartPanelOn ? 'cartPanelOff' : '')}>
      <div id="cartPanel">
        <h1 id="cartTitle">Shopping cart</h1>
        <ul id="cartItems">
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
          <li>
            <img src={img}></img>
            <div className="itemInfo">
              <p className="itemTitle">The Church at Auvers</p>
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
        </ul>
        <div id="total">
          <div id="totalTag">Total</div>
          <div id="totalPrice">£46.38</div>
        </div>
        <button id="checkout">Checkout</button>
        <CrossButton
          id="closeButton"
          toggleCartPanel={() => {
            console.log('click');
            toggleCartPanel();
          }}
        />
      </div>
    </section>
  );
};

export default CartPanel;
