export interface GoodMenu {
  id: number;
  name: string;
  path: string;
  children: GoodMenu[] | null;
}

export enum Animal {
  All = 'All',
  Cats = 'Cats',
  Dogs = 'Dogs',
  Others = 'Others',
}
