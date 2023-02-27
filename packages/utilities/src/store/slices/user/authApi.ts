import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { ApiResponse, RegisterInput, User } from "@zuri/types";
import { BASE_API_URL } from "../../../constants";
import { userSliceActions } from "./slice";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_API_URL}/auth/`
  }),
  endpoints: builder => ({
    registerUser: builder.mutation<ApiResponse, RegisterInput>({
      query(data) {
        return {
          url: "/users",
          method: "POST",
          body: data
        };
      }
    }),
    loginUser: builder.mutation<
      ApiResponse<{ session_id: string; user: User }>,
      { email: string; password: string }
    >({
      query(data) {
        return {
          url: "/login",
          method: "POST",
          body: data,
          headers: {
            "Content-Type": "application/json",
            accept: "application/json"
          }
        };
      },
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(userSliceActions.setUser(data.data.user));
        } catch (error) {
          console.error(error);
        }
      }
    })
  })
});

export default authApi;
