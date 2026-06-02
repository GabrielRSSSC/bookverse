import { notFound } from "next/navigation"
import { getBookById } from "@/lib/books"
import { BookReader } from "@/components/BookReader"

type Props = {
  params: Promise<{ id: string }>
}

export default async function BookPage({ params }: Props) {
  const { id } = await params
  const book = getBookById(id)

  if (!book) {
    notFound()
  }

  return <BookReader book={book} />
}
