import * as React from 'react';
import { Lozenge } from '../../../../model/charge';
import { Dimension } from '../../../../model/dimension';
import { Tincture } from '../../../../model/tincture';
import { getChargePositions } from '../charge.helper';
import { SvgPathBuilder } from '../../../../svg-path-builder/svg-path-builder';
import { FocusablePathFromBuilder } from '../../../../common/PathFromBuilder';
import { cannotHappen } from '../../../../../utils/cannot-happen';
import { SimpleBlasonShape } from '../../blasonDisplay.helper';
import { getStrokeColor } from '../../../blason.helpers';

type Props = {
  charge: Lozenge;
  dimension: Dimension;
  shape: SimpleBlasonShape;
  fillFromTincture: (tincture: Tincture) => string;
  onClick: () => void;
};
export const LozengeDisplay = ({ charge, dimension: { width, height }, fillFromTincture, shape, onClick }: Props) => {
  const stroke = getStrokeColor(charge.tincture);
  const fill = fillFromTincture(charge.tincture);

  const { count, disposition } = charge.countAndDisposition;
  const { cellWidth, cellHeight, positions } = getChargePositions(count, disposition, shape);
  const radius = Math.min(0.75 * cellWidth * width, 0.4 * cellHeight * height);
  const acuteness = 1.2;
  return (
    <>
      {positions.map(([cx, cy], i) => {
        const centerX = cx * width;
        const centerY = cy * height;

        const pathBuilder = SvgPathBuilder.start([centerX, centerY - radius * acuteness])
          .goTo([centerX + radius, centerY])
          .goTo([centerX, centerY + radius * acuteness])
          .goTo([centerX - radius, centerY])
          .close();
        if (charge.inside === 'voided') {
          const innerRadius = radius * 0.65;
          const voidedPathBuilder = pathBuilder
            .moveTo([centerX, centerY - innerRadius * acuteness])
            .goTo([centerX + innerRadius, centerY])
            .goTo([centerX, centerY + innerRadius * acuteness])
            .goTo([centerX - innerRadius, centerY])
            .close();

          return (
            <FocusablePathFromBuilder
              key={i}
              pathBuilder={voidedPathBuilder}
              stroke={stroke}
              fill={fill}
              fillRule="evenodd"
              onClick={onClick}
            />
          );
        } else if (charge.inside === 'nothing') {
          return (
            <FocusablePathFromBuilder key={i} pathBuilder={pathBuilder} stroke={stroke} fill={fill} onClick={onClick} />
          );
        } else if (charge.inside === 'pierced') {
          const innerRadius = radius * 0.5;
          const voidedPathBuilder = pathBuilder
            .moveTo([centerX, centerY - innerRadius])
            .arcTo([centerX, centerY + innerRadius], { radius: innerRadius })
            .arcTo([centerX, centerY - innerRadius], { radius: innerRadius });

          return (
            <FocusablePathFromBuilder
              key={i}
              pathBuilder={voidedPathBuilder}
              stroke={stroke}
              fill={fill}
              fillRule="evenodd"
              onClick={onClick}
            />
          );
        } else {
          return cannotHappen(charge.inside);
        }
      })}
    </>
  );
};
