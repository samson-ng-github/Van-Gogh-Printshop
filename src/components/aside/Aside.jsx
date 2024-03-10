import { useDispatch } from 'react-redux';
import { shuffleWorks } from '../../redux/worksSlice';
import logo from '../../assets/logo.jpg';
import SearchMenu from './SearchMenu';
import MapMenu from './MapMenu';

const Aside = ({ randomizeWorkList }) => {
  const dispatch = useDispatch();

  return (
    <aside id="aside">
      <img id="logo" src={logo} onClick={() => dispatch(shuffleWorks())} />
      <p id="introText">
        Discover our exclusive poster collection of Vincent’s 77 paintings
        painting in the last three months of his life in the village of
        Auvers-sur-Oise.
      </p>
      <SearchMenu />
      {/*<MapMenu />*/}
    </aside>
  );
};

export default Aside;
