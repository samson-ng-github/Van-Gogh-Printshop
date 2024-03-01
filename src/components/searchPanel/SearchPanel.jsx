import SearchMenu from '../Aside/SearchMenu';
import MapMenu from '../Aside/MapMenu';
import CloseButton from '../Buttons/CloseButton';

const SearchPanel = ({ isSearchPanelOn, toggleSearchPanel }) => {
  return (
    <div
      className={'searchPanelOff ' + (isSearchPanelOn ? 'searchPanelOn' : '')}
    >
      <SearchMenu />
      <MapMenu />
      <CloseButton onclick={toggleSearchPanel} />
    </div>
  );
};

export default SearchPanel;
