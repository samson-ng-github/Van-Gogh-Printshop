import { useDispatch } from 'react-redux';
import { openCartPanel, closeCartPanel } from '../../redux/cartSlice';
import {
  openSearchPanel,
  closeSearchPanel,
} from '../../redux/searchPanelSlice';
import { closeWorkPanel } from '../../redux/worksSlice';

import LoginButton from './LoginButton';
import CartButton from './CartButton';
import NavBarSearchButton from './NavBarSearchButton';

const NavBar = () => {
  const dispatch = useDispatch();

  return (
    <nav>
      <div id="navIcons">
        <NavBarSearchButton
          action={() => {
            dispatch(openSearchPanel());
            dispatch(closeWorkPanel());
            dispatch(closeCartPanel());
          }}
        />
        <CartButton
          action={() => {
            dispatch(openCartPanel());
            dispatch(closeSearchPanel());
            dispatch(closeWorkPanel());
          }}
        />
        <LoginButton />
      </div>
    </nav>
  );
};

export default NavBar;
