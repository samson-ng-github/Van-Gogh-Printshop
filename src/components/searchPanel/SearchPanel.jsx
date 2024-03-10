import { useDispatch, useSelector } from 'react-redux';
import { closeSearchPanel } from '../../redux/searchPanelSlice';

import SearchMenu from '../Aside/SearchMenu';
import MapMenu from '../Aside/MapMenu';
import CloseButton from '../Buttons/CloseButton';

const SearchPanel = () => {
  const { isSearchPanelOn } = useSelector((store) => store.searchPanel);
  const dispatch = useDispatch();

  return (
    <div
      className={'searchPanelOff ' + (isSearchPanelOn ? 'searchPanelOn' : '')}
    >
      <SearchMenu />
      {/*<MapMenu />*/}
      <CloseButton action={() => dispatch(closeSearchPanel())} />
    </div>
  );
};

export default SearchPanel;
