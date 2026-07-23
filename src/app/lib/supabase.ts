// src/lib/supabase.ts
import { createClient } from "@supabase/supabase-js";

const rawSupabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

function isValidHttpUrl(value?: string) {
  if (!value) return false;
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

const supabaseUrl = isValidHttpUrl(rawSupabaseUrl)
  ? rawSupabaseUrl!
  : "http://localhost";

const supabaseAnonKey = supabaseKey || "build-time-placeholder-anon-key";

if (!isValidHttpUrl(rawSupabaseUrl) || !supabaseKey) {
  console.warn(
    "Supabase environment variables are not configured correctly. Falling back to local defaults for build-time compatibility.",
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
