import * as React from 'react';
import { Dimension } from '../../../model/dimension';
import { FocusablePathFromBuilder } from '../../../common/PathFromBuilder';
import { LineOptions, SvgPathBuilder } from '../../../svg-path-builder/svg-path-builder';

type Props = { dimension: Dimension; stroke: string; fill: string; onClick?: () => void };

export function heaterPathBuilder({ width, height }: Dimension, lineOptions: LineOptions | null): SvgPathBuilder {
  return SvgPathBuilder.start([0, 0])
    .goTo([width / 20, 0], null)
    .goTo([width - width / 20, 0], lineOptions)
    .goTo([width, 0], null)
    .goTo([width, (3 * height) / 5], lineOptions)
    .quadraticBezier([width / 2, height], [width, height * 0.8], lineOptions)
    .quadraticBezier([0, (3 * height) / 5], [0, height * 0.8], lineOptions)
    .goTo([0, 0], lineOptions);
}

export const HeaterDisplay: React.FunctionComponent<Props> = ({ dimension, stroke, fill, onClick }) => {
  const pathBuilder = heaterPathBuilder(dimension, null);

  return <FocusablePathFromBuilder pathBuilder={pathBuilder} stroke={stroke} fill={fill} onClick={onClick} />;
};
