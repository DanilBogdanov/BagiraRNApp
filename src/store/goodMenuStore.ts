import {create} from 'zustand';
import {immer} from 'zustand/middleware/immer';
import {Animal} from 'types/goodMenu';

type GoodMenuStore = {
  selectedAnimal: Animal;
  setSelectedAnimal: (animal: Animal) => void;
  selectedGroup: number | null;
  setSelectedGroup: (id: number) => void;
  expanded: number[];
  setExpanded: (items: number[]) => void;
};

export const useGoodMenuStore = create<GoodMenuStore>()(
  immer(set => ({
    selectedAnimal: Animal.All,
    setSelectedAnimal: (animal: Animal) =>
      set(state => {
        state.selectedAnimal = animal;
      }),
    selectedGroup: null,
    setSelectedGroup: (id: number) =>
      set(state => {
        state.selectedGroup = id;
      }),
    expanded: [],
    setExpanded: (items: number[]) =>
      set(state => {
        state.expanded = items;
      }),
  })),
);
