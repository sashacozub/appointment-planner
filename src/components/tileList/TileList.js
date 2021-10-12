import React from 'react';
import { Tile } from '../tile/Tile';

export const TileList = (props) => {
  return (
    <div>
      {props.map((object, index) => {
        return <Tile object={object} key={index} />;
      })}
    </div>
  );
};
