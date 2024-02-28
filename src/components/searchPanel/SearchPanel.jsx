import SearchBar from '../aside/SearchBar/SearchBar';
import ButtonBar from '../aside/ButtonBar/ButtonBar';
import CrossButton from './CrossButton';

const SearchPanel = ({ isSearchPanelOn, toggleSearchPanel }) => {
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
      <CrossButton id="workModuleClose" toggleSearchPanel={toggleSearchPanel} />
    </div>
  );
};

export default SearchPanel;
