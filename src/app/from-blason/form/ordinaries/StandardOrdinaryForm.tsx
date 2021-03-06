import * as React from 'react';
import { ChapePloye, ChaussePloye, hasOrdinaryCharge, Ordinary, Pale } from '../../../model/ordinary';
import { MetalAndColoursSelect, TinctureSelect } from '../TinctureSelect';
import { MetalsAndColours, Tincture } from '../../../model/tincture';
import { LineSelect } from '../LineSelect';
import { Line } from '../../../model/line';
import { ChargeForm } from '../ChargeForm';

type SupportedOrdinary = Exclude<Ordinary, Pale | ChapePloye | ChaussePloye>;
type Props = {
  ordinary: SupportedOrdinary;
  ordinaryChange: (ordinary: SupportedOrdinary) => void;
};
export const StandardOrdinaryForm = ({ ordinary, ordinaryChange }: Props) => {
  function ordinaryTinctureChange(tincture: Tincture) {
    ordinaryChange({ ...ordinary, tincture });
  }

  function ordinaryFimbriatedChange(fimbriated: MetalsAndColours | null) {
    ordinaryChange({ ...ordinary, fimbriated });
  }

  function lineChange(line: Line) {
    ordinaryChange({ ...ordinary, line });
  }

  return (
    <>
      <div className="row">
        <div className="col">
          <div className="form-group ordinary-tincture-select">
            <label>Tincture</label>
            <TinctureSelect tincture={ordinary.tincture} tinctureChange={ordinaryTinctureChange} />
          </div>
        </div>

        <div className="col">
          <div className="form-group">
            <label>Line style</label>
            <LineSelect line={ordinary.line} lineChange={lineChange} />
          </div>
        </div>

        <div className="form-group">
          <label>Fimbriated</label>
          <MetalAndColoursSelect tincture={ordinary.fimbriated} tinctureChange={ordinaryFimbriatedChange} />
        </div>
      </div>
      {hasOrdinaryCharge(ordinary) && (
        <ChargeForm charge={ordinary.charge} chargeChange={(charge) => ordinaryChange({ ...ordinary, charge })} />
      )}
    </>
  );
};
