import ButtonBar from '../Buttons/ButtonBar';

const MapMenu = () => {
  return (
    <div className="mapMenu">
      <p>Find out where the real paintings are here:</p>
      <div className="mapButtonBar">
        <ButtonBar buttonType="map" label="Map view" />
      </div>
    </div>
  );
};

export default MapMenu;
