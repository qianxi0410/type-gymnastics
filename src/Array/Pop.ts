import { Equal } from '../util/Equal';
import { Expect } from '../util/Expect';

type Pop<T extends unknown[]> = T extends [...infer F, infer Last] ? F : [];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type test = [
  Expect<Equal<Pop<[]>, []>>,
  Expect<Equal<Pop<[1, 2, 3]>, [1, 2]>>,
  Expect<Equal<Pop<[true]>, []>>,
  Expect<Equal<Pop<[1, '2']>, [1]>>,
];
