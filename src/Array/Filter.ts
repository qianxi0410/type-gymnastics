import { Equal } from '../util/Equal';
import { Expect } from '../util/Expect';

type Filter<T extends unknown[], U> = T extends [infer F, ...infer R]
  ? F extends U
    ? [F, ...Filter<R, U>]
    : [...Filter<R, U>]
  : [];

type test = [
  Expect<Equal<Filter<[1, 2, true], boolean>, [true]>>,
  Expect<Equal<Filter<[1, 2, true], number>, [1, 2]>>,
  Expect<Equal<Filter<[1, 2, true], true>, [true]>>,
  Expect<Equal<Filter<[1, 2, [1, 2]], Array<number>>, [[1, 2]]>>,
];
