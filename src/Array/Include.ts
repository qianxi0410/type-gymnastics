import { Equal } from '../util/Equal';
import { Expect } from '../util/Expect';

type Include<T extends unknown[], N> = T extends [infer F, ...infer R]
  ? F extends N
    ? true
    : Include<R, N>
  : false;

type test = [
  Expect<Equal<Include<[1, 2, 3], 1>, true>>,
  Expect<Equal<Include<[1, 2, 3], -1>, false>>,
];
