import * as React from 'react';
import { Ordinary } from '../../../model/ordinary';
import { cannotHappen } from '../../../../utils/cannot-happen';
import { Dimension } from '../../../model/dimension';
import { range } from '../../../../utils/range';
import { SvgPathBuilder } from '../../../svg-path-builder/svg-path-builder';
import { FocusablePathFromBuilder } from '../../../common/PathFromBuilder';
import { chiefHeightRatio, computeLineOptions, SimpleBlasonShape } from '../blasonDisplay.helper';
import { ShieldShape } from '../../../model/configuration';
import { BordureDisplay } from './BordureDisplay';
import { toDegree } from '../../../svg-path-builder/geometrical.helper';
import { convertToOlfFillFronTincture, FillFromTincture } from '../../fillFromTincture.helper';

type Props = {
  ordinary: Ordinary;
  fillFromTincture: FillFromTincture;
  dimension: Dimension;
  shape: SimpleBlasonShape;
  shieldShape: ShieldShape;
  onClick: () => void;
};

export const OrdinaryDisplay = ({ ordinary, fillFromTincture, dimension, shape, shieldShape, onClick }: Props) => {
  const strokeColor = ordinary.tincture.name === 'sable' ? '#777' : '#333';

  const fill = convertToOlfFillFronTincture(fillFromTincture)(ordinary.tincture);
  const lineOptions = computeLineOptions(ordinary.line, dimension);
  const oneSideOnly = (lineOptions && 'oneSideOnly' in lineOptions
  ? lineOptions.oneSideOnly
  : false)
    ? null
    : lineOptions;

  const { width, height } = dimension;
  if (ordinary.name === 'chief') {
    const chiefHeight = height * chiefHeightRatio;

    const computedHeight =
      chiefHeight +
      (lineOptions && lineOptions.line === 'with-arc'
        ? lineOptions.radius
        : lineOptions && lineOptions.line === 'indented'
        ? lineOptions.height
        : 0);
    const pathBuilder = SvgPathBuilder.start([0, 0])
      .goTo([0, computedHeight])
      .goTo([width, computedHeight], lineOptions)
      .goTo([width, 0])
      .close();

    return (
      <FocusablePathFromBuilder
        pathBuilder={pathBuilder}
        fill={fill}
        stroke={strokeColor}
        style={{ cursor: 'pointer' }}
        onClick={onClick}
      />
    );
  } else if (ordinary.name === 'base') {
    const baseHeight = height / 4;

    const pathBuilder = SvgPathBuilder.start([0, height])
      .goTo([width, height])
      .goTo([width, height - baseHeight])
      .goTo([0, height - baseHeight], lineOptions)
      .close();

    return (
      <FocusablePathFromBuilder
        pathBuilder={pathBuilder}
        fill={fill}
        stroke={strokeColor}
        style={{ cursor: 'pointer' }}
        onClick={onClick}
      />
    );
  } else if (ordinary.name === 'fess') {
    const pathBuilder = SvgPathBuilder.start([0, height / 3])
      .goTo([0, (2 * height) / 3])
      .goTo([width, (2 * height) / 3], oneSideOnly)
      .goTo([width, height / 3])
      .goTo([0, height / 3], lineOptions);

    return (
      <FocusablePathFromBuilder
        pathBuilder={pathBuilder}
        fill={fill}
        stroke={strokeColor}
        style={{ cursor: 'pointer' }}
        onClick={onClick}
      />
    );
  } else if (ordinary.name === 'bend') {
    const length = Math.sqrt(width ** 2 + height ** 2);
    const bendHeight = height / 4;

    const pathBuilder2 = SvgPathBuilder.start([0, 0])
      .goTo([0, bendHeight])
      .goTo([length, bendHeight], oneSideOnly)
      .goTo([length, 0])
      .goTo([0, 0], lineOptions)
      .translate([(width - length) / 2, height / 2 - bendHeight / 2])
      .rotate([width / 2, height / 2], toDegree(Math.atan2(height, width)));

    return (
      <FocusablePathFromBuilder
        pathBuilder={pathBuilder2}
        fill={fill}
        stroke={strokeColor}
        style={{ cursor: 'pointer' }}
        onClick={onClick}
      />
    );
  } else if (ordinary.name === 'bendSinister') {
    const length = Math.sqrt(width ** 2 + height ** 2);
    const bendHeight = height / 4;

    const pathBuilder2 = SvgPathBuilder.start([0, 0])
      .goTo([0, bendHeight])
      .goTo([length, bendHeight], oneSideOnly)
      .goTo([length, 0])
      .goTo([0, 0], lineOptions)
      .translate([(width - length) / 2, height / 2 - bendHeight / 2])
      .rotate([width / 2, height / 2], -toDegree(Math.atan2(height, width)));

    return (
      <FocusablePathFromBuilder
        pathBuilder={pathBuilder2}
        fill={fill}
        stroke={strokeColor}
        style={{ cursor: 'pointer' }}
        onClick={onClick}
      />
    );
  } else if (ordinary.name === 'pale') {
    return (
      <g>
        {range(0, ordinary.count).map((i) => {
          const startX = ((i * 2 + 1) * width) / (2 * ordinary.count + 1);
          const paleWidth = width / (2 * ordinary.count + 1);
          const pathBuilder = SvgPathBuilder.start([startX, 0])
            .goTo([startX, height], oneSideOnly)
            .goTo([startX + paleWidth, height])
            .goTo([startX + paleWidth, 0], lineOptions);

          return (
            <FocusablePathFromBuilder
              key={i}
              pathBuilder={pathBuilder}
              fill={fill}
              stroke={strokeColor}
              style={{ cursor: 'pointer' }}
              onClick={onClick}
            />
          );
        })}
      </g>
    );
  } else if (ordinary.name === 'cross') {
    const pathBuilder = SvgPathBuilder.start([(2 * width) / 5, 0])
      .goToWithPartFlat([(2 * width) / 5, (2 * height) / 5], oneSideOnly, 5)
      .goToWithPartFlat([0, (2 * height) / 5], lineOptions, 5)
      .goTo([0, (3 * height) / 5])
      .goToWithPartFlat([(2 * width) / 5, (3 * height) / 5], oneSideOnly, 5)
      .goToWithPartFlat([(2 * width) / 5, height], oneSideOnly, 5)
      .goTo([(3 * width) / 5, height])
      .goToWithPartFlat([(3 * width) / 5, (3 * height) / 5], oneSideOnly, 5)
      .goToWithPartFlat([width, (3 * height) / 5], oneSideOnly, 5)
      .goTo([width, (2 * height) / 5])
      .goToWithPartFlat([(3 * width) / 5, (2 * height) / 5], lineOptions, 5)
      .goToWithPartFlat([(3 * width) / 5, 0], oneSideOnly, 5)
      .goTo([(2 * width) / 5, 0]);

    return (
      <FocusablePathFromBuilder
        pathBuilder={pathBuilder}
        fill={fill}
        stroke={strokeColor}
        style={{ cursor: 'pointer' }}
        onClick={onClick}
      />
    );
  } else if (ordinary.name === 'saltire') {
    const basePointW = width / (10 * Math.sqrt(2));
    const basePointH = height / (10 * Math.sqrt(2));

    const w = width / 2;
    const h = height / 2;

    const pathBuilder = SvgPathBuilder.start([w, h - basePointH])
      .goTo([(h * basePointW) / basePointH - w, -basePointH], lineOptions)
      .goTo([-basePointW, h - (w * basePointH) / basePointW])
      .goTo([w - basePointW, h], oneSideOnly)
      .goTo([-basePointW, h + (w * basePointH) / basePointW], lineOptions)
      .goTo([(h * basePointW) / basePointH - w, 2 * h + basePointH])
      .goTo([w, h + basePointH], oneSideOnly)
      .goTo([2 * w, 2 * h + basePointH], oneSideOnly)
      .goTo([2 * w + basePointW, h + (w * basePointH) / basePointW])
      .goTo([w + basePointW, h], lineOptions)
      .goTo([2 * w + basePointW, h - (w * basePointH) / basePointW], oneSideOnly)
      .goTo([2 * w, -basePointH])
      .goTo([w, h - basePointH], lineOptions);

    return (
      <FocusablePathFromBuilder
        pathBuilder={pathBuilder}
        fill={fill}
        stroke={strokeColor}
        style={{ cursor: 'pointer' }}
        onClick={onClick}
      />
    );
  } else if (ordinary.name === 'chevron' || ordinary.name === 'chevronel') {
    const chevronHeight =
      ordinary.name === 'chevron' ? height / 6 : ordinary.name === 'chevronel' ? height / 12 : cannotHappen(ordinary);

    return (
      <>
        {range(0, ordinary.count).map((i) => {
          const topPoint = ((i * 2 + 1) * height) / (ordinary.count * 2 + 1);
          const bottomPoint = (((i + 1) * 2 + 1) * height) / (ordinary.count * 2 + 1);

          const pathBuilder = SvgPathBuilder.start([width / 2, topPoint])
            .goToWithPartFlat([0, bottomPoint - chevronHeight], lineOptions, 5)
            .goTo([0, bottomPoint])
            .goToWithPartFlat([width / 2, topPoint + chevronHeight], oneSideOnly, 5)
            .goToWithPartFlat([width, bottomPoint], oneSideOnly, 5)
            .goTo([width, bottomPoint - chevronHeight])
            .goToWithPartFlat([width / 2, topPoint], lineOptions, 5);

          return (
            <FocusablePathFromBuilder
              key={i}
              pathBuilder={pathBuilder}
              fill={fill}
              stroke={strokeColor}
              style={{ cursor: 'pointer' }}
              onClick={onClick}
            />
          );
        })}
      </>
    );
  } else if (ordinary.name === 'bordure') {
    return (
      <BordureDisplay
        shieldShape={shieldShape}
        shape={shape}
        dimension={dimension}
        fill={fill}
        stroke={strokeColor}
        line={ordinary.line}
        onClick={onClick}
      />
    );
  } else if (ordinary.name === 'pall') {
    const pallWidth = width / 5.5;
    const projectedPallWidth = pallWidth / Math.sqrt(2);
    const lineOptions = computeLineOptions(ordinary.line, { width: width / 1.5, height });

    const pathBuilder = SvgPathBuilder.start([0, 0])
      .goTo([0, projectedPallWidth])
      .goTo([width / 2 - pallWidth / 2, height / 2], oneSideOnly)
      .goTo([width / 2 - pallWidth / 2, height], oneSideOnly)
      .goTo([width / 2 + pallWidth / 2, height])
      .goTo([width / 2 + pallWidth / 2, height / 2], oneSideOnly)
      .goTo([width, projectedPallWidth], oneSideOnly)
      .goTo([width, 0])
      .goTo([width - projectedPallWidth, 0])
      .goTo([width / 2, height / 2 - (height / width) * projectedPallWidth], lineOptions)
      .goTo([projectedPallWidth, 0], lineOptions)
      .goTo([0, 0]);

    return (
      <FocusablePathFromBuilder
        pathBuilder={pathBuilder}
        fill={fill}
        stroke={strokeColor}
        style={{ cursor: 'pointer' }}
        onClick={onClick}
      />
    );
  } else {
    return cannotHappen(ordinary);
  }
};
