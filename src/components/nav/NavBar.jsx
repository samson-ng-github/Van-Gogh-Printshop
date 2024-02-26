import LoginButton from './LoginButton';
import CartButton from './CartButton';
import NavBarSearchButton from './NavBarSearchButton';

const NavBar = () => {
  return (
    <nav>
      <div id="navIcons">
        <NavBarSearchButton />
        <CartButton />
        <LoginButton />
      </div>
    </nav>
  );
};

export default NavBar;
