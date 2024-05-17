import {create} from 'zustand';
import {immer} from 'zustand/middleware/immer';

type SearchStore = {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
};

export const useSearchStore = create<SearchStore>()(
  immer(set => ({
    searchQuery: '',
    setSearchQuery: (query: string) =>
      set(state => {
        state.searchQuery = query;
      }),
  })),
);
