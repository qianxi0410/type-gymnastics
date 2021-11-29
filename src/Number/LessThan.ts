import { Equal } from '../util/Equal';
import { Expect } from '../util/Expect';

type LessThan<
  N1 extends number,
  N2 extends number,
  A extends unknown[] = [],
> = A['length'] extends N1
  ? A['length'] extends N2
    ? false
    : true
  : A['length'] extends N2
  ? false
  : LessThan<N1, N2, [0, ...A]>;

type test = [
  Expect<Equal<LessThan<1, 0>, false>>,
  Expect<Equal<LessThan<5, 4>, false>>,
  Expect<Equal<LessThan<4, 6>, true>>,
  Expect<Equal<LessThan<0, 0>, false>>,
  Expect<Equal<LessThan<20, 20>, false>>,
];
