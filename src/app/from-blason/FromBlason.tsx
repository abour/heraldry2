import * as React from 'react';
import { useState } from 'react';
import { uuid } from '../../utils/uuid';
import { CoatsOfArmsDisplay } from './CoatsOfArmsDisplay';
import { argent, Blason, gules, Tincture } from '../model/blason';
import { TinctureSelect } from './TinctureSelect';

export const FromBlason = () => {
  const id = uuid();

  const [blason, setBlason] = useState<Blason>({
    field: argent,
    ordinary: {
      name: 'chief',
      tincture: gules,
    },
  });

  function fieldChange(field: Tincture) {
    setBlason({ ...blason, field });
  }

  return (
    <div className="row">
      <div className="col-md-12 col-lg-6">
        <div className="form-group">
          <label htmlFor={id}>Select your field</label>
          <TinctureSelect tincture={blason.field} tinctureChange={fieldChange} />
        </div>
      </div>
      <div className="col-md-12 col-lg-6">
        <CoatsOfArmsDisplay blason={blason} />
      </div>
    </div>
  );
};
