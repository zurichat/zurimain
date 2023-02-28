import { User } from "@zuri/types";
import { store } from "./store";

/**
 * @returns {User} returns an object containing the user's info
 *
 * @description get the currently logged in user's info from the local cache or the server
 */
export const getUserInfo = (): User => {
  const user = store.getState().user.user;

  if (!user) throw Error("There is no user logged in");

  return user;
};
