import { User } from "@zuri/types";
import { emailRegex } from "./regex";
import { store } from "./store";

/**
 * @param {string} userEmail email of the user to get
 * @param {string} workspaceName name of workspace
 * @param {string} token auth token of the user
 *
 * @returns {Promise<User>} returns an object containing the user's info
 *
 * @description uses the email to get the user's info in the workspace from the local cache or the server
 */
export const getWorkspaceUser = async (
  userEmail: string,
  workspaceName: string,
  token: string
): Promise<User | undefined> => {
  // User identifier should be email address
  if (!userEmail.match(emailRegex))
    throw Error("Workspace user email must be a valid email address.");

  const workspaceUsers = await getWorkspaceUsers(workspaceName, token);

  const workspaceUser = workspaceUsers.find(
    workspaceUser => workspaceUser.email === userEmail
  );

  if (!workspaceUser) throw Error("User not found in workspace");

  return workspaceUser;
};

/**
 * @returns {Promise<User>} returns an object containing the user's info
 *
 * @description uses the email to get the user's info in the current workspace from the local cache or the server
 */
export const getCurrentWorkspaceUser = async (): Promise<User> => {
  const user = store.getState().user.user;

  if (!user) throw Error("There is no user logged in");

  const currentWorkspaceUsers = await getCurrentWorkspaceUsers();

  const currentUser = currentWorkspaceUsers.find(
    workspaceUser => workspaceUser.email === user.email
  );

  if (!currentUser) throw Error("User not found in current workspace");

  return currentUser;
};

/**
 * @param {string} workspaceName name of workspace
 * @param {string} token auth token of the user
 *
 * @returns {Promise<User[]>} returns an array containing all the users in the workspace
 *
 * @description gets all the users in the workspace from the local cache or the server
 */
export const getWorkspaceUsers = async (
  workspaceName: string,
  token: string
): Promise<User[]> => {
  const workspaceUsers = {} as User[];

  // this is just to ignore eslint errors till the actual logic is implemented
  [workspaceName, token];

  return workspaceUsers;
};

/**
 * @returns {Promise<User[]>} returns an array containing all the users in the current workspace
 *
 * @description gets all the users in the current workspace from the local cache or the server
 */
export const getCurrentWorkspaceUsers = async (): Promise<User[]> => {
  const currentWorkspace = localStorage.getItem("currentWorkspace");
  const userToken = sessionStorage.getItem("token");

  if (!currentWorkspace) throw Error("No current workspace is available");
  if (!userToken) throw Error("No user token is available");

  return await getWorkspaceUsers(currentWorkspace, userToken);
};
