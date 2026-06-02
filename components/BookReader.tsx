"use client"

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import { BookOpen, ChevronLeft, ChevronRight, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import type { Book } from "@/lib/books"
import { totalChapters, totalParagraphs } from "@/lib/books"

const STORAGE_KEY_PREFIX = "bookverse:progress:"

type BookReaderProps = {
  book: Book
}

export function BookReader({ book }: BookReaderProps) {
  const [open, setOpen] = useState(false)
  const [chapterIndex, setChapterIndex] = useState<number>(() => {
    if (typeof window === "undefined") return 0
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY_PREFIX + book.id)
      if (!saved) return 0
      const { ch } = JSON.parse(saved) as { ch: number; par: number }
      if (ch >= 0 && ch < book.chapters.length) return ch
    } catch {
      // ignore
    }
    return 0
  })
  const [paragraphIndex, setParagraphIndex] = useState<number>(() => {
    if (typeof window === "undefined") return 0
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY_PREFIX + book.id)
      if (!saved) return 0
      const { ch, par } = JSON.parse(saved) as { ch: number; par: number }
      const chapter = book.chapters[ch]
      if (chapter && par >= 0 && par < chapter.paragraphs.length) return par
    } catch {
      // ignore
    }
    return 0
  })

  const totalCh = totalChapters(book)
  const totalParas = totalParagraphs(book)

  const chapter = book.chapters[chapterIndex]
  const totalParasInChapter = chapter.paragraphs.length
  const currentParagraph = chapter.paragraphs[paragraphIndex] ?? ""
  const nextParagraph = chapter.paragraphs[paragraphIndex + 1] ?? ""

  const preview = chapter.paragraphs[0] ?? book.description

  const flatIndex = useMemo(() => {
    let count = 0
    for (let i = 0; i < chapterIndex; i++) {
      count += book.chapters[i].paragraphs.length
    }
    return count + paragraphIndex + 1
  }, [book.chapters, chapterIndex, paragraphIndex])

  const percent = Math.min(
    100,
    Math.round(
      (chapterIndex * 100) / totalCh +
        ((paragraphIndex + 1) * 100) /
          (totalCh * Math.max(1, totalParas / totalCh))
    )
  )

  useEffect(() => {
    if (!open) return
    try {
      window.localStorage.setItem(
        STORAGE_KEY_PREFIX + book.id,
        JSON.stringify({ ch: chapterIndex, par: paragraphIndex })
      )
    } catch {
      // ignore
    }
  }, [book.id, open, chapterIndex, paragraphIndex])

  function goPrev() {
    if (paragraphIndex > 0) {
      setParagraphIndex((p) => p - 1)
      return
    }
    if (chapterIndex > 0) {
      const prevChapter = book.chapters[chapterIndex - 1]
      setChapterIndex(chapterIndex - 1)
      setParagraphIndex(Math.max(0, prevChapter.paragraphs.length - 1))
    }
  }

  function goNext() {
    if (paragraphIndex < totalParasInChapter - 1) {
      setParagraphIndex((p) => p + 1)
      return
    }
    if (chapterIndex < book.chapters.length - 1) {
      setChapterIndex(chapterIndex + 1)
      setParagraphIndex(0)
    }
  }

  function closeReader() {
    setOpen(false)
  }

  return (
    <div className="min-h-svh bg-background">
      <header className="w-full px-6 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
          <Link
            href="/home"
            className="flex items-center gap-2 text-xl font-bold text-foreground"
          >
            <BookOpen className="size-6" strokeWidth={2.5} />
            <span>BookVerse</span>
          </Link>
          <div className="flex items-center gap-4 text-sm">
            <Link
              href="/biblioteca"
              className="font-medium text-foreground hover:text-primary"
            >
              ← Biblioteca
            </Link>
            <span className="text-muted-foreground">{book.title}</span>
            <span className="text-muted-foreground">{chapter?.title}</span>
            <span className="font-semibold text-foreground">{percent}%</span>
          </div>
        </div>
      </header>

      <main className="mx-auto grid max-w-7xl gap-10 px-6 py-10 md:grid-cols-2 md:items-center">
        <div className="flex flex-col items-center gap-6 md:items-start">
          <div
            className="relative aspect-[2/3] w-48 overflow-hidden rounded-2xl shadow-md"
            style={{ backgroundColor: book.cover.background }}
          >
            <div
              className="absolute inset-x-0 top-0 h-1.5"
              style={{ backgroundColor: book.cover.accent }}
            />
            <div className="flex h-full flex-col items-center justify-center p-4 text-center">
              <h2
                className="text-base leading-tight font-bold"
                style={{ color: book.cover.text }}
              >
                {book.title}
              </h2>
              <p
                className="mt-1 text-[10px] tracking-widest uppercase opacity-70"
                style={{ color: book.cover.text }}
              >
                {book.author}
              </p>
            </div>
          </div>

          <h1 className="text-3xl font-bold text-foreground">{book.title}</h1>
          <p className="text-sm text-muted-foreground">{book.author}</p>
          <p className="max-w-md text-base text-foreground/80">
            {book.description}
          </p>

          <div className="flex w-full max-w-md flex-col gap-2">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>
                Capítulo {chapterIndex + 1} de {totalCh}
              </span>
              <span>
                Parágrafo {paragraphIndex + 1} de {totalParasInChapter}
              </span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-primary transition-all"
                style={{ width: `${percent}%` }}
              />
            </div>
          </div>

          <Button
            type="button"
            size="lg"
            onClick={() => setOpen(true)}
            className="rounded-full px-8"
          >
            Abrir Livro
          </Button>
        </div>

        <div className="relative hidden md:block">
          <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
            <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-foreground/20 to-transparent" />
            <div className="grid h-full grid-cols-2">
              <div className="flex h-full flex-col gap-2 overflow-hidden p-6">
                <p className="font-serif text-[10px] tracking-widest text-muted-foreground uppercase">
                  {book.title}
                </p>
                <p className="line-clamp-6 font-serif text-[11px] leading-relaxed text-foreground/80 italic">
                  &ldquo;{preview}&rdquo;
                </p>
                <p className="mt-auto font-serif text-[10px] text-muted-foreground">
                  — {book.author}
                </p>
              </div>
              <div className="flex h-full flex-col items-center justify-center gap-3 p-6 text-center">
                <BookOpen
                  className="size-12 text-foreground/40"
                  strokeWidth={1.5}
                />
                <p className="font-serif text-[11px] text-muted-foreground">
                  Clique em &ldquo;Abrir Livro&rdquo; para começar a ler
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/70 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`Lendo ${book.title}`}
        >
          <div className="relative flex h-full max-h-[90vh] w-full max-w-4xl flex-col rounded-2xl bg-card shadow-2xl">
            <div className="flex items-center justify-between border-b border-border px-6 py-3">
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-foreground">
                  {book.title}
                </span>
                <span className="text-xs text-muted-foreground">
                  {chapter?.title} · {flatIndex}/{totalParas}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs font-semibold text-foreground">
                  {percent}%
                </span>
                <button
                  type="button"
                  onClick={closeReader}
                  aria-label="Fechar leitor"
                  className="rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  <X className="size-5" />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto">
              <div className="relative grid h-full min-h-full grid-cols-2">
                <div className="pointer-events-none absolute inset-y-0 left-1/2 z-10 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-foreground/30 to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 left-1/2 z-10 w-10 -translate-x-1/2 bg-gradient-to-r from-foreground/10 via-transparent to-foreground/10" />

                <div className="flex h-full flex-col gap-3 p-8 md:p-12">
                  <p className="font-serif text-xs tracking-widest text-muted-foreground uppercase">
                    {chapter?.title}
                  </p>
                  <p className="font-serif text-sm leading-relaxed text-foreground/90 first-letter:mr-1 first-letter:text-2xl first-letter:font-bold">
                    {currentParagraph}
                  </p>
                </div>

                <div className="flex h-full flex-col gap-3 p-8 md:p-12">
                  {nextParagraph ? (
                    <p className="font-serif text-sm leading-relaxed text-foreground/90">
                      {nextParagraph}
                    </p>
                  ) : (
                    <p className="font-serif text-sm leading-relaxed text-muted-foreground italic">
                      Fim do capítulo. Carregue em &ldquo;Próxima&rdquo; para
                      continuar.
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-border px-6 py-3">
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={goPrev}
                disabled={chapterIndex === 0 && paragraphIndex === 0}
                className="gap-1"
              >
                <ChevronLeft className="size-4" />
                Anterior
              </Button>
              <div className="flex gap-1">
                {book.chapters.map((ch, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => {
                      setChapterIndex(i)
                      setParagraphIndex(0)
                    }}
                    aria-label={`Ir para ${ch.title}`}
                    title={ch.title}
                    className={`size-2 rounded-full transition-colors ${
                      i === chapterIndex ? "bg-primary" : "bg-border"
                    }`}
                  />
                ))}
              </div>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={goNext}
                disabled={
                  chapterIndex === book.chapters.length - 1 &&
                  paragraphIndex === totalParasInChapter - 1
                }
                className="gap-1"
              >
                Próxima
                <ChevronRight className="size-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
