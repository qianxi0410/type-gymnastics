import { Equal } from '../util/Equal';
import { Expect } from '../util/Expect';

type TwoSum<
  Arr extends number[],
  target extends number,
  I extends number = 0,
  J extends number = Num<Add<I, 1>>,
  ArrLen extends number = Length<Arr>,
> = I extends ArrLen
  ? []
  : J extends ArrLen
  ? TwoSum<Arr, target, Num<Add<I, 1>>>
  : Add<Arr[I], Arr[J]> extends target
  ? [I, J]
  : TwoSum<Arr, target, I, Num<Add<J, 1>>>;

type tests = [
  Expect<Equal<TwoSum<[2, 7, 11, 5], 9>, [0, 1]>>,
  Expect<Equal<TwoSum<[3, 2, 4], 6>, [1, 2]>>,
  Expect<Equal<TwoSum<[3, 3], 6>, [0, 1]>>,
  Expect<Equal<TwoSum<[2, 7, 11, 5], 10>, []>>,
  Expect<Equal<TwoSum<[1, 3, 6, 7, 9], 10>, [0, 4]>>,
];

type Length<T extends unknown[]> = T['length'];

type Push<T extends unknown[], Val> = [...T, Val];

type NTuple<N extends number, T extends unknown[] = []> = T['length'] extends N
  ? T
  : NTuple<N, Push<T, unknown>>;

type Add<A extends number, B extends number> = Length<
  [...NTuple<A>, ...NTuple<B>]
>;

type Num<T> = Extract<T, number>;
