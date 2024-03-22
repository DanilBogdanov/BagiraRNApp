import {useQuery} from '@tanstack/react-query';
import {getGoods} from 'api/goodApi';
import {Animal} from 'types/goodMenu';
import {GoodRequest} from 'types/good';
import {QueryKeys} from './keys';

const STALE_TIME = 1000 * 60 * 10;

export const useGoodsQuery = (animal: Animal, goodRequest: GoodRequest) =>
  useQuery({
    queryKey: [QueryKeys.Goods, animal, JSON.stringify(goodRequest)],
    queryFn: () => getGoods(animal, goodRequest),
    staleTime: STALE_TIME,
  });
