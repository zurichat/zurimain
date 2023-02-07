import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { userSliceActions } from './slice';
import { User } from '@zuri/types';

const BASE_URL = 'https://api.zuri.chat';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/api/users/`,
  }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    getMe: builder.query<User, null>({
      query() {
        return {
          url: '/',
          credentials: 'include',
        };
      },
      transformResponse: (result: { data: { user: User } }) =>
        result.data.user,
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(userSliceActions.setUser(data));
        } catch (error) {
            console.error(error)
        }
      },
    }),
  }),
});

