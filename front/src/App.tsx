import React from "react";
import { Routes, Route } from "react-router-dom";

import Main from "./pages/main";
import Layout from "./components/layout";
import ItemPage from "./pages/itemPage";
import Basket from "./pages/basket";
import Favorites from "./pages/favorites";

function App() {
  return (
    <Layout>
      <div className="container">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="product/:id" element={<ItemPage />} />
        </Routes>
      </div>
    </Layout>
  );
}

export default App;
