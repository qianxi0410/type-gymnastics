import { Equal } from '../util/Equal';
import { Expect } from '../util/Expect';

type Sum<
  T extends number[],
  A extends number[] = [],
  L extends unknown[] = [],
> = T extends [infer F, ...infer R]
  ? A['length'] extends F
    ? R extends number[]
      ? Sum<R, [], [...A, ...L]>
      : never
    : Sum<T, [0, ...A], L>
  : L['length'];

type test = [
  Expect<Equal<Sum<[]>, 0>>,
  Expect<Equal<Sum<[1, 1, 1]>, 3>>,
  Expect<Equal<Sum<[0, 10, 3]>, 13>>,
];
