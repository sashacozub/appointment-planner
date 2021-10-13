import React from 'react';

export const Tile = ({ object }) => {
  return (
    <div className='tile-container'>
      {Object.values(object).map((value, index) => {
        return <p className={index === 1 ? 'tile-title' : 'tile'}>{value}</p>;
      })}
      )}
    </div>
  );
};
