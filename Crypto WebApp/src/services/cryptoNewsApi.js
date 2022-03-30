import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders = {

          'X-BingApis-SDK': 'true',
          'X-rapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
          'X-rapidAPI-Key': '39ac1e80f2mshbed92c404683f48p1dd532jsn5239aae3031e' 
}
const baseUrl ='https://bing-news-search.p.rapidapi.com';

const createRequest = (url) => ({url, headers: cryptoNewsHeaders});

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({ newsCategory, count}) => 
            createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        })
    })
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;