import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./constants";

const filtersSlice = createSlice({
	name: "filters",
	initialState: initialState.filters,
	reducers: {
		setFilter: (state, { payload }) => {
			state.name = payload;
		},
	},
});

export const { setFilter } = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;

export const selectFilter = (state) => state.filters.name;
