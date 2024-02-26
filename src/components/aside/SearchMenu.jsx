import SearchBar from './SearchBar/SearchBar';
import ButtonBar from './ButtonBar/ButtonBar';

const SearchMenu = () => {
  return (
    <div id="searchMenu">
      <SearchBar />
      <div id="filters">
        <ButtonBar buttonName="PortraitButton" label="Portrait" />
        <ButtonBar buttonName="LandscapeButton" label="Landscape" />
        <ButtonBar buttonName="StillLifeButton" label="Still life" />
      </div>
    </div>
  );
};

export default SearchMenu;
