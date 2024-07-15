import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://sfjxdpkunemqabpuluuy.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNmanhkcGt1bmVtcWFicHVsdXV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA5NDcwMzgsImV4cCI6MjAzNjUyMzAzOH0.waSqaaq5urHANqy0Sw_mvirAuKrJJR4FrcIQHMFAC0Y"

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})