import { Route, Routes } from "react-router";

import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import BehindTheScenes from "./pages/BehindTheScenes.jsx";
import Screenshots from "./pages/Screenshots.jsx";
import Activities from "./pages/Activities.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/behind-the-scenes" element={<BehindTheScenes />} />
        <Route path="/screenshots" element={<Screenshots />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}
