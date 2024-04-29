import { createSlice } from "@reduxjs/toolkit";

const arr = [];

const formDataSlice = createSlice({
  name: "FormData",
  initialState: arr,
  reducers: {
    addData(state, action) {
      let { name, address, postalCode, phone, education, pass_year } =
        action.payload;
      console.log(address);
      const newForm = {
        id: Math.random() * 1000,
        name: name,
        address: address,
        postalCode,
        phone,
        education,
        pass_year,
      };
      state.push(newForm);
      console.log(state);
    },
    deleteForm(state, action) {
      const index = state.findIndex((element) => element.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const { addData, deleteForm } = formDataSlice.actions;
export default formDataSlice.reducer;
