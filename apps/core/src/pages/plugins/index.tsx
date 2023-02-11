import { uiSliceActions, useAppDispatch } from "@zuri/utilities";

export default function PluginsPage() {
  const dispatch = useAppDispatch();
  dispatch(uiSliceActions.setSidebarVisibility(false));

  return <div>plugins page</div>;
}
