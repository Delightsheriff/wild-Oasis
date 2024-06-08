import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://iixbzzrbzydtjsgyuokr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlpeGJ6enJienlkdGpzZ3l1b2tyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc1MTQ3MjUsImV4cCI6MjAzMzA5MDcyNX0.Im1fBCwKRfg0mNy1x4I9ywy_9hRI1FcGaXV9HmyikoM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
