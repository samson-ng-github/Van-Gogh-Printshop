import { useState } from 'react';
import MagnifierButton from './MagnifierButton';
import ClearButton from './ClearButton';

const SearchButton = () => {
  const [showCross, setShowCross] = useState(false);

  const toggleShowCross = () => setShowCross(!showCross);

  return (
    <>
      {showCross ? (
        <ClearButton onclick={toggleShowCross} />
      ) : (
        <MagnifierButton onclick={toggleShowCross} />
      )}
    </>
  );
};

export default SearchButton;
