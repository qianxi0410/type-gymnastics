import { Equal } from '../util/Equal';
import { Expect } from '../util/Expect';

type Zip<T extends unknown[], U extends unknown[]> = T extends [
  infer F1,
  ...infer R1
]
  ? U extends [infer F2, ...infer R2]
    ? [[F1, F2], ...Zip<R1, R2>]
    : []
  : [];

type test = [
  Expect<Equal<Zip<[], []>, []>>,
  Expect<Equal<Zip<[1, 2], [true, false]>, [[1, true], [2, false]]>>,
  Expect<Equal<Zip<[1, 2, 3], ['1', '2']>, [[1, '1'], [2, '2']]>>,
  Expect<Equal<Zip<[], [1, 2, 3]>, []>>,
  Expect<Equal<Zip<[[1, 2]], [3]>, [[[1, 2], 3]]>>,
];
