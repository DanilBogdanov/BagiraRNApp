import {create} from 'zustand';
import {immer} from 'zustand/middleware/immer';
import {Animal} from 'types/goodMenu';

type GoodMenuStore = {
  selectedAnimal: Animal;
  setSelectedAnimal: (animal: Animal) => void;
};

export const useGoodMenuStore = create<GoodMenuStore>()(
  immer(set => ({
    selectedAnimal: Animal.All,
    setSelectedAnimal: (animal: Animal) =>
      set(state => {
        state.selectedAnimal = animal;
      }),
  })),
);
