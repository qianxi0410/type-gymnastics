import { Expect } from '../util/Expect';
import { Equal } from '../util/Equal';

export type Push<T extends unknown[], E> = T extends unknown[]
  ? [...T, E]
  : never;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type test = [
  Expect<Equal<Push<[], 1>, [1]>>,
  Expect<Equal<Push<[1, 2, 3], '2'>, [1, 2, 3, '2']>>,
  Expect<Equal<Push<[true, false], false>, [true, false, false]>>,
  Expect<Equal<Push<[1, 2], 3>, [1, 2, 3]>>,
];
