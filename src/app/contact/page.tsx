'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-24 text-center">
        <h1 className="text-3xl font-bold tracking-tight mb-4">Thanks!</h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          Your message has been received. I&apos;ll get back to you soon.
        </p>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-24">
      <h1 className="text-3xl font-bold tracking-tight mb-6">Contact</h1>

      <form onSubmit={handleSubmit} className="space-y-5 mb-16">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
          <input
            id="name"
            type="text"
            required
            className="w-full rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
          <input
            id="email"
            type="email"
            required
            className="w-full rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-500"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
          <textarea
            id="message"
            rows={5}
            required
            className="w-full rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-500 resize-y"
          />
        </div>
        <button
          type="submit"
          className="inline-flex h-11 items-center justify-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition-colors hover:opacity-80"
        >
          Send Message
        </button>
      </form>

      <div className="space-y-3 text-sm">
        <a
          href="mailto:mounir@example.com"
          className="block text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
        >
          mounir@example.com
        </a>
        <a
          href="https://github.com/Mounir-Ghafir"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/feed/"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
        >
          LinkedIn
        </a>
      </div>
    </div>
  )
}
