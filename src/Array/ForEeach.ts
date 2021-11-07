import { Equal } from '../util/Equal';
import { Expect } from '../util/Expect';

type ForEach<T extends unknown[]> = T extends (infer Arr)[] ? Arr : never;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type test = [
  Expect<Equal<ForEach<[]>, never>>,
  Expect<Equal<ForEach<[1, 2]>, 1 | 2>>,
  Expect<Equal<ForEach<[1, true, '3', [4]]>, 1 | true | '3' | [4]>>,
];
