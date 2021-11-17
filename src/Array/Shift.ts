import { Equal } from '../util/Equal';
import { Expect } from '../util/Expect';

type Shift<T extends unknown[]> = T extends [infer F, ...infer R] ? R : [];

type test = [
  Expect<Equal<Shift<[1]>, []>>,
  Expect<Equal<Shift<[]>, []>>,
  Expect<Equal<Shift<[true, false]>, [false]>>,
];
