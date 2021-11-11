import { Equal } from '../util/Equal';
import { Expect } from '../util/Expect';

type Last<T extends unknown[]> = T extends [...infer F, infer L] ? L : never;

type test = [
  Expect<Equal<Last<[]>, never>>,
  Expect<Equal<Last<[1]>, 1>>,
  Expect<Equal<Last<[1, true]>, true>>,
];
