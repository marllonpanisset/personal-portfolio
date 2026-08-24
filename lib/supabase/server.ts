import { createClient } from "@supabase/supabase-js";

export class SupabaseServerConfigurationError extends Error {
  constructor() {
    super("A configuração server-side do Supabase está incompleta.");
    this.name = "SupabaseServerConfigurationError";
  }
}

export function createSupabaseServerClient() {
  const url = process.env.SUPABASE_URL;
  const secretKey = process.env.SUPABASE_SECRET_KEY;

  if (!url || !secretKey) {
    throw new SupabaseServerConfigurationError();
  }

  return createClient(url, secretKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
      detectSessionInUrl: false,
    },
  });
}
