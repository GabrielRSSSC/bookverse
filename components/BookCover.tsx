import { cn } from "@/lib/utils"
import type { Book } from "@/lib/books"

type BookCoverProps = {
  book: Book
  className?: string
  showTitle?: boolean
}

export function BookCover({
  book,
  className,
  showTitle = true,
}: BookCoverProps) {
  return (
    <div
      className={cn(
        "relative aspect-[2/3] w-full overflow-hidden rounded-2xl shadow-sm",
        className
      )}
      style={{ backgroundColor: book.cover.background }}
    >
      <div
        className="absolute inset-0"
        style={{ backgroundColor: book.cover.background }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 opacity-90"
        style={{
          background: `radial-gradient(120% 80% at 50% 110%, ${book.cover.accent}55, transparent 60%)`,
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 top-0 h-1.5"
        style={{ backgroundColor: book.cover.accent }}
        aria-hidden="true"
      />

      {book.cover.illustration === "prince" && (
        <svg
          viewBox="0 0 120 180"
          className="absolute inset-x-0 bottom-6 mx-auto h-32 w-auto"
          fill={book.cover.accent}
          aria-hidden="true"
        >
          <path d="M60 28 c-7 0 -13 6 -13 13 c0 7 6 13 13 13 c7 0 13 -6 13 -13 c0 -7 -6 -13 -13 -13 z M44 60 c-3 0 -6 3 -6 6 v22 c0 2 1 3 3 3 h4 v32 c0 3 2 5 5 5 h20 c3 0 5 -2 5 -5 v-32 h4 c2 0 3 -1 3 -3 v-22 c0 -3 -3 -6 -6 -6 z" />
        </svg>
      )}

      {book.cover.illustration === "ship" && (
        <svg
          viewBox="0 0 120 180"
          className="absolute inset-x-0 bottom-2 mx-auto h-36 w-auto"
          aria-hidden="true"
        >
          <path
            d="M10 130 L110 130 L100 150 L20 150 Z"
            fill={book.cover.accent}
            opacity="0.95"
          />
          <rect
            x="55"
            y="55"
            width="4"
            height="75"
            fill={book.cover.text}
            opacity="0.9"
          />
          <path
            d="M59 60 L95 95 L59 95 Z"
            fill={book.cover.text}
            opacity="0.85"
          />
          <path
            d="M55 70 L25 95 L55 95 Z"
            fill={book.cover.text}
            opacity="0.7"
          />
          <circle cx="92" cy="35" r="9" fill={book.cover.text} opacity="0.9" />
          <path
            d="M85 35 Q92 28 99 35 Q92 42 85 35"
            fill={book.cover.accent}
            opacity="0.4"
          />
        </svg>
      )}

      {book.cover.illustration === "mountains" && (
        <svg
          viewBox="0 0 120 180"
          className="absolute inset-x-0 bottom-0 h-32 w-full"
          aria-hidden="true"
        >
          <path
            d="M0 130 L30 80 L55 110 L80 60 L120 130 L120 180 L0 180 Z"
            fill={book.cover.accent}
            opacity="0.85"
          />
          <path
            d="M0 150 L20 120 L45 145 L70 115 L100 145 L120 130 L120 180 L0 180 Z"
            fill={book.cover.text}
            opacity="0.35"
          />
          <circle
            cx="92"
            cy="35"
            r="10"
            fill={book.cover.text}
            opacity="0.85"
          />
        </svg>
      )}

      {book.cover.illustration === "tentacles" && (
        <svg
          viewBox="0 0 120 180"
          className="absolute inset-0 h-full w-full"
          aria-hidden="true"
        >
          <ellipse
            cx="60"
            cy="180"
            rx="55"
            ry="40"
            fill={book.cover.text}
            opacity="0.18"
          />
          <path
            d="M30 180 Q35 130 20 90 Q10 60 30 40"
            stroke={book.cover.accent}
            strokeWidth="6"
            strokeLinecap="round"
            fill="none"
            opacity="0.8"
          />
          <path
            d="M55 180 Q60 130 50 100 Q40 70 60 50"
            stroke={book.cover.accent}
            strokeWidth="6"
            strokeLinecap="round"
            fill="none"
            opacity="0.7"
          />
          <path
            d="M80 180 Q85 130 100 100 Q110 70 90 50"
            stroke={book.cover.accent}
            strokeWidth="6"
            strokeLinecap="round"
            fill="none"
            opacity="0.8"
          />
          <path
            d="M40 180 Q45 140 35 120 Q25 100 45 80"
            stroke={book.cover.accent}
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
            opacity="0.55"
          />
          <path
            d="M70 180 Q75 140 90 120 Q105 100 80 80"
            stroke={book.cover.accent}
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
            opacity="0.55"
          />
          <circle cx="60" cy="55" r="6" fill={book.cover.text} opacity="0.9" />
        </svg>
      )}

      {showTitle && (
        <div className="relative flex h-full flex-col items-center justify-start p-4 pt-5 text-center">
          <h3
            className="text-lg leading-tight font-bold drop-shadow-sm"
            style={{ color: book.cover.text }}
          >
            {book.title}
          </h3>
          <p
            className="mt-1 text-[10px] tracking-widest uppercase opacity-70"
            style={{ color: book.cover.text }}
          >
            {book.author}
          </p>
        </div>
      )}
    </div>
  )
}
