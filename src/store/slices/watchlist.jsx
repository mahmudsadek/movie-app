import { createSlice } from "@reduxjs/toolkit";

const INT_STATE = {
  state:[]
} 

const watchlistSlice = createSlice({
	name: "watchlist",
	initialState: INT_STATE,
	reducers: {
		addToWatchlist: (state, action) => {
      if(!state.state.find((m) => (m.id === action.payload.id)))
			  state.state = [...state.state, action.payload];
		},
		removeFromWatchlis: (state, action) => {
			state.state = state.state.filter((m) => (m.id !== action.payload.id));
		},
	},
});

export const { addToWatchlist, removeFromWatchlis } = watchlistSlice.actions;
export default watchlistSlice.reducer;