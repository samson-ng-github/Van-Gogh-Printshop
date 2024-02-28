import { useState } from 'react';
import PortraitButton from './PortraitButton';
import LandscapeButton from './LandscapeButton';
import StillLifeButton from './StillLifeButton';
import MapButton from './MapButton';

const ButtonBar = ({ id, buttonName, label }) => {
  const [highlight, setHighlight] = useState(false);
  const color = '#1f3279'; // Complimentary purple '#0132FF';

  const getButton = (buttonName) => {
    switch (buttonName) {
      case 'PortraitButton':
        return <PortraitButton style={highlight ? { fill: color } : {}} />;
        break;
      case 'LandscapeButton':
        return <LandscapeButton style={highlight ? { fill: color } : {}} />;
        break;
      case 'StillLifeButton':
        return <StillLifeButton style={highlight ? { fill: color } : {}} />;
        break;
      case 'MapButton':
        return <MapButton style={highlight ? { fill: color } : {}} />;
    }
  };

  return (
    <div className="buttonBar" id={id} onClick={() => setHighlight(!highlight)}>
      {getButton(buttonName)}
      <p className="label" style={highlight ? { color: color } : {}}>
        {label}
      </p>
    </div>
  );
};

export default ButtonBar;
