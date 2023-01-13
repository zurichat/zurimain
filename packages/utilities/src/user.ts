import { User } from "@zuri/types";

/**
 * @returns {Promise<object>} returns an object containing the user's info
 *
 * @description get the currently logged in user's info from the local cache or the server
 */
export const getUserInfo = async (): Promise<User> => {
  let user = {} as User;

  return user;
};
