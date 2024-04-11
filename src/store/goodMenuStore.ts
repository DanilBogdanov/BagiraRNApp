import {create} from 'zustand';
import {immer} from 'zustand/middleware/immer';
import {Animal, GoodGroup} from 'types/goodMenu';

type GoodMenuStore = {
  isDrawerOpened: boolean;
  setIsDrawerOpened: (opened: boolean) => void;
  selectedAnimal: Animal;
  setSelectedAnimal: (animal: Animal) => void;
  selectedGoodGroup: GoodGroup | null;
  setSelectedGoodGroup: (goodGroup: GoodGroup) => void;
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
        state.selectedGoodGroup = null;
        state.expanded = [];
      }),
    selectedGoodGroup: null,
    setSelectedGoodGroup: (goodGroup: GoodGroup) =>
      set(state => {
        state.selectedGoodGroup = goodGroup;
        state.isDrawerOpened = false;
      }),
    expanded: [],
    setExpanded: (items: number[]) =>
      set(state => {
        state.expanded = items;
      }),
  })),
);
