import { uiSliceActions, useAppDispatch } from "@zuri/utilities";

export default function ContactPage() {
  const dispatch = useAppDispatch();
  dispatch(uiSliceActions.setSidebarVisibility(false));

  return <div>contact page</div>;
}
