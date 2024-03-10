import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterWorks } from '../../redux/worksSlice';

import PortraitButton from './PortraitButton';
import LandscapeButton from './LandscapeButton';
import StillLifeButton from './StillLifeButton';
import MapButton from './MapButton';

const ButtonBar = ({ buttonType, label }) => {
  const [highlight, setHighlight] = useState(false);
  const dispatch = useDispatch();
  const { searchFilter } = useSelector((store) => store.works);
  const highlightColor = 'black';
  const baseColor = '#e43816';

  useEffect(() => {
    if (searchFilter !== buttonType) setHighlight(false);
    else setHighlight(true);
  }, [searchFilter]);

  const getButton = (buttonType) => {
    switch (buttonType) {
      case 'portrait':
        return (
          <PortraitButton
            style={highlight ? { fill: highlightColor } : { fill: baseColor }}
          />
        );
        break;
      case 'landscape':
        return (
          <LandscapeButton
            style={highlight ? { fill: highlightColor } : { fill: baseColor }}
          />
        );
        break;
      case 'stillLife':
        return (
          <StillLifeButton
            style={highlight ? { fill: highlightColor } : { fill: baseColor }}
          />
        );
        break;
      case 'map':
        return (
          <MapButton
            style={highlight ? { fill: highlightColor } : { fill: baseColor }}
          />
        );
    }
  };

  const handleClick = () => {
    if (buttonType !== 'map') dispatch(filterWorks(buttonType));
  };

  return (
    <div className="buttonBar" onClick={handleClick}>
      {getButton(buttonType)}
      <p
        className="label"
        style={highlight ? { color: highlightColor } : { color: baseColor }}
      >
        {label}
      </p>
    </div>
  );
};

export default ButtonBar;
