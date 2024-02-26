import './App.css';
import guide from './assets/template-iphone.jpg';
import NavBar from './components/nav/NavBar';
import Intro from './components/aside/Intro';
import SearchMenu from './components/aside/SearchMenu';
import MapMenu from './components/aside/MapMenu';
import WorkList from './components/main/WorkList';
import SearchPanel from './components/searchPanel/SearchPanel';
import { useState } from 'react';

const App = () => {
  const [isSearchPanelOn, setSearchPanelOn] = useState(false);
  const toggleSearchPanel = () => setSearchPanelOn(!isSearchPanelOn);
  return (
    <>
      <img id="guide" src={guide} />
      <div id="container">
        <aside>
          <Intro />
          <SearchMenu />
          <MapMenu />
        </aside>
        <main>
          <WorkList />
        </main>
      </div>
      <div
        className={'shadeOff ' + (isSearchPanelOn ? 'shadeOn' : '')}
        onClick={toggleSearchPanel}
      ></div>
      <SearchPanel isSearchPanelOn={isSearchPanelOn} />
      <NavBar toggleSearchPanel={toggleSearchPanel} />
    </>
  );
};

export default App;
