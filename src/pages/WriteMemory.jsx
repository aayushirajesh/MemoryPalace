import React from 'react'
import { useNavigate } from "react-router-dom";
import {MemoryEditor} from "../components/MemoryEditor";
import { createMemory } from "../services/memoryService";

export default function WriteMemory() {
  const navigate = useNavigate();

  async function handleSave(memoryData) {
    try {
      await createMemory(memoryData);
      navigate("/memorywall");
    } catch (error) {
      console.error(error.message);
      alert("Failed to save memory.");
    }
  }

  function handleCancel() {
    navigate("/memorywall");
  }

  return (
    <div className="flex-1 w-full flex flex-col justify-center py-6 md:py-12 px-4 relative z-10 select-none">
      <MemoryEditor
        onSave={handleSave}
        onCancel={handleCancel}
      />
    </div>
  );
}