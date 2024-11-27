import { ReactNode } from "react";
import Books from "./components/Books";
import Layout from "./layouts/Layout";

function App(): ReactNode {
  return (
    <Layout>
      <Books />
    </Layout>
  );
}

export default App;