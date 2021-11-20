import { Equal } from '../util/Equal';
import { Expect } from '../util/Expect';

type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U];

type test = [Expect<Equal<Concat<[], [1]>, [1]>>];
