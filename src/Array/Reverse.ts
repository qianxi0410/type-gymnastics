import { Expect } from '../util/Expect';
import { Equal } from '../util/Equal';

type Reverse<T extends unknown[]> = T extends [infer F, ...infer Rest]
  ? [...Reverse<Rest>, F]
  : [];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type test = [
  Expect<Equal<Reverse<[1]>, [1]>>,
  Expect<Equal<Reverse<[]>, []>>,
  Expect<Equal<Reverse<[1, 2]>, [2, 1]>>,
  Expect<Equal<Reverse<[true, false]>, [false, true]>>,
];
