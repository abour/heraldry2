import { Tincture } from './tincture';
import { Line } from './line';

export type Chief = { name: 'chief'; tincture: Tincture; line: Line };
export type Bend = { name: 'bend'; tincture: Tincture };
export type Pale = { name: 'pale'; tincture: Tincture; count: 1 | 2 };
export type Fess = { name: 'fess'; tincture: Tincture; line: Line };
export type Chevron = { name: 'chevron'; tincture: Tincture };
export type Cross = { name: 'cross'; tincture: Tincture };
export type Saltire = { name: 'saltire'; tincture: Tincture };

export type Bordure = { name: 'bordure'; tincture: Tincture; line: Line };
export type Base = { name: 'base'; tincture: Tincture; line: Line };

export type SubOrdinary = Bordure | Base;
export type Ordinary = Chief | Bend | Pale | Fess | Chevron | Cross | Saltire | SubOrdinary;

export function isSubOrdinary(o: Ordinary['name']): o is SubOrdinary['name']  {
  return o === 'bordure' || o === 'base';
}

export const ordinaries: Array<Ordinary['name']> = [
  'chief',
  'bend',
  'pale',
  'fess',
  'chevron',
  'cross',
  'saltire',
  'bordure',
  'base'
];
