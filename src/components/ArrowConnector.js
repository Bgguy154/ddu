import React from 'react';
import Arrow from 'react-arrow-head';

const ArrowConnector = ({ start, end }) => {
  return (
    <Arrow
      startX={start.x}
      startY={start.y}
      endX={end.x}
      endY={end.y}
    />
  );
};

export default ArrowConnector;
