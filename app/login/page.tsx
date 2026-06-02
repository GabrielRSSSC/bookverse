"use client"

import { LoginForm } from "@/components/login-form"
import { BookOpen } from "lucide-react"

export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      {/* Lado esquerdo — formulário */}
      <div className="flex flex-col gap-4 p-6 md:p-10 bg-background">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="/" className="flex items-center gap-2 font-bold text-lg text-foreground">
            <BookOpen className="size-6" strokeWidth={2.5} />
            BookVerse
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>

      {/* Lado direito — depoimento */}
      <div className="relative hidden flex-col items-center justify-center bg-secondary p-16 lg:flex">

        {/* Card de depoimento */}
        <div className="w-full max-w-md rounded-3xl bg-card p-12 flex flex-col items-center gap-8 shadow-md">

          {/* Avatar */}
          <div className="flex size-28 items-center justify-center rounded-full bg-muted overflow-hidden border-4 border-border shadow-sm">
            <span className="text-7xl leading-none select-none">👩🏾‍🦱</span>
          </div>

          {/* Citação */}
          <blockquote className="text-center">
            <p className="text-xl font-bold leading-snug text-foreground">
              O melhor leitor de livros que eu já usei!
            </p>
          </blockquote>

          {/* Link */}
          <a
            href="#"
            className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground transition-colors"
          >
            Leia mais depoimentos
          </a>
        </div>
      </div>
    </div>
  )
}

