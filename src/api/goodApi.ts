import Config from 'react-native-config';
import axios from 'axios';
import {Animal} from 'types/goodMenu';
import {GoodData, GoodRequest, GoodResponse, SearchRequest} from 'types/good';

const BASE_URL = `${Config.API_URL}/api/bagira/v1/goods`;

export async function getGood(id: number) {
  const path = `${BASE_URL}/${id}`;

  const {data: good} = await axios.get<GoodData>(path);

  return good;
}

export async function getGoods({
  pageParam: {animal, goodRequest},
}: {
  pageParam: {
    animal: Animal;
    goodRequest: GoodRequest;
  };
}): Promise<GoodResponse> {
  let path = BASE_URL;

  switch (animal) {
    case Animal.Cats:
      path += '/cats';
      break;
    case Animal.Dogs:
      path += '/dogs';
      break;
    case Animal.Others:
      path += '/others';
      break;
  }

  const {data: goodResponse} = await axios.get<GoodResponse>(path, {
    params: goodRequest,
  });

  return goodResponse;
}

export async function getGoodList(ids: number[]): Promise<GoodData[]> {
  if (ids.length === 0) {
    return [];
  }

  const path = `${BASE_URL}/list`;
  const idsParam = ids.join(',');

  const {data: goods} = await axios.get<GoodData[]>(path, {
    params: {ids: idsParam},
  });

  return goods;
}

export async function search({
  pageParam: {searchRequest},
}: {
  pageParam: {searchRequest: SearchRequest};
}): Promise<GoodResponse> {
  const path = `${BASE_URL}/search`;

  const {data: goods} = await axios.get<GoodResponse>(path, {
    params: searchRequest,
  });

  return goods;
}
