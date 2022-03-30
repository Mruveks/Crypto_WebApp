import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '39ac1e80f2mshbed92c404683f48p1dd532jsn5239aae3031e',

    params: {referenceCurrencyUuid: 'yhjMzLPhuIDl'}
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        }),
        getCryptoDetails:  builder.query({
            query: (UUID) => createRequest(`/coin/${UUID}`)
        })
    })
});

export const { useGetCryptosQuery, useGetCryptoDetailsQuery } = cryptoApi;

