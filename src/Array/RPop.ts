import { Equal } from '../util/Equal';
import { Expect } from '../util/Expect';

type RPop<T extends unknown[]> = T extends []
  ? never
  : T extends [infer F, ...infer R]
  ? F
  : never;

type test = [
  Expect<Equal<RPop<[]>, never>>,
  Expect<Equal<RPop<[1]>, 1>>,
  Expect<Equal<RPop<[{ foo: 'foo' }]>, { foo: 'foo' }>>,
];
