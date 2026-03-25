import Link from "next/link";
import { blogPosts } from "@/lib/mock-data";

export default function BlogList() {
  return (
    <section className="mx-auto max-w-5xl space-y-6 py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 md:text-4xl">Blog</h1>
      <div className="grid gap-5 sm:grid-cols-2">
        {blogPosts.map((post) => (
          <article
            key={post.slug}
            className="group rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-zinc-700 dark:bg-zinc-900"
          >
            <header>
              <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-indigo-600 transition">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{post.category} · {post.date}</p>
            </header>
            <p className="mt-4 text-zinc-700 dark:text-zinc-300">{post.excerpt}</p>
            <div className="mt-5">
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center rounded-md border border-indigo-600 bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-indigo-700"
              >
                Read more
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
