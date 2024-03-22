import axios from 'axios';
import {Animal} from 'types/goodMenu';
import {GoodRequest, GoodResponse} from 'types/good';

const BASE_URL = 'https://danildev.net/api/bagira/v1/goods';

export async function getGoods(
  animal: Animal,
  goodRequest: GoodRequest,
): Promise<GoodResponse> {
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
