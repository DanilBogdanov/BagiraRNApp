import {useQuery} from '@tanstack/react-query';
import {QueryKeys} from './keys';
import {getGoodMenu} from 'api/goodMenuApi';
import {Animal} from 'types/goodMenu';

const STALE_TIME = 1000 * 60 * 10;

export const useGoodMenuQuery = (animal: Animal) =>
  useQuery({
    queryKey: [QueryKeys.GoodMenu, animal],
    queryFn: () => getGoodMenu(animal),
    staleTime: STALE_TIME,
  });
