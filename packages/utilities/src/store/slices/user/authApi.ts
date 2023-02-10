import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GenericResponse, Login, RegisterInput } from "@zuri/types";
import { userApi } from "./userApi";
import { BASE_API_URL } from "../../../constants";

const BASE_URL = BASE_API_URL;

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/api/auth/`
  }),
  endpoints: builder => ({
    registerUser: builder.mutation<GenericResponse, RegisterInput>({
      query(data) {
        return {
          url: "register",
          method: "POST",
          body: data
        };
      }
    }),
    loginUser: builder.mutation<
      { access_token: string; status: string },
      Login
    >({
      query(data) {
        return {
          url: "/auth/login",
          method: "POST",
          body: data,
          credentials: "include"
        };
      },
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          await dispatch(userApi.endpoints.getMe.initiate(null));
        } catch (error) {
          console.error(error);
        }
      }
    }),
    verifyEmail: builder.mutation<
      GenericResponse,
      { verificationCode: string }
    >({
      query({ verificationCode }) {
        return {
          url: `verifyemail/${verificationCode}`,
          method: "GET"
        };
      }
    }),
    logoutUser: builder.mutation<void, void>({
      query() {
        return {
          url: "logout",
          credentials: "include"
        };
      }
    })
  })
});

export const {
  useLoginUserMutation,
  useRegisterUserMutation,
  useLogoutUserMutation,
  useVerifyEmailMutation
} = authApi;
