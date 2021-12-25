import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  filter: "",
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    setContacts: (state, { payload }) => ({ ...state, items: payload }),
    addContacts: (state, { payload }) => ({
      ...state,
      items: [...state.items, payload],
    }),
    deleteContacts: (state, { payload }) => ({
      ...state,
      items: state.items.filter((contact) => contact.id !== payload),
    }),
    updateFilter: (state, { payload }) => ({ ...state, filter: payload }),
  },
});
export const { setContacts, addContacts, deleteContacts, updateFilter } =
  contactsSlice.actions;
export default contactsSlice.reducer;
// export default contactsSlice;
