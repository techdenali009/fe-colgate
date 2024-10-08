import TopText from '@ui/atoms/TopHeaderText';
import React from 'react';


const App: React.FC = () => {
  const dynamicText = 'NEW Acne Peel & Acne Peel Plus'; // Example dynamic text

  return (
    <div>
      <TopText text={dynamicText} />
    </div>
  );
}

export default App;
