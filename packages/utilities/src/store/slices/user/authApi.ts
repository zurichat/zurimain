import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { LoginInput } from '../../pages/login.page';
// import { RegisterInput } from '../../pages/register.page';
import { GenericResponse, Login } from '@zuri/types';
import { userApi } from './userApi';

const BASE_URL ='https://api.zuri.chat';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/api/auth/`,
  }),
  endpoints: (builder) => ({
    // registerUser: builder.mutation<IGenericResponse, RegisterInput>({
    //   query(data) {
    //     return {
    //       url: 'register',
    //       method: 'POST',
    //       body: data,
    //     };
    //   },
    // }),
    loginUser: builder.mutation< { access_token: string; status: string }, Login>({
      query(data) {
        return {
          url: '/auth/login',
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
          console.error(error)
        }
      },
    }),
    // verifyEmail: builder.mutation<
    //   IGenericResponse,
    //   { verificationCode: string }
    // >({
    //   query({ verificationCode }) {
    //     return {
    //       url: `verifyemail/${verificationCode}`,
    //       method: 'GET',
    //     };
    //   },
    // }),
    // logoutUser: builder.mutation<void, void>({
    //   query() {
    //     return {
    //       url: 'logout',
    //       credentials: 'include',
    //     };
    //   },
    // }),
  }),
});

export const {
  useLoginUserMutation,
  // useRegisterUserMutation,
  // useLogoutUserMutation,
  // useVerifyEmailMutation,
} = authApi;




// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { GenericResponse, Login } from '@zuri/types'

// export const api = createApi({
//     baseQuery: fetchBaseQuery({
//         baseUrl: 'https://api.zuri.chat',
//     }),
//     endpoints: (builder) => ({
//     login: builder.mutation<GenericResponse, Login>({
//       query: (credentials) => ({
//         url: '/auth/login',
//         method: 'POST',
//         body: credentials,
//       }),
//     }),
//   }),
// })

// export const { useLoginMutation } = api;