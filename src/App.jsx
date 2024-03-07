import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Profile } from "./pages/account/Profile";
import { Layout } from "./layouts/layout";


function App() {
  return (
    <Routes>
      <Route element={<Layout />}> 
        <Route path="/" element={<Home />} />
        <Route path="/my-profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;
