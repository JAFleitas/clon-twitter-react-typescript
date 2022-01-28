import { Route, Routes } from "react-router-dom";
import Layout from "./layaout";
import FeedScreen from "./pages/feed";

const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<FeedScreen />} />
      </Routes>
    </Layout>
  );
};
export default App;
