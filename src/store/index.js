import { configureStore } from "@reduxjs/toolkit"
import watchlist from "./slices/watchlist"
const store = configureStore({
  reducer: {
    watchlist : watchlist
  }
})

export default store