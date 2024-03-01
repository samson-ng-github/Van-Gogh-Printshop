import SearchBar from './SearchBar';
import ButtonBar from '../Buttons/ButtonBar';

const SearchMenu = () => {
  return (
    <div className="searchMenu">
      <SearchBar />
      <ButtonBar buttonType="PortraitButton" label="Portrait" />
      <ButtonBar buttonType="LandscapeButton" label="Landscape" />
      <ButtonBar buttonType="StillLifeButton" label="Still life" />
    </div>
  );
};

export default SearchMenu;
