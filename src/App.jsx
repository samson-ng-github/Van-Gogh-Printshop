import './App.css';
import { useState, useEffect } from 'react';
import workData from './data/workData.json';
import NavBar from './components/NavBar/NavBar';
import Aside from './components/Aside/Aside';
import WorkList from './components/WorkList/WorkList';
import SearchPanel from './components/SearchPanel/SearchPanel';
import WorkPanel from './components/WorkPanel/WorkPanel';
import CartPanel from './components/CartPanel/CartPanel';
import Shade from './components/Shade/Shade';

const App = () => {
  const [isSearchPanelOn, setSearchPanelOn] = useState(false);
  const [isWorkPanelOn, setWorkPanelOn] = useState(false);
  const [isCartPanelOn, setCartPanelOn] = useState(false);
  const [workList, setWorkList] = useState([]);
  const toggleSearchPanel = () => {
    setSearchPanelOn(!isSearchPanelOn);
    setWorkPanelOn(false);
    setCartPanelOn(false);
  };
  const toggleWorkPanel = () => {
    setWorkPanelOn(!isWorkPanelOn);
    setSearchPanelOn(false);
    setCartPanelOn(false);
  };
  const toggleCartPanel = () => {
    setCartPanelOn(!isCartPanelOn);
    setWorkPanelOn(false);
    setSearchPanelOn(false);
  };

  const randomizeWorkList = () => {
    setWorkList([...workData].sort(() => Math.random() - 0.5));
  };

  useEffect(() => {
    // Update the document title using the browser API
    randomizeWorkList();
  }, []);

  return (
    <>
      <div id="container">
        <Aside randomizeWorkList={randomizeWorkList} />
        <WorkList workList={workList} toggleWorkPanel={toggleWorkPanel} />
      </div>
      <NavBar
        toggleSearchPanel={toggleSearchPanel}
        toggleCartPanel={toggleCartPanel}
      />
      <Shade
        isSearchPanelOn={isSearchPanelOn}
        isWorkPanelOn={isWorkPanelOn}
        isCartPanelOn={isCartPanelOn}
      />
      <SearchPanel
        isSearchPanelOn={isSearchPanelOn}
        toggleSearchPanel={toggleSearchPanel}
      />
      <WorkPanel
        isWorkPanelOn={isWorkPanelOn}
        toggleWorkPanel={toggleWorkPanel}
      />
      <CartPanel
        isCartPanelOn={isCartPanelOn}
        toggleCartPanel={toggleCartPanel}
      />
    </>
  );
};

export default App;
