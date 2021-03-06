import { SvgPathBuilder } from '../../../svg-path-builder/svg-path-builder';
import { Dimension } from '../../../model/dimension';
import { Saltire } from '../../../model/ordinary';
import { computeLineOptions, oneSideLineOption } from '../blasonDisplay.helper';
import { FurConfiguration } from '../FurPatternDef';

export const saltireOrdinaryConfiguration = (dimension: Dimension, ordinary: Saltire) => {
  const { width, height } = dimension;
  const lineOptions = computeLineOptions(ordinary.line, dimension);
  const oneSideOnly = oneSideLineOption(lineOptions);

  const basePointW = width / (10 * Math.sqrt(2));
  const basePointH = height / (10 * Math.sqrt(2));

  const w = width / 2;
  const h = height / 2;

  const pathBuilder = SvgPathBuilder.start([w, h - basePointH])
    .goToWithPartFlat([(h * basePointW) / basePointH - w, -basePointH], lineOptions, 5)
    .goTo([-basePointW, h - (w * basePointH) / basePointW])
    .goToWithPartFlat([w - basePointW, h], oneSideOnly, 5)
    .goToWithPartFlat([-basePointW, h + (w * basePointH) / basePointW], lineOptions, 5)
    .goTo([(h * basePointW) / basePointH - w, 2 * h + basePointH])
    .goToWithPartFlat([w, h + basePointH], oneSideOnly, 5)
    .goToWithPartFlat([2 * w, 2 * h + basePointH], oneSideOnly, 5)
    .goTo([2 * w + basePointW, h + (w * basePointH) / basePointW])
    .goToWithPartFlat([w + basePointW, h], lineOptions, 5)
    .goToWithPartFlat([2 * w + basePointW, h - (w * basePointH) / basePointW], oneSideOnly, 5)
    .goTo([2 * w, -basePointH])
    .goToWithPartFlat([w, h - basePointH], lineOptions, 5);

  const furConfiguration: FurConfiguration = {
    ermine: { spotWidth: width / 25, heightMarginScale: 0, widthMarginScale: -0.2 },
    vair: { bellWidth: width / 24, bellHeightRatio: 2 },
    potent: { bellWidth: width / 18, bellHeightRatio: 1 },
  };
  const pathBuilderAndTincture = [{ pathBuilder, tincture: ordinary.tincture }];
  return { pathBuilderAndTincture, furConfiguration };
};
