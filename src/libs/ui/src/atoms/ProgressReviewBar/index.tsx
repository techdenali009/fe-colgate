import React from 'react';

interface ProgressBarProps {
  percentage: number; // Percentage width of the progress bar (0 to 100)
  backgroundColor?: string; // Background color of the empty progress bar
  barColor?: string; // Color of the filled portion of the progress bar
  barClassName?: string; // Additional class names for the bar
  wrapperClassName?: string; // Additional class names for the wrapper
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  percentage,
  backgroundColor = '#eff2f4',
  barColor = 'bg-appTheme',
  barClassName = '',
  wrapperClassName = '',
}) => {
  return (
    <div
      className={`flex-grow h-4 rounded-lg relative shadow-[inset_0px_0px_0px_1px_rgb(204,204,204)] ${wrapperClassName}`}
      style={{ backgroundColor }}
    >
      <div
        className={`h-full ${barColor} ${barClassName} rounded-lg`}
        style={{
          width: `${percentage}%`,
        }}
      />
    </div>
  );
};

export default ProgressBar;
