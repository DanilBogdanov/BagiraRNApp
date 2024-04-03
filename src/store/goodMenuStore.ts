import {create} from 'zustand';
import {immer} from 'zustand/middleware/immer';
import {Animal} from 'types/goodMenu';

type GoodMenuStore = {
  isDrawerOpened: boolean;
  setIsDrawerOpened: (opened: boolean) => void;
  selectedAnimal: Animal;
  setSelectedAnimal: (animal: Animal) => void;
  selectedGroup: number | null;
  setSelectedGroup: (id: number) => void;
  expanded: number[];
  setExpanded: (items: number[]) => void;
};

export const useGoodMenuStore = create<GoodMenuStore>()(
  immer(set => ({
    isDrawerOpened: true,
    setIsDrawerOpened: (opened: boolean) =>
      set(state => {
        state.isDrawerOpened = opened;
      }),
    selectedAnimal: Animal.All,
    setSelectedAnimal: (animal: Animal) =>
      set(state => {
        state.selectedAnimal = animal;
        state.selectedGroup = null;
        state.expanded = [];
      }),
    selectedGroup: null,
    setSelectedGroup: (id: number) =>
      set(state => {
        state.selectedGroup = id;
        state.isDrawerOpened = false;
      }),
    expanded: [],
    setExpanded: (items: number[]) =>
      set(state => {
        state.expanded = items;
      }),
  })),
);
