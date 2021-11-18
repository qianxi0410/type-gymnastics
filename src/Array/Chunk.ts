import { Equal } from '../util/Equal';
import { Expect } from '../util/Expect';

type Chunk<
  T extends unknown[],
  N extends number,
  A extends number[] = [],
  B extends unknown[] = [],
> = A['length'] extends N
  ? [B, ...Chunk<T, N, [], []>]
  : T extends [infer F, ...infer R]
  ? Chunk<R, N, [0, ...A], [...B, F]>
  : B extends []
  ? []
  : [[...B]];

type test = [
  Expect<Equal<Chunk<[], 1>, []>>,
  Expect<Equal<Chunk<[1, 2, 3], 1>, [[1], [2], [3]]>>,
  Expect<Equal<Chunk<[1, 2, 3], 2>, [[1, 2], [3]]>>,
  Expect<Equal<Chunk<[1, 2, 3, 4], 2>, [[1, 2], [3, 4]]>>,
  Expect<Equal<Chunk<[1, 2, 3, 4], 5>, [[1, 2, 3, 4]]>>,
  Expect<Equal<Chunk<[1, true, 2, false], 2>, [[1, true], [2, false]]>>,
];
