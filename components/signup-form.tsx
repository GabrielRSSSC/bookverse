"use client"

import { useActionState, useState } from "react"
import Link from "next/link"
import { Eye, EyeOff, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

import { signup, type SignupState } from "@/app/registro/actions"

const initialState: SignupState = {}

export function SignupForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [state, formAction, isPending] = useActionState(
    signup,
    initialState
  )

  return (
    <form action={formAction} className="flex flex-col gap-6">
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-3xl font-bold tracking-tight">Criar conta</h1>
          <p className="text-sm text-balance text-muted-foreground">
            Preencha os dados abaixo para se cadastrar
          </p>
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
          <FieldLabel htmlFor="name">Nome completo</FieldLabel>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Seu nome"
            required
            disabled={isPending}
            className="bg-popover"
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="email">E-mail</FieldLabel>
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
              minLength={8}
              disabled={isPending}
              className="bg-popover pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword((s) => !s)}
              aria-label={showPassword ? "Esconder senha" : "Mostrar senha"}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
            >
              {showPassword ? (
                <EyeOff className="size-4" />
              ) : (
                <Eye className="size-4" />
              )}
            </button>
          </div>
          <FieldDescription>Deve ter pelo menos 8 caracteres.</FieldDescription>
        </Field>

        <Field>
          <FieldLabel htmlFor="confirm-password">Confirmar senha</FieldLabel>
          <div className="relative">
            <Input
              id="confirm-password"
              name="confirm-password"
              type={showConfirm ? "text" : "password"}
              required
              minLength={8}
              disabled={isPending}
              className="bg-popover pr-10"
            />
            <button
              type="button"
              onClick={() => setShowConfirm((s) => !s)}
              aria-label={showConfirm ? "Esconder senha" : "Mostrar senha"}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
            >
              {showConfirm ? (
                <EyeOff className="size-4" />
              ) : (
                <Eye className="size-4" />
              )}
            </button>
          </div>
          <FieldDescription>Repita sua senha para confirmar.</FieldDescription>
        </Field>

        <Field>
          <Button
            type="submit"
            size="lg"
            disabled={isPending}
            className="w-full text-base"
          >
            {isPending && <Loader2 className="size-4 animate-spin" />}
            {isPending ? "Cadastrando..." : "Cadastrar"}
          </Button>
        </Field>

        <Field>
          <FieldDescription className="text-center">
            Já tem uma conta?{" "}
            <Link
              href="/login"
              className="font-medium text-foreground underline underline-offset-4"
            >
              Entrar
            </Link>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  )
}
