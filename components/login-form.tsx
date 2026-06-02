"use client"

import { useActionState, useState } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Eye, EyeOff, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

import { login, type LoginState } from "@/app/login/actions"

const initialState: LoginState = {}

export function LoginForm() {
  const searchParams = useSearchParams()
  const redirectTo = searchParams.get("redirectTo") ?? "/home"

  const [showPassword, setShowPassword] = useState(false)
  const [remember, setRemember] = useState(false)
  const [state, formAction, isPending] = useActionState(login, initialState)

  return (
    <form action={formAction} className="flex flex-col gap-6">
      <input type="hidden" name="redirectTo" value={redirectTo} />

      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-3xl font-bold tracking-tight">Entrar</h1>
        </div>

        {state?.error && (
          <div
            role="alert"
            className="rounded-2xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive"
          >
            {state.error}
          </div>
        )}

        <Field>
          <FieldLabel htmlFor="email">E-mail ou nome de usuário</FieldLabel>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="seu@email.com"
            required
            disabled={isPending}
            className="bg-popover"
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="password">Senha</FieldLabel>
          <div className="relative">
            <Input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              required
              disabled={isPending}
              className="bg-popover pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword((s) => !s)}
              aria-label={showPassword ? "Esconder senha" : "Mostrar senha"}
              className="absolute top-1/2 right-3 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
            >
              {showPassword ? (
                <EyeOff className="size-4" />
              ) : (
                <Eye className="size-4" />
              )}
            </button>
          </div>
        </Field>

        <div className="flex items-center justify-between">
          <label
            htmlFor="remember"
            className="flex cursor-pointer items-center gap-2 text-sm select-none"
          >
            <input
              id="remember"
              name="remember"
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              className="size-4 cursor-pointer rounded border border-input accent-primary"
            />
            Lembrar de mim
          </label>
          <Link
            href="#"
            className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
          >
            Esqueceu sua senha?
          </Link>
        </div>

        <Field>
          <Button
            type="submit"
            size="lg"
            disabled={isPending}
            className="w-full text-base"
          >
            {isPending && <Loader2 className="size-4 animate-spin" />}
            {isPending ? "Entrando..." : "Entrar"}
          </Button>
        </Field>

        <Field>
          <FieldDescription className="text-center">
            Não tem uma conta?{" "}
            <Link
              href="/registro"
              className="font-medium text-foreground underline underline-offset-4"
            >
              Cadastre-se
            </Link>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  )
}
