import ButtonBar from '../aside/ButtonBar/ButtonBar';

const WorkPanelMapMenu = () => {
  return (
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
  );
};

export default WorkPanelMapMenu;
