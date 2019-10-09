import * as React from 'react';
import { Dimension } from '../../../model/dimension';
import { SvgPathBuilder } from '../../../svg-path-builder/svg-path-builder';
import { PathFromBuilder } from '../../../common/PathFromBuilder';

type Props = { fill: [string, string]; dimension: Dimension };
export const LozengeThroughoutDisplay: React.FunctionComponent<Props> = ({ dimension, fill }) => {
  const { width, height } = dimension;

  const pathBuilder = SvgPathBuilder.start([width / 2, 0])
    .goTo([width, height / 2])
    .goTo([width / 2, height])
    .goTo([0, height / 2]);

  return (
    <>
      <rect x={0} y={0} width={width} height={height * 1.5} fill={fill[0]} />
      <PathFromBuilder pathBuilder={pathBuilder} fill={fill[1]} stroke="#333" />
    </>
  );
};
