import {keepPreviousData, useQuery} from '@tanstack/react-query';
import {getGood, getGoodList, getGoods} from 'api/goodApi';
import {Animal} from 'types/goodMenu';
import {GoodRequest} from 'types/good';
import {QueryKeys} from './keys';

const STALE_TIME = 1000 * 60 * 10;

export const useGoodQuery = (id: number) =>
  useQuery({
    queryKey: [QueryKeys.Good, id],
    queryFn: () => getGood(id),
    staleTime: STALE_TIME,
  });

export const useGoodsQuery = (animal: Animal, goodRequest: GoodRequest) =>
  useQuery({
    queryKey: [QueryKeys.Goods, animal, JSON.stringify(goodRequest)],
    queryFn: () => getGoods(animal, goodRequest),
    staleTime: STALE_TIME,
  });

export const useGoodListQuery = (ids: number[]) =>
  useQuery({
    queryKey: [QueryKeys.GoodList, ids],
    queryFn: () => getGoodList(ids),
    staleTime: STALE_TIME,
    placeholderData: keepPreviousData,
  });
