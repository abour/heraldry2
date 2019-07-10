import * as React from 'react';
import { azure } from '../../model/tincture';

export const Vair = () => {
  return (
    <>
      <rect width="100%" height="100%" fill="white"/>

      <path d="M0 200 L200 200 L150 150 L150 50 L100 0 L50 50 L50 150 Z" fill={azure.color}/>
    </>
  );
};
