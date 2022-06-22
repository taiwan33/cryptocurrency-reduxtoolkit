import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://coinranking1.p.rapidapi.com',
        prepareHeaders: (header) => {
            header.set("X-RapidAPI-Host", "coinranking1.p.rapidapi.com");
            header.set("X-RapidAPI-Key", "85021f4624msh6d8f8e565368283p134927jsnea4ae19f1b57");

            return header;
        }
    }),
    endpoints: (builder) => ({
        getCoins: builder.query({
            query: (count) => (`/coins?limit=${count}`),
        }),
        getCoin: builder.query({
            query: (uuid) => `/coin/${uuid}`,
        }),
        getCoinHistory: builder.query({
            query: ({ cryptoId, timeperiod }) => `/coin/${cryptoId}/history?timeperiod=${timeperiod}`,
        })
    }),
});

export const { useGetCoinsQuery, useGetCoinQuery, useGetCoinHistoryQuery } = cryptoApi;

