import { SvgPathBuilder } from '../../../../svg-path-builder/svg-path-builder';
import * as React from 'react';
import { CrossFromLimb } from './CrossFromLimb';

type Props = {
  fill: string;
  stroke: string;
  center: readonly [number, number];
  crossWidth: number;
  crossRadius: number;
};
export const CrossPotent = ({ fill, stroke, center, crossWidth, crossRadius }: Props) => {
  const [centerX, centerY] = center;

  const wideFactor = 6;
  const topLimb = SvgPathBuilder.start([centerX - crossWidth, centerY - crossWidth])
    .goTo([centerX - crossWidth, centerY - crossRadius + 2 * crossWidth])
    .goTo([centerX - wideFactor * crossWidth, centerY - crossRadius + 2 * crossWidth])
    .goTo([centerX - wideFactor * crossWidth, centerY - crossRadius])
    .goTo([centerX + wideFactor * crossWidth, centerY - crossRadius])
    .goTo([centerX + wideFactor * crossWidth, centerY - crossRadius + 2 * crossWidth])
    .goTo([centerX + crossWidth, centerY - crossRadius + 2 * crossWidth])
    .goTo([centerX + crossWidth, centerY - crossWidth]);

  return <CrossFromLimb topLimb={topLimb} center={center} fill={fill} stroke={stroke} />;
};
