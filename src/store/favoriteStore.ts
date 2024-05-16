import {enableMapSet} from 'immer';
enableMapSet();

import {create} from 'zustand';
import {StorageValue, persist} from 'zustand/middleware';
import {immer} from 'zustand/middleware/immer';
import {PersistStorage} from 'zustand/middleware';
import {mmkvStorage} from 'store';

type FavoriteStore = {
  favorite: Set<number>;
  add: (id: number) => void;
  remove: (id: number) => void;
};

const storage: PersistStorage<FavoriteStore> = {
  setItem: (name, newValue: StorageValue<FavoriteStore>) => {
    const value = JSON.stringify({
      state: {
        ...newValue.state,
        favorite: Array.from(newValue.state.favorite.keys()),
      },
    });

    mmkvStorage.set(name, value);
  },
  getItem: name => {
    const value = mmkvStorage.getString(name);

    if (!value) {
      return null;
    }

    const {state} = JSON.parse(value);

    return {
      state: {
        ...state,
        favorite: new Set(state.favorite),
      },
    };
  },
  removeItem: name => {
    return mmkvStorage.delete(name);
  },
};

export const useFavoriteStore = create<FavoriteStore>()(
  persist(
    immer(set => ({
      favorite: new Set<number>(),
      add: (id: number) =>
        set(state => {
          state.favorite.add(id);
        }),
      remove: (id: number) => {
        set(state => {
          state.favorite.delete(id);
        });
      },
    })),
    {
      version: 1,
      name: 'favorite-storage',
      storage,
    },
  ),
);
