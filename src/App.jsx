import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Header/Home";
import Profile from "./components/Header/Profile";
import Compare from "./components/Header/Compare";
import Menu from "./components/Header/Menu";
import Layout from "./components/Layout/Layout";
import Charger from "./components/Header/Charger";
import NewsPage from "./components/NewsPage";

function App() {
  return (
    <div className="container">
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/compare" element={<Compare />}></Route>
            <Route path="/menu" element={<Menu />}></Route>
            <Route path="/charger" element={<Charger />}></Route>
            <Route path="/news" element={<NewsPage />}></Route>
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
