import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://oapprqrnvlewrfbwpezu.supabase.co';
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9hcHBycXJudmxld3JmYndwZXp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA2NDEyMDEsImV4cCI6MjAyNjIxNzIwMX0.MsNO214pEJUd9Gr0IhfDsw_dlEl3tIScj3Wcf7Pc7_8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;