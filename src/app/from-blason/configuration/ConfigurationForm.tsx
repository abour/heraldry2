import * as React from 'react';
import { Configuration, ShieldShape } from '../../model/configuration';
import { TinctureConfigurationForm } from './TinctureConfigurationForm';
import { TinctureConfiguration } from '../../model/tincture-configuration';
import { ShieldShapeForm } from './ShieldShapeForm';
import { Collapse } from 'react-bootstrap';

type Props = {
  isOpen: boolean;
  configuration: Configuration;
  configurationChange: (configuration: Configuration) => void;
};

export function ConfigurationForm({ isOpen, configuration, configurationChange }: Props) {
  function updateTinctureConfiguration(tinctureConfiguration: TinctureConfiguration) {
    configurationChange({ ...configuration, tinctureConfiguration });
  }

  function updateShieldShape(shieldShape: ShieldShape) {
    configurationChange({ ...configuration, shieldShape });
  }

  return (
    <Collapse in={isOpen}>
      <div style={{ border: '1px solid #999', padding: '10px 5px' }}>
        <div style={{ cursor: 'pointer' }}>
          <span style={{ margin: '0 10px', borderBottom: '1px solid #333', padding: '3px 0', fontWeight: 'bold' }}>
            Configuration
          </span>
        </div>
        <TinctureConfigurationForm
          tinctureConfiguration={configuration.tinctureConfiguration}
          tinctureConfigurationChange={updateTinctureConfiguration}
        />
        <div>
          <ShieldShapeForm shieldShape={configuration.shieldShape} shieldShapeChange={updateShieldShape} />
        </div>
      </div>
    </Collapse>
  );
}
