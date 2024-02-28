import workHero from './assets/works/F779JH2117.jpg';
import NavBar from './components/nav/NavBar';
import Intro from './components/aside/Intro';
import SearchMenu from './components/aside/SearchMenu';
import MapMenu from './components/aside/MapMenu';
import WorkList from './components/main/WorkList';
import SearchPanel from './components/searchPanel/SearchPanel';
import { useState } from 'react';
import ButtonBar from './components/aside/ButtonBar/ButtonBar';

export const App = () => {
  const [isSearchPanelOn, setSearchPanelOn] = useState(false);
  const toggleSearchPanel = () => setSearchPanelOn(!isSearchPanelOn);
  return (
    <>
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
      {/*<img id="guide" src={guide} />*/}
      <section id="workModule">
        <img id="workHero" src={workHero} />
        <div id="workInfo">
          <h1 id="workTitle">The Church at Auvers</h1>
          <p id="workDateLocation">June 1890 • Musée d'Orsay, Paris</p>
          <div id="workPrices">
            <form>
              <hr></hr>
              <input type="radio" id="html" name="fav_language" value="HTML" />
              <label htmlFor="html">
                <span className="bold">94 x 74cm</span> Original size
                <span className="right">£23.19</span>
              </label>
              <hr></hr>
              <input type="radio" name="fav_language" value="CSS" />
              <label htmlFor="css">
                <span className="bold">47 x 37cm</span> Half size
                <span className="right">£17.39</span>
              </label>
              <hr></hr>
              <input type="radio" name="fav_language" value="JavaScript" />
              <label htmlFor="javascript">
                <span className="bold">23.5 x 18.5cm</span> Quarter size
                <span className="right">£13.04</span>
              </label>
              <hr></hr>
              <input type="radio" name="fav_language" value="JavaScript" />
              <label htmlFor="javascript">
                <span className="bold">14.8 x 10.5cm</span> Postcard
                <span className="right">£20.00</span>
              </label>
              <hr></hr>
            </form>
            <svg id="bully">
              <path
                d="M36.9,23.3H34v-2.9c0-1-0.8-1.9-1.9-1.9c-1,0-1.9,0.8-1.9,1.9v2.9h-2.9c-1,0-1.9,0.8-1.9,1.9c0,1,0.8,1.9,1.9,1.9h2.9V30
	c0,1,0.8,1.9,1.9,1.9c1,0,1.9-0.8,1.9-1.9v-2.9h2.9c1,0,1.9-0.8,1.9-1.9C38.7,24.2,37.9,23.3,36.9,23.3z M30,0C13.4,0,0,13.4,0,30
	s13.4,30,30,30s30-13.4,30-30S46.6,0,30,0z M21.4,50.7c-2.1,0-3.8-1.7-3.8-3.8s1.7-3.8,3.8-3.8s3.8,1.7,3.8,3.8
	C25.2,49,23.5,50.7,21.4,50.7z M42.2,50.7c-2.1,0-3.8-1.7-3.8-3.8s1.7-3.8,3.8-3.8S46,44.9,46,47C46,49,44.3,50.7,42.2,50.7z
	 M47.8,19.1L44,32.4c-0.2,0.8-1,1.4-1.8,1.4H22.5l0.6,3.8h21.1c1,0,1.9,0.8,1.9,1.9c0,1-0.8,1.9-1.9,1.9H21.4
	c-0.9,0-1.7-0.7-1.9-1.6l-1.1-7.4c0-0.1,0-0.1,0-0.2l-2-13.2c0-0.1,0-0.2,0-0.2l-0.3-2h-4c-1,0-1.9-0.8-1.9-1.9c0-1,0.8-1.9,1.9-1.9
	h5.7c0.9,0,1.7,0.7,1.9,1.6l0.3,2.2h26c0.6,0,1.2,0.3,1.5,0.8C47.8,17.9,48,18.6,47.8,19.1z"
              />
            </svg>
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
        </div>
      </section>
    </>
  );
};
