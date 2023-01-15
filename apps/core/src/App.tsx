import { Button, Layout } from "@zuri/ui";
import { logger } from "@zuri/utilities";

function App() {
  logger.info("hi");
  return (
    <Layout>
      <Button />
    </Layout>
  );
}

export default App;
