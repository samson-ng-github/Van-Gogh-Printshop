import './App.css';
import { useState, useEffect } from 'react';
import workData from './data/workData.json';
import NavBar from './components/nav/NavBar';
import Intro from './components/aside/Intro';
import SearchMenu from './components/aside/SearchMenu';
import MapMenu from './components/aside/MapMenu';
import WorkList from './components/main/WorkList';
import SearchPanel from './components/SearchPanel/SearchPanel';
import WorkPanel from './components/WorkPanel/WorkPanel';
import CartPanel from './components/CartPanel/CartPanel';

import guide from './assets/template-ipad-cart.jpg';

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
    console.log('cart');
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
        <aside>
          <Intro randomizeWorkList={randomizeWorkList} />
          <SearchMenu />
          <MapMenu />
        </aside>
        <main>
          <WorkList workList={workList} toggleWorkPanel={toggleWorkPanel} />
        </main>
      </div>
      <NavBar
        toggleSearchPanel={toggleSearchPanel}
        toggleCartPanel={toggleCartPanel}
      />
      <div
        className={
          'shadeOff ' +
          (isSearchPanelOn ? 'shadeOnSearchPanel' : '') +
          (isWorkPanelOn || isCartPanelOn ? 'shadeOnWorkModel' : '')
        }
      ></div>
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
