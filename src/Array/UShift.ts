import { Equal } from '../util/Equal';
import { Expect } from '../util/Expect';

type UShift<T extends unknown[], N> = [N, ...T];

type test = [
  Expect<Equal<UShift<[], 1>, [1]>>,
  Expect<Equal<UShift<[2], 1>, [1, 2]>>,
];
