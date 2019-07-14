import * as React from 'react';

type Props = { fill: [string, string]; width: number; height: number };
export const FessDisplay: React.FunctionComponent<Props> = ({ width, height, fill }) => {
  return (
    <g>
      <rect x={0} y={0} width={width} height={height / 2} fill={fill[0]} stroke="#333" />
      <rect x={0} y={height / 2} width={width} height={height / 2} fill={fill[1]} stroke="#333" />
    </g>
  );
};