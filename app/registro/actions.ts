"use server"

import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"

export type SignupState = {
  error?: string
}

export async function signup(
  _prev: SignupState,
  formData: FormData
): Promise<SignupState> {
  const name = String(formData.get("name") ?? "").trim()
  const email = String(formData.get("email") ?? "").trim()
  const password = String(formData.get("password") ?? "")
  const confirm = String(formData.get("confirm-password") ?? "")

  if (!name || !email || !password) {
    return { error: "Preencha todos os campos." }
  }
  if (password.length < 8) {
    return { error: "A senha deve ter pelo menos 8 caracteres." }
  }
  if (password !== confirm) {
    return { error: "As senhas não coincidem." }
  }

  const supabase = await createClient()
  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { full_name: name },
    },
  })

  if (error) {
    return { error: error.message }
  }

  redirect("/login")
}
