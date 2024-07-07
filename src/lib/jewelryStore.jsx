

import create from 'zustand';

const useJewelryStore = create((set) => ({
  suggestions: [],
  setSuggestions: (filteredItems) => set({ suggestions: filteredItems }),
}));

export default useJewelryStore;
