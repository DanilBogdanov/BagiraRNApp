export interface GoodData {
  id: number;
  name: string;
  description: string | null;
  imgUrl: string;
  price: number;
  rest?: number;
}

export interface GoodResponse {
  take: number;
  skip: number;
  count: number;
  results: GoodData[];
}

export interface GoodRequest {
  groupId: number | null;
  take?: number;
  skip?: number;
}

export interface SearchRequest {
  query: string;
  take?: number;
  skip?: number;
}
