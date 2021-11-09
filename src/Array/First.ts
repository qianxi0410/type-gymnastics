import { Equal } from '../util/Equal';
import { Expect } from '../util/Expect';

type First<T extends unknown[]> = T['length'] extends 0
  ? never
  : T extends [infer F, ...infer Rest]
  ? F
  : never;

type test = [
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[1]>, 1>>,
  Expect<Equal<First<[true, 1, 2]>, true>>,
];
