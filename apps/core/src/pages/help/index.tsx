import { uiSliceActions, useAppDispatch } from "@zuri/utilities";

export default function HelpPage() {
  const dispatch = useAppDispatch();
  dispatch(uiSliceActions.setSidebarVisibility(false));

  return <div>help page</div>;
}
