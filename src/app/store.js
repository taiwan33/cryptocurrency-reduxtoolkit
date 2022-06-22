import { configureStore } from '@reduxjs/toolkit'
import { cryptoApi } from '../services/cryptoApi'
import { cryptoNewsApi } from '../services/cryptoNewsApi'
import { setupListeners } from "@reduxjs/toolkit/dist/query"

export const store = configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(cryptoApi.middleware),
    middlewareNews: getDefaultMiddleware =>
        getDefaultMiddleware().concat(cryptoNewsApi.middlewareNews)
})
setupListeners(store.dispatch)