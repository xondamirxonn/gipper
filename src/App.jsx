import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Profile } from "./pages/account/Profile";
import { Layout } from "./layouts/layout";
import { SingleData } from "./pages/single-page/single-data";


function App() {
  return (
    <Routes>
      <Route element={<Layout />}> 
        <Route path="/" element={<Home />} />
        <Route path="/my-profile" element={<Profile />} />
        <Route path="/product/:datakey/:id" element={<SingleData />} />
      </Route>
    </Routes>
  );
}

export default App;
