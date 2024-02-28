import './App.css';
import guide from './assets/template-ipad-work.jpg';
import workHero from './assets/works/F779JH2117.jpg'; //F789JH2006
import NavBar from './components/nav/NavBar';
import Intro from './components/aside/Intro';
import SearchMenu from './components/aside/SearchMenu';
import MapMenu from './components/aside/MapMenu';
import WorkList from './components/main/WorkList';
import SearchPanel from './components/searchPanel/SearchPanel';
import { useState } from 'react';
import AddToCartButton from './AddToCartButton';
import ButtonBar from './components/aside/ButtonBar/ButtonBar';
import CrossButton from './CrossButton';

const App = () => {
  const [isSearchPanelOn, setSearchPanelOn] = useState(false);
  const [isWorkModuleOn, setWorkModuleOn] = useState(false);
  const toggleSearchPanel = () => setSearchPanelOn(!isSearchPanelOn);
  const toggleWorkModule = () => setWorkModuleOn(!isWorkModuleOn);
  return (
    <>
      <div id="container">
        <aside>
          <Intro />
          <SearchMenu />
          <MapMenu />
        </aside>
        <main>
          <WorkList toggleWorkModule={toggleWorkModule} />
        </main>
      </div>
      <div
        className={'shadeOff ' + (isSearchPanelOn ? 'shadeOn' : '')}
        onClick={toggleSearchPanel}
      ></div>
      <SearchPanel isSearchPanelOn={isSearchPanelOn} />
      <NavBar toggleSearchPanel={toggleSearchPanel} />
      {/*<img id="guide" src={guide} />*/}
      <section
        className={'workModuleOn ' + (isWorkModuleOn ? 'workModuleOff' : '')}
      >
        <div id="workModule">
          <img id="workHero" src={workHero} />
          <div id="workInfo">
            <h1 id="workTitle">The Church at Auvers</h1>
            <p id="workDateLocation">June 1890 • Musée d'Orsay, Paris</p>
            <div id="workPrices">
              <form>
                <hr></hr>
                <input
                  type="radio"
                  id="html"
                  name="fav_language"
                  value="HTML"
                />
                <label htmlFor="html">
                  <span className="size">94 x 74cm</span>
                  <span className="type">Original size</span>
                  <span className="price">£23.19</span>
                </label>
                <hr></hr>
                <input type="radio" name="fav_language" value="CSS" />
                <label htmlFor="css">
                  <span className="size">47 x 37cm</span>
                  <span className="type">Half size</span>
                  <span className="price">£17.39</span>
                </label>
                <hr></hr>
                <input type="radio" name="fav_language" value="JavaScript" />
                <label htmlFor="javascript">
                  <span className="size">23.5 x 18.5cm</span>
                  <span className="type">Quarter size</span>
                  <span className="price">£13.04</span>
                </label>
                <hr></hr>
                <input type="radio" name="fav_language" value="JavaScript" />
                <label htmlFor="javascript">
                  <span className="size">14.8 x 10.5cm</span>
                  <span className="type">Postcard</span>
                  <span className="price">£20.00</span>
                </label>
                <hr></hr>
              </form>
            </div>
            <AddToCartButton />
            <div id="workMapMenu">
              <p>
                Would you like to see the real paintings?
                <br />
                Find out where they are here:
              </p>

              <div id="mapButtonBar">
                <ButtonBar buttonName="MapButton" label="Map view" />
              </div>
            </div>
          </div>
          <CrossButton
            id="workModuleClose"
            toggleWorkModule={toggleWorkModule}
          />
        </div>
      </section>
    </>
  );
};

export default App;
