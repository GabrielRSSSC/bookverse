import { cookies } from "next/headers"
import { createServerClient } from "@supabase/ssr"

function hasSupabaseEnv() {
  return Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  )
}

export async function createClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  const cookieStore = await cookies()

  if (!hasSupabaseEnv()) {
    return {
      auth: {
        async getUser() {
          return { data: { user: null }, error: null }
        },
        async signInWithPassword() {
          return {
            data: { user: null, session: null },
            error: { message: "Supabase não configurado." },
          }
        },
        async signUp() {
          return {
            data: { user: null, session: null },
            error: { message: "Supabase não configurado." },
          }
        },
        async signOut() {
          return { error: null }
        },
      },
    } as unknown as Awaited<ReturnType<typeof createServerClient>>
  }

  return createServerClient(url!, key!, {
    cookies: {
      getAll() {
        return cookieStore.getAll()
      },

      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options)
          )
        } catch {
          // The `setAll` method was called from a Server Component.
          // This can be ignored if you have middleware refreshing
          // user sessions.
        }
      },
    },
  })
}
