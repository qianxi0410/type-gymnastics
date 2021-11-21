import { Equal } from '../util/Equal';
import { Expect } from '../util/Expect';

type Index<
  T extends unknown[],
  N extends number,
  A extends unknown[] = [],
> = A['length'] extends N
  ? T extends [infer F, ...infer R]
    ? F
    : never
  : T extends [infer F, ...infer R]
  ? Index<R, N, [0, ...A]>
  : never;

type test = [
  Expect<Equal<Index<[], 0>, never>>,
  Expect<Equal<Index<[1, 2, 3], 0>, 1>>,
  Expect<Equal<Index<[1, 2, 3], 4>, never>>,
  Expect<Equal<Index<[1, 2, 3], -1>, never>>,
];
