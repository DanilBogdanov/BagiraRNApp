import {
  keepPreviousData,
  useInfiniteQuery,
  useQuery,
} from '@tanstack/react-query';
import {getGood, getGoodList, getGoods, search} from 'api/goodApi';
import {Animal} from 'types/goodMenu';
import {QueryKeys} from './keys';

const STALE_TIME = 1000 * 60 * 10;
const TAKE = 50;

export const useGoodQuery = (id: number) =>
  useQuery({
    queryKey: [QueryKeys.Good, id],
    queryFn: () => getGood(id),
    staleTime: STALE_TIME,
  });

export const useGoodListQuery = (ids: number[]) =>
  useQuery({
    queryKey: [QueryKeys.GoodList, ids],
    queryFn: () => getGoodList(ids),
    staleTime: STALE_TIME,
    placeholderData: keepPreviousData,
  });

export const useGoodsInfiniteQuery = (animal: Animal, groupId: number | null) =>
  useInfiniteQuery({
    queryKey: [QueryKeys.Goods, animal, groupId],
    queryFn: getGoods,
    initialPageParam: {
      animal,
      goodRequest: {groupId, skip: 0, take: TAKE},
    },
    getNextPageParam: lastPage => {
      if (lastPage.count > lastPage.skip + TAKE) {
        return {
          animal,
          goodRequest: {groupId, skip: lastPage.skip + TAKE, take: TAKE},
        };
      }
    },
    staleTime: STALE_TIME,
  });

export const useSearchInfiniteQuery = (query: string) =>
  useInfiniteQuery({
    queryKey: [QueryKeys.Search, query],
    queryFn: search,
    enabled: !!query,
    initialPageParam: {
      searchRequest: {query, skip: 0, take: TAKE},
    },
    getNextPageParam: lastPage => {
      if (lastPage.count > lastPage.skip + TAKE) {
        return {
          searchRequest: {query, skip: lastPage.skip + TAKE, take: TAKE},
        };
      }
    },
    staleTime: STALE_TIME,
  });
