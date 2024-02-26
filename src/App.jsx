import './App.css';
import guide from './assets/template-iphone.jpg';
import NavBar from './components/nav/NavBar';
import Intro from './components/aside/Intro';
import SearchMenu from './components/aside/SearchMenu';
import MapMenu from './components/aside/MapMenu';
import WorkList from './components/main/WorkList';

const App = () => {
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
      <NavBar />
    </>
  );
};

export default App;
