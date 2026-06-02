import Link from "next/link"
import { BookOpen } from "lucide-react"

import { SignupForm } from "@/components/signup-form"

function PersonSilhouette({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <circle cx="32" cy="22" r="12" />
      <path d="M8 64 C8 48 16 40 32 40 C48 40 56 48 56 64 Z" />
    </svg>
  )
}

export default function SignupPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 bg-background p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-bold text-foreground"
          >
            <BookOpen className="size-6" strokeWidth={2.5} />
            BookVerse
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <SignupForm />
          </div>
        </div>
      </div>

      <div className="relative hidden flex-col items-center justify-center gap-8 bg-muted p-12 lg:flex">
        <div className="flex size-24 items-center justify-center rounded-full border-2 border-border bg-card text-foreground">
          <PersonSilhouette className="size-16" />
        </div>

        <blockquote className="max-w-sm text-center">
          <p className="text-2xl font-bold leading-tight text-foreground">
            Encontrei livros que jamais teria descoberto sozinho!
          </p>
        </blockquote>

        <Link
          href="#"
          className="text-sm text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
        >
          Leia mais depoimentos
        </Link>
      </div>
    </div>
  )
}
