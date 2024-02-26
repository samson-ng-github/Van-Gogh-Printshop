import { useState } from 'react';
import MagnifierButton from './MagnifierButton';
import CrossButton from './CrossButton';

const SearchButton = (style) => {
  const [showCross, setShowCross] = useState(false);

  return (
    <>
      <svg {...style} onClick={() => setShowCross(!showCross)}>
        {showCross ? <CrossButton /> : <MagnifierButton />}
      </svg>
    </>
  );
};

export default SearchButton;
