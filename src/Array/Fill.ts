import { Equal } from '../util/Equal';
import { Expect } from '../util/Expect';

type Fill<
  T extends unknown[],
  N,
  Start extends number = 0,
  End extends number = T['length'],
  A extends unknown[] = [],
  BetweenStartAndEnd extends boolean = false,
> = Start extends End
  ? T
  : A['length'] extends Start
  ? T extends [infer F, ...infer R]
    ? Fill<R, N, Start, End, [...A, N], true>
    : A
  : A['length'] extends End
  ? [...A, ...T]
  : BetweenStartAndEnd extends true
  ? T extends [infer F, ...infer R]
    ? Fill<R, N, Start, End, [...A, N], true>
    : A
  : T extends [infer F, ...infer R]
  ? Fill<R, N, Start, End, [...A, F]>
  : A;

type test = [
  Expect<Equal<Fill<[], 0>, []>>,
  Expect<Equal<Fill<[], 0, 0, 3>, []>>,
  Expect<Equal<Fill<[1, 2, 3], 0, 0, 0>, [1, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], 0, 2>, [1, 2, 0]>>,
  Expect<Equal<Fill<[1, 2, 3], 0, 2, 2>, [1, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], 0>, [0, 0, 0]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 1>, [1, true, true]>>,
  Expect<Equal<Fill<[1, 2, 3], true>, [true, true, true]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 0, 1>, [true, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 1, 3>, [1, true, true]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 10, 0>, [1, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 0, 10>, [true, true, true]>>,
];
