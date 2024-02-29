import LoginButton from './LoginButton';
import CartButton from './CartButton';
import NavBarSearchButton from './NavBarSearchButton';

const NavBar = ({ toggleSearchPanel, toggleCartPanel }) => {
  return (
    <nav>
      <div id="navIcons">
        <NavBarSearchButton onClick={toggleSearchPanel} />
        <CartButton onClick={toggleCartPanel} />
        <LoginButton />
      </div>
    </nav>
  );
};

export default NavBar;
