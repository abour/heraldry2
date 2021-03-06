import * as React from 'react';
import { parties, Party } from '../../model/party';
import { PartyField } from '../../model/field';
import { or } from '../../model/tincture';
import { SelectScalar } from '../../common/SelectScalar';
import { LineSelect } from './LineSelect';
import { Line } from '../../model/line';
import { stringifyParty } from '../../model/stringify/stringify.helper';
import { TincturesConfiguration } from './TincturesConfiguration';

const partiesOptions = parties;

type Props = {
  field: PartyField;
  fieldChange: (field: PartyField) => void;
};
export const PartyForm = ({ field, fieldChange }: Props) => {
  const per = field.per;

  function partyChange(partyName: Party['name']) {
    if (partyName === 'pall') {
      if (per.name !== 'pall') {
        fieldChange({
          kind: 'party',
          per: { ...per, name: partyName, tinctures: [per.tinctures[0], per.tinctures[1], or] },
        });
      } else {
        fieldChange({ kind: 'party', per: { ...per } });
      }
    } else {
      if (per.name === 'pall') {
        fieldChange({
          kind: 'party',
          per: { ...per, name: partyName, tinctures: [per.tinctures[0], per.tinctures[1]] },
        });
      } else {
        fieldChange({ kind: 'party', per: { ...per, name: partyName } });
      }
    }
  }
  function lineChange(line: Line) {
    fieldChange({ kind: 'party', per: { ...per, line } });
  }

  return (
    <div className="row">
      <div className="col">
        <div className="form-group field-party-type-select">
          <label>Party</label>
          <SelectScalar
            options={partiesOptions}
            formatValue={stringifyParty}
            value={per.name}
            valueChange={(t) => partyChange(t)}
          />
        </div>
      </div>
      <div className="col">
        <div className="form-group">
          <label>Line style</label>
          <LineSelect line={per.line} lineChange={lineChange} />
        </div>
      </div>
      {per.name === 'pall' ? (
        <TincturesConfiguration
          tinctures={per.tinctures}
          tincturesChanges={(tinctures) => fieldChange({ kind: 'party', per: { ...per, tinctures } })}
        />
      ) : (
        <TincturesConfiguration
          tinctures={per.tinctures}
          tincturesChanges={(tinctures) => fieldChange({ kind: 'party', per: { ...per, tinctures } })}
        />
      )}
    </div>
  );
};
