import './App.css';
import guide from './assets/template-ipad.jpg';
import Intro from './components/aside/Intro';
import SearchMenu from './components/aside/SearchMenu';
import MapMenu from './components/aside/MapMenu';
import WorkList from './components/main/WorkList';

const App = () => {
  return (
    <>
      {/*<img id="guide" src={guide} />*/}
      <nav />
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
    </>
  );
};

export default App;
