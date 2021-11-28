import { Equal } from '../util/Equal';
import { Expect } from '../util/Expect';

type GreaterThan<
  N1 extends number,
  N2 extends number,
  A extends unknown[] = [],
> = A['length'] extends N1
  ? false
  : A['length'] extends N2
  ? true
  : GreaterThan<N1, N2, [0, ...A]>;

type cases = [
  Expect<Equal<GreaterThan<1, 0>, true>>,
  Expect<Equal<GreaterThan<5, 4>, true>>,
  Expect<Equal<GreaterThan<0, 0>, false>>,
  Expect<Equal<GreaterThan<20, 20>, false>>,
];
