import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Entrar</h1>
        </div>

        <Field>
          <FieldLabel htmlFor="email">E-mail ou nome de usuário</FieldLabel>
          <Input
            id="email"
            type="email"
            placeholder="seu@email.com"
            required
            className="bg-background"
          />
        </Field>

        <Field>
          <div className="flex items-center">
            <FieldLabel htmlFor="password">Senha</FieldLabel>
            <a
              href="#"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Esqueceu sua senha?
            </a>
          </div>
          <Input
            id="password"
            type="password"
            required
            className="bg-background"
          />
        </Field>

        {/* Lembrar de mim */}
        <div className="flex items-center gap-2">
          <input
            id="remember"
            type="checkbox"
            className="size-4 rounded border border-input accent-primary"
          />
          <label htmlFor="remember" className="text-sm select-none">
            Lembrar de mim
          </label>
        </div>

        <Field>
          <Button type="submit" className="w-full">
            Entrar
          </Button>
        </Field>

        <Field>
          <FieldDescription className="text-center">
            Não tem uma conta?{" "}
            <a href="#" className="underline underline-offset-4">
              Cadastre-se
            </a>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  )
}
