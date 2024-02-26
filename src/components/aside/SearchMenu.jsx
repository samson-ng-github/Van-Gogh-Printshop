import SearchBar from './SearchBar/SearchBar';
import ButtonBar from './ButtonBar/ButtonBar';

const SearchMenu = () => {
  return (
    <>
      <SearchBar />
      <div id="filters">
        <ButtonBar buttonName="PortraitButton" label="Portrait" />
        <ButtonBar buttonName="LandscapeButton" label="Landscape" />
        <ButtonBar buttonName="StillLifeButton" label="Still life" />
      </div>
    </>
  );
};

export default SearchMenu;
