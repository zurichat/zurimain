import { configureStore } from "@reduxjs/toolkit";
import type { TypedUseSelectorHook } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import uiReducer from "./slices/ui/slice";
import userReducer from "./slices/user/slice";

/**
 * This plugin provides a way to subscribe to a shared state and access things like user information
 *
 * To subscribe you simply have to wrap your app with a react-redux provider and pass this as the store
 * @example
 * ```ts
 * import { store } from "@zuri/utilities";
 * import { Provider } from "react-redux";
 *
 * const Root = () => {
 *     return {
 *         <Provider store={store}>
 *             <App/>
 *         </Provider>
 *     }
 * }
 * ```
 *
 * If you are using typescript you can also get typed useSelectors and useDispatches
 * @example
 * ```ts
 * import type { AppDispatch, AppState } from "@zuri/utilities";
 * import type { TypedUseSelectorHook } from "react-redux";
 * import { useDispatch, useSelector } from "react-redux";
 *
 * export const useAppDispatch: () => AppDispatch = useDispatch;
 * export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
 * ```
 */
export const store = configureStore({
  reducer: {
    user: userReducer,
    ui: uiReducer
  },
  devTools: process.env.NODE_ENV !== "production"
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

export default store;
