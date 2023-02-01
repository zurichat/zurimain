import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { Us } from '@zuri/types';
import { userApi } from './userAPi';

const BASE_URL = 'http://api.zuri.chat';

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}/auth/`,
    }),
    endpoints: (builder) => ({
        loginUser: builder.mutation({
            query(data) {
                return {
                    url: '/login',
                    method: 'POST',
                    body: data,
                    credentials: 'include',
                };
            },
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                await queryFulfilled;
                await dispatch(userApi.endpoints.getMe.initiate(null));
                } catch (error) {
                    return
                }
            },
                })
    })
})

export const {
    useLoginUserMutation
} = authApi;