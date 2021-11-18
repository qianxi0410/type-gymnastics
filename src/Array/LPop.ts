import { Equal } from '../util/Equal';
import { Expect } from '../util/Expect';

type LPop<T extends unknown[]> = T extends []
  ? never
  : T extends [infer F, ...infer R]
  ? F
  : never;

type test = [
  Expect<Equal<LPop<[]>, never>>,
  Expect<Equal<LPop<[1]>, 1>>,
  Expect<Equal<LPop<[{ foo: 'foo' }]>, { foo: 'foo' }>>,
  Expect<Equal<LPop<[1, 2]>, 1>>,
];
