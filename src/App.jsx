import './App.css';
import { useState, useEffect } from 'react';
import NavBar from './components/nav/NavBar';
import Intro from './components/aside/Intro';
import SearchMenu from './components/aside/SearchMenu';
import MapMenu from './components/aside/MapMenu';
import WorkList from './components/main/WorkList';
import SearchPanel from './components/searchPanel/SearchPanel';
import WorkPanel from './components/workPanel/WorkPanel';
import workData from './data/workData.json';

const App = () => {
  const [isSearchPanelOn, setSearchPanelOn] = useState(false);
  const [isWorkModuleOn, setWorkModuleOn] = useState(false);
  const [workList, setWorkList] = useState([]);
  const toggleSearchPanel = () => {
    setSearchPanelOn(!isSearchPanelOn);
    setWorkModuleOn(false);
  };
  const toggleWorkModule = () => {
    setWorkModuleOn(!isWorkModuleOn);
    setSearchPanelOn(false);
  };

  const randomizeWorkList = () => {
    setWorkList([...workData].sort(() => Math.random() - 0.5));
  };

  const closeAll = () => {
    setWorkModuleOn(false);
    setSearchPanelOn(false);
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
          <WorkList workList={workList} toggleWorkModule={toggleWorkModule} />
        </main>
      </div>
      <div
        className={
          'shadeOff ' +
          (isSearchPanelOn ? 'shadeOnSearchPanel' : '') +
          (isWorkModuleOn ? 'shadeOnWorkModel' : '')
        }
      ></div>
      <SearchPanel
        isSearchPanelOn={isSearchPanelOn}
        toggleSearchPanel={toggleSearchPanel}
      />
      <WorkPanel
        isWorkModuleOn={isWorkModuleOn}
        toggleWorkModule={toggleWorkModule}
      />
      <NavBar toggleSearchPanel={toggleSearchPanel} />
    </>
  );
};

export default App;
