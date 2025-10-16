import { AppState, Platform } from 'react-native'
import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient, processLock } from '@supabase/supabase-js'

const supabaseUrl = "https://jnnzytowjgtorxkkkmdy.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impubnp5dG93amd0b3J4a2trbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA1MDQ5NzEsImV4cCI6MjA3NjA4MDk3MX0.7lr2DMOw1uMEYZXz7cPdfjjxEN_bsFDEICPN0d8s3QE"

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    ...(Platform.OS !== "web" ? { storage: AsyncStorage } : {}),
    autoRefreshToken: true,
    persistSession: false,
    detectSessionInUrl: false,
    lock: processLock,
  },
})

if (Platform.OS !== "web") {
  AppState.addEventListener('change', (state) => {
    if (state === 'active') {
      supabase.auth.startAutoRefresh()
    } else {
      supabase.auth.stopAutoRefresh()
    }
  })
}