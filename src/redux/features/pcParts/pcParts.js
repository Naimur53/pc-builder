import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: [
    {
      category: "CPU",
      img: "https://cdn-icons-png.flaticon.com/512/1213/1213029.png",
      selectedProduct: {},
    },
    {
      category: "Motherboard",
      img: "https://cdn-icons-png.flaticon.com/512/7910/7910901.png",
      selectedProduct: {},
    },
    {
      category: "RAM",
      img: "https://smashicons.com/uploads/media/icon_thumbnail/0005/33/cfc23c9b0b86cc55b4bd35b4b25e5b5a4c6cc2b0.png",
      selectedProduct: {},
    },
    {
      category: "Power Supply Unit",
      img: "https://cdn-icons-png.flaticon.com/512/3868/3868672.png",
      selectedProduct: {},
    },
    {
      category: "Storage Device",
      img: "https://cdn-icons-png.flaticon.com/512/5198/5198518.png",
      selectedProduct: {},
    },
    {
      category: "Monitor",
      img: "https://icons.veryicon.com/png/o/internet--web/digital-product-icon/display-17.png",
      selectedProduct: {},
    },
    {
      category: "Others",
      img: "https://cdn-icons-png.flaticon.com/512/3419/3419102.png",
      selectedProduct: {},
    },
  ],
  isAllSelected: false,
};

export const counterSlice = createSlice({
  name: "pcParts",
  initialState,
  reducers: {
    addProduct: (state, { payload }) => {
      const allData = state.category.map((single) => {
        if (single.category === payload.category) {
          const pre = { ...single, selectedProduct: payload };
          return pre;
        }
        return single;
      });
      state.category = allData;
      // check all is all selected
      const isAllSelected = allData.every(
        (single) => Object.keys(single.selectedProduct).length
      );
      state.isAllSelected = isAllSelected;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProduct } = counterSlice.actions;

export default counterSlice.reducer;
