import SearchButton from './SearchButton';

const SearchBar = () => {
  return (
    <form id="searchBar">
      <input type="text" id="searchField" name="search" placeholder="Search" />
      {/*<SearchButton style={{ top: '3px', right: '3px' }} />*/}
    </form>
  );
};

export default SearchBar;
