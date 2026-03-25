import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-4 text-center">
      <h1 className="text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">404</h1>
      <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-300">This page could not be found. Try one of the links below:</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link href="/" className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">Home</Link>
        <Link href="/blog" className="rounded-md border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-800">Blog</Link>
        <Link href="/projects" className="rounded-md border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-800">Projects</Link>
      </div>
    </main>
  );
}
