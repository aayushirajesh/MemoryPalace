import { supabase } from "./supabase";

export async function createMemory({
  title,
  content,
  mood,
}) {
  const {
    data,
    error,
  } = await supabase
    .from("memories")
    .insert([
      {
        title,
        content,
        mood,
      },
    ])
    .select()
    .single();

  if (error) throw error;

  return data;
}