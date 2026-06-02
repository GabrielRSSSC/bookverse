import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/Header"
import { BookCover } from "@/components/BookCover"
import { books, categories } from "@/lib/books"

export default function HomePage() {
  return (
    <div className="min-h-svh bg-background">
      <Header variant="public" active="home" />

      <main className="mx-auto max-w-7xl px-6 py-12">
        {/* Hero */}
        <section className="max-w-3xl">
          <h1 className="text-5xl font-bold leading-tight tracking-tight text-foreground md:text-6xl">
            A Arte dos Livros
            <br />
            Clássicos
          </h1>
          <p className="mt-6 text-xl text-foreground/80">
            Um guia para os amantes da literatura
          </p>
          <p className="mt-4 text-base text-muted-foreground">
            Explore o mundo dos clássicos com o BookVerse
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="rounded-full px-8">
              <Link href="/biblioteca">Ver mais</Link>
            </Button>
          </div>
        </section>

        {/* Category pills */}
        <section className="mt-16 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className="rounded-full border border-border bg-card px-5 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              {category}
            </button>
          ))}
        </section>

        {/* Book grid */}
        <section className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
          {books.map((book) => (
            <Link
              key={book.id}
              href={`/biblioteca/${book.id}`}
              className="group block transition-transform hover:-translate-y-1"
            >
              <BookCover book={book} />
            </Link>
          ))}
        </section>
      </main>
    </div>
  )
}
