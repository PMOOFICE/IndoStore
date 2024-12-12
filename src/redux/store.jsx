import { configureStore } from '@reduxjs/toolkit' 
import cartSlice from './cartSlice'

export const store = configureStore({
  reducer: {
    cart : cartSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: {
            // Ignore these action paths in serializable check
            ignoredActionPaths: ['payload.time'],
            // Ignore these paths in the state in serializable check
            ignoredPaths: ['cart.items.time'],
        },
    }),
})