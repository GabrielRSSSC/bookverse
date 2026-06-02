import Link from "next/link"

import { Header } from "@/components/Header"
import { BookCover } from "@/components/BookCover"
import { UploadCard } from "@/components/UploadCard"
import { getBookById, userLibrary } from "@/lib/books"

export default function BibliotecaPage() {
  const myBooks = userLibrary
    .map((entry) => {
      const book = getBookById(entry.bookId)
      return book ? { book, progress: entry.progress } : null
    })
    .filter(
      (
        x
      ): x is {
        book: NonNullable<ReturnType<typeof getBookById>>
        progress: number
      } => x !== null
    )

  return (
    <div className="min-h-svh bg-background">
      <Header variant="app" active="biblioteca" />

      <main className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex items-end justify-between">
          <h1 className="text-4xl font-bold tracking-tight text-foreground">
            Minha Biblioteca
          </h1>
          <Link
            href="/biblioteca"
            className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
          >
            Ver todos
          </Link>
        </div>

        <section className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
          {myBooks.map(({ book, progress }) => (
            <Link
              key={book.id}
              href={`/biblioteca/${book.id}`}
              className="group block transition-transform hover:-translate-y-1"
            >
              <div className="relative">
                <BookCover book={book} />
                <span className="absolute right-3 bottom-3 rounded-full bg-foreground/85 px-2.5 py-1 text-xs font-semibold text-background">
                  {progress}%
                </span>
              </div>
              <p className="mt-3 text-sm font-medium text-foreground">
                {book.title}
              </p>
            </Link>
          ))}

          <div id="upload" className="flex">
            <UploadCard />
          </div>
        </section>
      </main>
    </div>
  )
}
