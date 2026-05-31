import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import WriteMemory from "./pages/WriteMemory";
import MemoryWall from "./pages/MemoryWall";
import MemoryPage from "./pages/MemoryPage";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/write" element={<ProtectedRoute><WriteMemory /></ProtectedRoute>} />
      <Route path="/memorywall" element={<ProtectedRoute><MemoryWall /></ProtectedRoute>} />
      <Route path="/memory/:id" element={<ProtectedRoute><MemoryPage /></ProtectedRoute>} />
    </Routes>
  );
}

export default App;