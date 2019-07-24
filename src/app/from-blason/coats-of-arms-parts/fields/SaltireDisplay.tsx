import * as React from 'react';
import { Dimension } from '../../../model/dimension';

type Props = { fill: [string, string]; dimension: Dimension };
export const SaltireDisplay: React.FunctionComponent<Props> = ({ dimension: { width, height }, fill }) => {
  return (
    <g>
      <path d={`M 0 0 H ${width} L ${width / 2} ${height / 2} Z`} fill={fill[0]} stroke="#333" />
      <path d={`M 0 ${height} H ${width} L ${width / 2} ${height / 2} Z`} fill={fill[0]} stroke="#333" />
      <path d={`M 0 0 V ${height} L ${width / 2} ${height / 2} Z`} fill={fill[1]} stroke="#333" />
      <path d={`M ${width} 0 V ${height} L ${width / 2} ${height / 2} Z`} fill={fill[1]} stroke="#333" />
    </g>
  );
};
