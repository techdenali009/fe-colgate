import TopText from '@ui/atoms/TopHeaderText';
import React from 'react';


const App: React.FC = () => {
  const dynamicText = 'Spend $250 and receive a complimentary Collagen Hydrator'; // Example dynamic text

  return (
    <div>
      <TopText text={dynamicText} />
    </div>
  );
}

export default App;
