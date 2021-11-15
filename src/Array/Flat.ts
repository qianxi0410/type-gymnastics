import { Equal } from '../util/Equal';
import { Expect } from '../util/Expect';

type Flat<T extends unknown[]> = T extends [infer First, ...infer Rest]
  ? First extends unknown[]
    ? [...Flat<First>, ...Flat<Rest>]
    : [First, ...Flat<Rest>]
  : T;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type test = [
  Expect<Equal<Flat<[]>, []>>,
  Expect<Equal<Flat<[1, 2, 3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<Flat<[1, [2]]>, [1, 2]>>,
  Expect<Equal<Flat<[1, 2, [3, 4], [[[5]]]]>, [1, 2, 3, 4, 5]>>,
  Expect<
    Equal<
      Flat<[{ foo: 'bar'; 2: 10 }, 'foobar']>,
      [{ foo: 'bar'; 2: 10 }, 'foobar']
    >
  >,
  Expect<Equal<Flat<[[1, 2, [[3]]], 4]>, [1, 2, 3, 4]>>,
];
