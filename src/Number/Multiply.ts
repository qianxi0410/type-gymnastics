import { Equal } from '../util/Equal';
import { Expect } from '../util/Expect';

type Multiply<
  N extends number,
  P extends number,
  A extends unknown[] = [],
  B extends unknown[] = [],
  C extends unknown[] = [],
> = A['length'] extends N
  ? B['length'] extends P
    ? C['length']
    : Multiply<N, P, A, [0, ...B], [...A, ...C]>
  : Multiply<N, P, [0, ...A]>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type test = [
  Expect<Equal<Multiply<0, 1>, 0>>,
  Expect<Equal<Multiply<1, 0>, 0>>,
  Expect<Equal<Multiply<13, 10>, 130>>,
];
