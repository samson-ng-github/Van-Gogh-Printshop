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
  const [workList, setWorkList] = useState([]);
  const randomizeWorkList = () => {
    setWorkList([...workData].sort(() => Math.random() - 0.5));
  };
  useEffect(() => {
    randomizeWorkList();
  }, []);

  return (
    <>
      <div id="container">
        <Aside randomizeWorkList={randomizeWorkList} />
        <WorkList workList={workList} />
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
