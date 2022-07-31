import { SortType } from '../constants/sort-type';
import IOffer from '../models/IOffer';

export const OffersSorter = {
  [SortType.PriceLowestFirst]: (first: IOffer, second: IOffer): number =>
    first.price - second.price,
  [SortType.PriceHighestFirst]: (first: IOffer, second: IOffer): number =>
    second.price - first.price,
  [SortType.TopRated]: (first: IOffer, second: IOffer): number =>
    second.rating - first.rating,
  [SortType.Popular]: (): number => 0,
};