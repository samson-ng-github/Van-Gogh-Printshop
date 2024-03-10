import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchButton from '../Buttons/SearchButton';
import { updateKeyword, searchWorks } from '../../redux/worksSlice';

const SearchBar = () => {
  const [timeOutId, setTimeOutId] = useState(null);
  const { searchKeyword } = useSelector((store) => store.works);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(updateKeyword(e.target.value));

    setTimeOutId(
      setTimeout(() => {
        console.log('search');
        dispatch(searchWorks());
      }, 1000)
    );
  };

  useEffect(() => {
    return () => clearTimeout(timeOutId);
  }, [timeOutId]);

  return (
    <form className="searchBar">
      <input
        type="text"
        className="searchField"
        placeholder="Search"
        value={searchKeyword}
        onChange={handleChange}
      />
      <SearchButton />
    </form>
  );
};

export default SearchBar;
