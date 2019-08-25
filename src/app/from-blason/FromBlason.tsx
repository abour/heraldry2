import * as React from 'react';
import { useEffect, useState } from 'react';
import { gules } from '../model/tincture';
import { Blason } from '../model/blason';
import { CoatsOfArmsDetail } from './CoatsOfArmsDetail';
import { BlasonForm } from './form/BlasonForm';
import { ConfigurationForm } from './configuration/ConfigurationForm';
import { defaultTinctureConfiguration } from '../model/tincture-configuration';

const baseDefaultBlason: Blason = {
  field: { kind: 'plain', tincture: gules },
} as const;
export const FromBlason = () => {
  const localStorageKey = 'default-blason#2';
  const defaultBlasonStr = localStorage.getItem(localStorageKey);
  const defaultBlason = defaultBlasonStr ? JSON.parse(defaultBlasonStr) : baseDefaultBlason;

  const [blason, setBlason] = useState<Blason>(defaultBlason);

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(blason));
  }, [blason]);

  const [tinctureConfiguration, setTinctureConfiguration] = useState(defaultTinctureConfiguration);

  return (
    <>
      <ConfigurationForm
        tinctureConfiguration={tinctureConfiguration}
        tinctureConfigurationChange={setTinctureConfiguration}
      />
      <div className="row">
        <div className="col-md-12 col-lg-6">
          <BlasonForm tinctureConfiguration={tinctureConfiguration} blason={blason} blasonChange={setBlason} />
        </div>
        <div className="col-md-12 col-lg-6">
          <CoatsOfArmsDetail
            tinctureConfiguration={tinctureConfiguration}
            blason={blason}
            blasonChange={(blason) => setBlason(blason)}
          />
        </div>
      </div>
    </>
  );
};
