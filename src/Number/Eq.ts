import { Equal } from '../util/Equal';
import { Expect } from '../util/Expect';

type Eq<T, U> = [T, U] extends [U, T] ? true : false;

type test = [
  Expect<Equal<Eq<1, 1>, true>>,
  Expect<Equal<Eq<[1, 2], [1, 2]>, true>>,
  Expect<Equal<Eq<true, false>, false>>,
];
