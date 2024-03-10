import { useSelector, useDispatch } from 'react-redux';
import MagnifierButton from './MagnifierButton';
import ClearButton from './ClearButton';
import { clearSearch } from '../../redux/worksSlice';

const SearchButton = () => {
  const { searchFilter, searchKeyword } = useSelector((store) => store.works);
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(clearSearch());
  };

  return (
    <>
      {searchFilter || searchKeyword ? (
        <ClearButton onclick={handleChange} />
      ) : (
        <MagnifierButton />
      )}
    </>
  );
};

export default SearchButton;
