import axios from 'axios';
import {Animal, GoodMenuData} from 'types/goodMenu';

const BASE_URL = 'https://danildev.net/api/bagira/v1/Menu';

export async function getGoodMenu(animal: Animal): Promise<GoodMenuData[]> {
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

  const {data: goodMenu} = await axios.get<GoodMenuData[]>(path);

  return goodMenu;
}
