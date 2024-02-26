import ButtonBar from './ButtonBar/ButtonBar';

const MapMenu = () => {
  return (
    <div id="mapMenu">
      <p>
        Would you like to see the real paintings? Find out where they are here:
      </p>
      <div id="mapButtonBar">
        <ButtonBar buttonName="MapButton" label="Map view" />
      </div>
    </div>
  );
};

export default MapMenu;
