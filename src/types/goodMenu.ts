export interface GoodMenuData {
  id: number;
  name: string;
  path: string;
  children: GoodMenuData[] | null;
}

export enum Animal {
  All = 'Все',
  Cats = 'Кошки',
  Dogs = 'Собаки',
  Others = 'Другие',
}

export interface GoodGroup {
  id: number;
  name: string;
}
