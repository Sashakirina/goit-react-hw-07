import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./constants";
import { fetchContacts, addContact, deleteContact } from "./contactsOP";

const contactsSlice = createSlice({
	name: "contacts",
	initialState: initialState.contacts,
	extraReducers: (builder) => {
		builder
			.addCase(fetchContacts.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchContacts.fulfilled, (state, action) => {
				state.error = null;
				state.loading = false;
				state.items = action.payload;
			})
			.addCase(fetchContacts.rejected, (state) => {
				state.error = true;
			})
			.addCase(addContact.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(addContact.fulfilled, (state, action) => {
				state.loading = false;
				state.error = null;
				console.log(action.payload.value);
				state.items.push(action.payload.value);
			})
			.addCase(addContact.rejected, (state) => {
				state.error = true;
			})
			.addCase(deleteContact.pending, (state) => {
				state.loading = true;
			})
			.addCase(deleteContact.fulfilled, (state, action) => {
				state.loading = false;
				state.error = null;
				const index = state.items.findIndex(
					(item) => item.id === action.payload.id
				);
				state.items.splice(index, 1);
			})
			.addCase(deleteContact.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			});
	},
});

export const contactsReducer = contactsSlice.reducer;

export const selectContacts = (state) => state.contacts.items;
