import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { User } from "@zuri/types";
import { BASE_API_URL } from "../../../constants";
import { userSliceActions } from "./slice";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_API_URL}/api/users/`
  }),
  tagTypes: ["User"],
  endpoints: builder => ({
    /** This requires your user id */
    getMe: builder.query<User, string>({
      query(user_id) {
        return {
          url: `/${user_id}`,
          method: "GET"
        };
      },
      transformResponse: (result: { data: { user: User } }) => result.data.user,
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(userSliceActions.setUser(data));
        } catch (error) {
          console.error(error);
        }
      }
    })
  })
});
