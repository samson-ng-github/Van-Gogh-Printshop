import logo from '../../assets/logo.jpg';

const Intro = ({ randomizeWorkList }) => {
  return (
    <div id="intro">
      <img id="logo" src={logo} onClick={randomizeWorkList} />
      <p>
        Discover our exclusive poster collection of Vincent’s 77 paintings
        painting in the last three months of his life in the village of
        Auvers-sur-Oise.
      </p>
    </div>
  );
};

export default Intro;
