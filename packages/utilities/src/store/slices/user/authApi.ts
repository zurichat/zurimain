import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GenericResponse, RegisterInput } from "@zuri/types";
import { userApi } from "./userApi";
import { BASE_API_URL } from "../../../constants";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_API_URL}/api/auth/`
  }),
  endpoints: builder => ({
    registerUser: builder.mutation<GenericResponse, RegisterInput>({
      query(data) {
        return {
          url: "/users",
          method: "POST",
          body: data
        };
      }
    }),
    loginUser: builder.mutation({
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
    })
  })
});

export default authApi;
