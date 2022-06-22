import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://bing-news-search1.p.rapidapi.com',
        prepareHeaders: (header) => {
            header.set('X-BingApis-SDK', 'true');
            header.set("X-RapidAPI-Host", "bing-news-search1.p.rapidapi.com");
            header.set("X-RapidAPI-Key", "85021f4624msh6d8f8e565368283p134927jsnea4ae19f1b57");

            return header;
        }
    }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({ selectedNews, count }) => (`/news/search?q=${selectedNews}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        }),
    }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;



// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const cryptoNewsHeaders = {
//     'x-bingapis-sdk': 'true',
//     'x-rapidapi-key': "85021f4624msh6d8f8e565368283p134927jsnea4ae19f1b57",
//     'x-rapidapi-host': "bing-news-search1.p.rapidapi.com",
// };

// const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

// export const cryptoNewsApi = createApi({
//     reducerPath: 'cryptoNewsApi',
//     baseQuery: fetchBaseQuery({ baseUrl: 'https://bing-news-search1.p.rapidapi.com' }),
//     endpoints: (builder) => ({
//         getCryptoNews: builder.query({
//             query: ({ selectedNews, count }) => createRequest(`/news/search?q=${selectedNews}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
//         }),
//     }),
// });

// export const { useGetCryptoNewsQuery } = cryptoNewsApi;