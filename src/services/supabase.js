import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabasePublishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

// now anywhere in your app you can import supabase and use it to interact with your databaseS
export const supabase = createClient(supabaseUrl, supabasePublishableKey);