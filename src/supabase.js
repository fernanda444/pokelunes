
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://amyrekxihpkrdlsgrrsc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFteXJla3hpaHBrcmRsc2dycnNjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg1NjQxMjQsImV4cCI6MjA2NDE0MDEyNH0.qPC_HheAzQ5p4zBPOpPX9V8rdzbsnEHN0lsYcRfbsHk';
export const supabase = createClient(supabaseUrl, supabaseKey);