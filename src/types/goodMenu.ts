export interface GoodMenuData {
  id: number;
  name: string;
  path: string;
  children: GoodMenuData[] | null;
}

export enum Animal {
  All = 'All',
  Cats = 'Cats',
  Dogs = 'Dogs',
  Others = 'Others',
}
