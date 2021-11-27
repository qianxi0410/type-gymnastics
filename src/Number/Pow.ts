import { Multiply } from './Multiply';

type Pow<
  N extends number,
  P extends number,
  A extends unknown[] = [],
  B extends number = 1,
> = A['length'] extends P ? B : Pow<N, P, [0, ...A], Multiply<B, N>>;
