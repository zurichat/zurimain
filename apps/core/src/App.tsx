import { Layout } from "@zuri/ui";
import { store } from "@zuri/utilities";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
}

export default App;
