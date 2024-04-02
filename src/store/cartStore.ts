import {enableMapSet} from 'immer';
enableMapSet();

import {create} from 'zustand';
import {StorageValue, persist} from 'zustand/middleware';
import {immer} from 'zustand/middleware/immer';
import {PersistStorage} from 'zustand/middleware';
import {mmkvStorage} from 'store';

type CartStore = {
  cart: Map<number, number>;
  add: (id: number) => void;
  remove: (id: number) => void;
  set: (id: number, count: number) => void;
  increase: (id: number) => void;
  decrease: (id: number) => void;
  clear: () => void;
};

const storage: PersistStorage<CartStore> = {
  setItem: (name, newValue: StorageValue<CartStore>) => {
    const value = JSON.stringify({
      state: {
        ...newValue.state,
        cart: Array.from(newValue.state.cart.entries()),
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
        cart: new Map(state.cart),
      },
    };
  },
  removeItem: name => {
    return mmkvStorage.delete(name);
  },
};

export const useCartStore = create<CartStore>()(
  persist(
    immer(set => ({
      cart: new Map<number, number>(),
      add: (id: number) =>
        set(state => {
          state.cart.set(id, 1);
        }),
      remove: (id: number) => {
        set(state => {
          state.cart.delete(id);
        });
      },
      set: (id: number, value: number) => {
        set(state => {
          if (value > 0) {
            state.cart.set(id, value);
          }
        });
      },
      increase: (id: number) =>
        set(state => {
          const prevValue = state.cart.get(id);

          if (prevValue) {
            state.cart.set(id, prevValue + 1);
          }
        }),
      decrease: (id: number) => {
        set(state => {
          const prevValue = state.cart.get(id);

          if (prevValue) {
            if (prevValue === 1) {
              state.cart.delete(id);
            } else {
              state.cart.set(id, prevValue - 1);
            }
          }
        });
      },
      clear: () => {
        set(state => {
          state.cart.clear();
        });
      },
    })),
    {
      version: 1,
      name: 'cart-storage',
      storage,
    },
  ),
);
