import SearchBar from '../aside/SearchBar/SearchBar';
import ButtonBar from '../aside/ButtonBar/ButtonBar';

const SearchPanel = ({ isSearchPanelOn }) => {
  return (
    <div
      className={'searchPanelOff ' + (isSearchPanelOn ? 'searchPanelOn' : '')}
    >
      <SearchBar />
      <div id="filters">
        <ButtonBar buttonName="PortraitButton" label="Portrait" />
        <ButtonBar buttonName="LandscapeButton" label="Landscape" />
        <ButtonBar buttonName="StillLifeButton" label="Still life" />
      </div>
    </div>
  );
};

export default SearchPanel;
