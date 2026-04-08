import { configureStore } from '@reduxjs/toolkit'
import savedReducer from './savedSlice'

const store = configureStore({
  reducer: {
    saved: savedReducer
  }
})

// 🔹 Save to localStorage on every change
store.subscribe(() => {
  try {
    const state = store.getState()
    localStorage.setItem(
      'saved',
      JSON.stringify(state.saved.items)
    )
  } catch {
    // ignore errors
  }
})

export default store