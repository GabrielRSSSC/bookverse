"use client"

import { useCallback, useEffect, useState, useSyncExternalStore } from "react"
import { useRouter } from "next/navigation"
import { BookOpen } from "lucide-react"

import { cn } from "@/lib/utils"

const STORAGE_KEY = "bookverse-splash-seen"
const VISIBLE_DURATION = 3400
const FADE_DURATION = 2600

type Phase = "hidden" | "visible" | "leaving"

const subscribe = () => () => {}

const getSnapshot = () =>
  typeof window === "undefined"
    ? "0"
    : (window.sessionStorage.getItem(STORAGE_KEY) ?? "0")

const getServerSnapshot = () => "0"

export function Splash() {
  const router = useRouter()
  const seen = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
  const [phase, setPhase] = useState<Phase>("hidden")

  const finishSplash = useCallback(() => {
    setPhase("hidden")
    try {
      window.sessionStorage.setItem(STORAGE_KEY, "1")
    } catch {
      // ignore storage errors (private mode, etc.)
    }
    router.push("/login")
  }, [router])

  useEffect(() => {
    if (seen === "1") {
      router.push("/login")
      return
    }

    const enterFrame = requestAnimationFrame(() => setPhase("visible"))
    const leaveTimer = window.setTimeout(() => {
      setPhase((current) => (current === "visible" ? "leaving" : current))
    }, VISIBLE_DURATION)

    const doneTimer = window.setTimeout(() => {
      finishSplash()
    }, VISIBLE_DURATION + FADE_DURATION)

    return () => {
      cancelAnimationFrame(enterFrame)
      window.clearTimeout(leaveTimer)
      window.clearTimeout(doneTimer)
    }
  }, [seen, finishSplash, router])

  if (seen === "1" || phase === "hidden") return null

  const handleSkip = () => {
    if (phase !== "visible") return
    setPhase("leaving")
    window.setTimeout(() => {
      void finishSplash()
    }, FADE_DURATION)
  }

  return (
    <div
      role="dialog"
      aria-label="BookVerse"
      aria-modal="true"
      onClick={handleSkip}
      className={cn(
        "fixed inset-0 z-50 flex cursor-pointer flex-col items-center justify-center overflow-hidden bg-primary text-primary-foreground select-none",
        "transition-opacity ease-out",
        phase === "visible" ? "opacity-100" : "opacity-0",
        "duration-[600ms]"
      )}
    >
      <BackgroundDecor />

      <div className="relative z-10 flex flex-col items-center gap-6 px-6 text-center">
        <div
          className={cn(
            "flex h-24 w-24 items-center justify-center rounded-3xl border border-primary-foreground/15 bg-primary-foreground/10 shadow-2xl shadow-black/30 backdrop-blur-sm md:h-28 md:w-28",
            "animate-splash-pop"
          )}
        >
          <BookOpen
            className="size-12 text-primary-foreground md:size-14"
            strokeWidth={1.5}
          />
        </div>

        <div className="flex flex-col items-center gap-2">
          <h1 className="text-5xl leading-none font-bold tracking-tight md:text-6xl">
            <span className="inline-block animate-splash-rise">B</span>
            <span className="inline-block animate-splash-rise [animation-delay:60ms]">
              o
            </span>
            <span className="inline-block animate-splash-rise [animation-delay:120ms]">
              o
            </span>
            <span className="inline-block animate-splash-rise [animation-delay:180ms]">
              k
            </span>
            <span className="inline-block animate-splash-rise [animation-delay:240ms]">
              V
            </span>
            <span className="inline-block animate-splash-rise [animation-delay:300ms]">
              e
            </span>
            <span className="inline-block animate-splash-rise [animation-delay:360ms]">
              r
            </span>
            <span className="inline-block animate-splash-rise [animation-delay:420ms]">
              s
            </span>
            <span className="inline-block animate-splash-rise [animation-delay:480ms]">
              e
            </span>
          </h1>
          <p
            className="animate-splash-fade text-sm font-medium tracking-[0.4em] text-primary-foreground/70 uppercase md:text-base"
            style={{ animationDelay: "600ms", animationFillMode: "both" }}
          >
            Seu universo de livros
          </p>
        </div>

        <div
          className="mt-6 h-1 w-48 overflow-hidden rounded-full bg-primary-foreground/15 md:w-64"
          style={{ animation: "splash-fade-in 600ms ease-out 700ms both" }}
          aria-hidden="true"
        >
          <div
            className="h-full rounded-full bg-primary-foreground/80"
            style={{
              animation: `splash-progress ${VISIBLE_DURATION - 200}ms ease-out forwards`,
            }}
          />
        </div>

        <button
          type="button"
          onClick={handleSkip}
          className="mt-2 text-xs font-medium tracking-[0.3em] text-primary-foreground/50 uppercase transition-colors hover:text-primary-foreground/90"
          style={{ animation: "splash-fade-in 600ms ease-out 900ms both" }}
        >
          Pular intro
        </button>
      </div>
    </div>
  )
}

function BackgroundDecor() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(248,244,236,0.12),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_85%,rgba(248,244,236,0.08),transparent_60%)]" />

      <svg
        viewBox="0 0 120 160"
        className="absolute top-12 -left-12 h-40 w-auto animate-splash-float text-primary-foreground/10"
        fill="currentColor"
      >
        <path d="M10 10 H55 V150 H10 Z M65 10 H110 V150 H65 Z" />
        <path d="M55 10 L65 10 L65 150 L55 150 Z" />
      </svg>

      <svg
        viewBox="0 0 120 160"
        className="absolute -right-10 bottom-16 h-48 w-auto animate-splash-float text-primary-foreground/10 [animation-delay:1.2s]"
        fill="currentColor"
      >
        <path d="M10 10 H55 V150 H10 Z M65 10 H110 V150 H65 Z" />
        <path d="M55 10 L65 10 L65 150 L55 150 Z" />
      </svg>

      <svg
        viewBox="0 0 24 24"
        className="absolute top-[28%] left-[12%] h-5 w-5 animate-splash-float text-primary-foreground/20 [animation-delay:0.4s]"
        fill="currentColor"
      >
        <path d="M6 2h12v20l-6-4-6 4V2z" />
      </svg>

      <svg
        viewBox="0 0 24 24"
        className="absolute top-[18%] right-[18%] h-4 w-4 animate-splash-float text-primary-foreground/20 [animation-delay:0.8s]"
        fill="currentColor"
      >
        <path d="M6 2h12v20l-6-4-6 4V2z" />
      </svg>

      <svg
        viewBox="0 0 24 24"
        className="absolute bottom-[22%] left-[20%] h-4 w-4 animate-splash-float text-primary-foreground/20 [animation-delay:1.6s]"
        fill="currentColor"
      >
        <path d="M6 2h12v20l-6-4-6 4V2z" />
      </svg>
    </div>
  )
}
