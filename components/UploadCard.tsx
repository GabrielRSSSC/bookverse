"use client"

import { useRef, useState } from "react"
import { useRouter } from "next/navigation"
import { BookOpen, FileText, Loader2, Upload, X } from "lucide-react"

import { Button } from "@/components/ui/button"

import type { Book } from "@/lib/books"

const STORAGE_KEY = "bookverse:uploaded-books"

type UploadedBook = {
  id: string
  title: string
  author: string
  fileName: string
  size: number
  addedAt: string
  excerpt: string
}

function readFileAsText(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onerror = () => reject(reader.error ?? new Error("Falha ao ler arquivo"))
    reader.onload = () => resolve(String(reader.result ?? ""))
    reader.readAsText(file)
  })
}

function inferTitleFromName(name: string): string {
  return name
    .replace(/\.(txt|epub|md)$/i, "")
    .replace(/[_-]+/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .trim() || "Sem título"
}

function inferAuthorFromContent(content: string): string {
  const lines = content.split(/\r?\n/).map((l) => l.trim()).filter(Boolean)
  for (const line of lines.slice(0, 20)) {
    const match =
      line.match(/^por\s+(.+)$/i) ??
      line.match(/^autor:\s*(.+)$/i) ??
      line.match(/^by\s+(.+)$/i)
    if (match) return match[1].slice(0, 60)
  }
  return "Autor desconhecido"
}

function loadUploaded(): UploadedBook[] {
  if (typeof window === "undefined") return []
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as UploadedBook[]) : []
  } catch {
    return []
  }
}

function saveUploaded(list: UploadedBook[]) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(list))
}

type UploadCardProps = {
  onUploaded?: (book: Book) => void
}

export function UploadCard({ onUploaded }: UploadCardProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [uploaded, setUploaded] = useState<UploadedBook[]>([])

  function refresh() {
    setUploaded(loadUploaded())
  }

  async function handleFile(file: File) {
    setError(null)
    if (!/\.(txt|epub|md)$/i.test(file.name)) {
      setError("Formato não suportado. Envie .txt, .epub ou .md")
      return
    }
    if (file.size > 5 * 1024 * 1024) {
      setError("Arquivo maior que 5 MB.")
      return
    }
    setIsLoading(true)
    try {
      const content = await readFileAsText(file)
      const id = `upload-${Date.now()}`
      const book: UploadedBook = {
        id,
        title: inferTitleFromName(file.name),
        author: inferAuthorFromContent(content),
        fileName: file.name,
        size: file.size,
        addedAt: new Date().toISOString(),
        excerpt: content.slice(0, 600),
      }
      const list = [book, ...loadUploaded()]
      saveUploaded(list)
      setUploaded(list)
      onUploaded?.({
        id: book.id,
        title: book.title,
        author: book.author,
        category: "Ficção",
        cover: {
          background: "#2B211D",
          text: "#F8F4EC",
          accent: "#A67C52",
          illustration: "prince",
        },
        description: `Carregado de ${book.fileName}`,
        chapters: [
          {
            title: "Capítulo I",
            paragraphs: content
              .split(/\r?\n\s*\r?\n/)
              .map((p) => p.trim())
              .filter(Boolean)
              .slice(0, 12),
          },
        ],
      })
      router.refresh()
    } catch (err) {
      setError(err instanceof Error ? err.message : "Falha ao processar arquivo")
    } finally {
      setIsLoading(false)
    }
  }

  function handleRemove(id: string) {
    const list = loadUploaded().filter((b) => b.id !== id)
    saveUploaded(list)
    setUploaded(list)
  }

  return (
    <div className="flex flex-col gap-4">
      <label
        htmlFor="book-upload"
        className="group flex aspect-[2/3] cursor-pointer flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-border bg-card/50 text-center transition-colors hover:bg-card"
      >
        <input
          ref={inputRef}
          id="book-upload"
          name="book-upload"
          type="file"
          accept=".txt,.epub,.md"
          className="sr-only"
          disabled={isLoading}
          onChange={(e) => {
            const file = e.target.files?.[0]
            if (file) {
              void handleFile(file)
              e.target.value = ""
            }
          }}
        />
        <div className="flex size-12 items-center justify-center rounded-full bg-background text-foreground transition-transform group-hover:-translate-y-1">
          {isLoading ? (
            <Loader2 className="size-6 animate-spin" />
          ) : (
            <Upload className="size-6" strokeWidth={2.5} />
          )}
        </div>
        <p className="px-4 text-sm font-medium text-foreground">
          {isLoading ? "Enviando..." : "Carregue seu"}
          <br />
          arquivo aqui
        </p>
        <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
          .txt · .epub · .md
        </p>
      </label>

      {error && (
        <p
          role="alert"
          className="rounded-2xl border border-destructive/30 bg-destructive/10 px-3 py-2 text-xs text-destructive"
        >
          {error}
        </p>
      )}

      {uploaded.length > 0 && (
        <div className="rounded-2xl border border-border bg-card p-3">
          <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            <BookOpen className="size-3.5" />
            Enviados nesta sessão
          </p>
          <ul className="flex flex-col gap-2">
            {uploaded.slice(0, 3).map((b) => (
              <li
                key={b.id}
                className="flex items-center justify-between gap-2 rounded-xl bg-background/50 px-2 py-1.5 text-xs"
              >
                <div className="flex min-w-0 items-center gap-2">
                  <FileText className="size-3.5 shrink-0 text-muted-foreground" />
                  <span className="truncate font-medium">{b.title}</span>
                </div>
                <button
                  type="button"
                  onClick={() => handleRemove(b.id)}
                  aria-label={`Remover ${b.title}`}
                  className="rounded-full p-1 text-muted-foreground hover:bg-muted hover:text-foreground"
                >
                  <X className="size-3" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <Button
        type="button"
        variant="ghost"
        size="sm"
        onClick={refresh}
        className="self-start text-xs"
      >
        Atualizar lista
      </Button>
    </div>
  )
}
