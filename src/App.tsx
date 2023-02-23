import { Layout } from "./components";

import { Routes, Route, Navigate } from "react-router-dom";
import "./styles/index.css";
import { Home } from "./pages";

export function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<h1>New</h1>} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </Layout>
  );
}
