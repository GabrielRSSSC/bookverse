import { Suspense } from "react"
import Link from "next/link"
import { redirect } from "next/navigation"
import { BookOpen, LogOut, Mail, User as UserIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

import { getCurrentUser } from "@/lib/session"
import { logout } from "@/app/perfil/actions"

function initialsFrom(name: string | null | undefined, email: string) {
  const source = name?.trim() || email
  const parts = source.split(/\s+|@/).filter(Boolean)
  if (parts.length === 0) return "?"
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase()
  return (parts[0][0] + parts[1][0]).toUpperCase()
}

function ProfileSkeleton() {
  return (
    <div className="mx-auto max-w-2xl">
      <div className="h-8 w-40 animate-pulse rounded bg-muted" />
      <div className="mt-6 h-48 animate-pulse rounded-2xl bg-muted" />
    </div>
  )
}

async function ProfileContent() {
  const user = await getCurrentUser()

  if (!user) {
    redirect("/login?redirectTo=/perfil")
  }

  const fullName =
    (user.user_metadata?.full_name as string | undefined) ?? ""
  const displayName = fullName || user.email?.split("@")[0] || "Leitor"
  const initials = initialsFrom(fullName, user.email ?? "")

  return (
    <div className="mx-auto max-w-2xl">
      <div className="flex items-center gap-3">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-bold text-foreground"
        >
          <BookOpen className="size-6" strokeWidth={2.5} />
          BookVerse
        </Link>
      </div>

      <h1 className="mt-8 text-3xl font-bold tracking-tight">Meu Perfil</h1>
      <p className="mt-1 text-muted-foreground">
        Suas informações de conta no BookVerse.
      </p>

      <Card className="mt-8">
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="flex size-16 items-center justify-center rounded-full border-2 border-border bg-card text-lg font-semibold text-foreground">
              {initials}
            </div>
            <div>
              <CardTitle className="text-xl">{displayName}</CardTitle>
              <CardDescription>
                Membro desde{" "}
                {new Date(user.created_at).toLocaleDateString("pt-BR", {
                  month: "long",
                  year: "numeric",
                })}
              </CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent className="flex flex-col gap-4">
          <div className="flex items-center gap-3 rounded-2xl bg-muted/50 px-4 py-3">
            <UserIcon className="size-4 text-muted-foreground" />
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-wide text-muted-foreground">
                Nome
              </span>
              <span className="text-sm font-medium">
                {fullName || "Não informado"}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-2xl bg-muted/50 px-4 py-3">
            <Mail className="size-4 text-muted-foreground" />
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-wide text-muted-foreground">
                E-mail
              </span>
              <span className="text-sm font-medium">{user.email}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Button asChild variant="outline" className="sm:flex-1">
          <Link href="/biblioteca">Ir para biblioteca</Link>
        </Button>

        <form action={logout} className="sm:flex-1">
          <Button
            type="submit"
            variant="destructive"
            className="w-full"
          >
            <LogOut className="size-4" />
            Sair da conta
          </Button>
        </form>
      </div>
    </div>
  )
}

export default function PerfilPage() {
  return (
    <div className="min-h-svh bg-background px-6 py-8">
      <Suspense fallback={<ProfileSkeleton />}>
        <ProfileContent />
      </Suspense>
    </div>
  )
}
