import { Equal } from '../util/Equal';
import { Expect } from '../util/Expect';

type Set<
  T extends unknown[],
  I extends number,
  N,
  A extends unknown[] = [],
> = A['length'] extends I
  ? T extends [infer F, ...infer R]
    ? [...A, N, ...R]
    : [...A]
  : T extends [infer F, ...infer R]
  ? Set<R, I, N, [...A, F]>
  : [...A];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type test = [
  Expect<Equal<Set<[], 0, 1>, []>>,
  Expect<Equal<Set<[1, 2, 3], 0, true>, [true, 2, 3]>>,
  Expect<Equal<Set<[1, 2, 3], -1, true>, [1, 2, 3]>>,
  Expect<Equal<Set<[1, 2, 3], 4, true>, [1, 2, 3]>>,
  Expect<Equal<Set<[1, 2, 3], 2, true>, [1, 2, true]>>,
];
