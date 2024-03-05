import './App.css';
import NavBar from './components/NavBar/NavBar';
import Aside from './components/Aside/Aside';
import WorkList from './components/WorkList/WorkList';
import SearchPanel from './components/SearchPanel/SearchPanel';
import WorkPanel from './components/WorkPanel/WorkPanel';
import CartPanel from './components/CartPanel/CartPanel';
import Shade from './components/Shade/Shade';

const App = () => {
  return (
    <>
      <div id="container">
        <Aside />
        <WorkList />
        {/*<Checkbox />*/}
      </div>
      <NavBar />
      <Shade />
      <SearchPanel />
      <WorkPanel />
      <CartPanel />
    </>
  );
};

export default App;
