import SearchBar from './SearchBar';
import ButtonBar from '../Buttons/ButtonBar';

const SearchMenu = () => {
  return (
    <div className="searchMenu">
      <SearchBar />
      <ButtonBar buttonType="portrait" label="Portrait" />
      <ButtonBar buttonType="landscape" label="Landscape" />
      <ButtonBar buttonType="stillLife" label="Still life" />
    </div>
  );
};

export default SearchMenu;
