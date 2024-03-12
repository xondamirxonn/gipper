import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Profile } from "./pages/account/Profile";
import { Layout } from "./layouts/layout";
import { SingleData } from "./pages/single-page/single-data";
import { SingleCategories } from "./pages/All-Single-Categories/single-categories";
import { Cart } from "./pages/Cart/Cart";
import { Qualifiers } from "./pages/qualifiers/qualifiers";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/my-profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:datakey/:id" element={<SingleData />} />
        <Route path="/catagories/:datakey" element={<SingleCategories />} />
        <Route path="/qualifiers" element={<Qualifiers />} />
      </Route>
    </Routes>
  );
}

export default App;
