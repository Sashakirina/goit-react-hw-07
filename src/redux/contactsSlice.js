import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./constants";

const contactsSlice = createSlice({
	name: "contacts",
	initialState: initialState.contacts,
	reducers: {
		addContact: {
			reducer(state, action) {
				state.items.push(action.payload);
			},
			prepare(values) {
				return {
					payload: values,
				};
			},
		},
		deleteContact(state, action) {
			const index = state.items.findIndex(
				(contact) => contact.id === action.payload
			);
			state.items.splice(index, 1);
		},
	},
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

export const selectContacts = (state) => state.contacts.items;
