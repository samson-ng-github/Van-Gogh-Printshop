import LoginButton from './LoginButton';
import CartButton from './CartButton';
import NavBarSearchButton from './NavBarSearchButton';

const NavBar = ({ toggleSearchPanel }) => {
  return (
    <nav>
      <div id="navIcons">
        <NavBarSearchButton onClick={toggleSearchPanel} />
        <CartButton />
        <LoginButton />
      </div>
    </nav>
  );
};

export default NavBar;
