import Link from "next/link";
import { blogPosts } from "@/lib/mock-data";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((item) => item.slug === params.slug);

  if (!post) {
    return (
      <section className="mx-auto max-w-5xl space-y-6 py-10 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">Post not found</h1>
        <p className="text-base text-zinc-600 dark:text-zinc-300">No blog found for slug: {params.slug || "(empty)"}</p>
        <Link href="/blog" className="text-sm font-medium text-indigo-600 hover:text-indigo-800 dark:text-indigo-300">
          ← Back to Blog
        </Link>
      </section>
    );
  }

  const otherPosts = blogPosts.filter((item) => item.slug !== post.slug);

  return (
    <section className="mx-auto max-w-5xl space-y-10 py-10 px-4 sm:px-6 lg:px-8">
      <Link href="/blog" className="text-sm font-medium text-indigo-600 hover:text-indigo-800 dark:text-indigo-300">
        ← Back to Blog
      </Link>
      <article className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">{post.title}</h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">Category: {post.category} · {post.date}</p>
        <p className="whitespace-pre-line text-zinc-700 dark:text-zinc-300 mt-4">{post.content}</p>
      </article>

      {otherPosts.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">More posts</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {otherPosts.map((p) => (
              <article key={p.slug} className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm hover:-translate-y-1 hover:shadow-md transition dark:border-zinc-700 dark:bg-zinc-900">
                <Link href={`/blog/${p.slug}`} className="block">
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">{p.title}</h3>
                  <p className="mt-2 text-zinc-600 dark:text-zinc-300">{p.excerpt}</p>
                </Link>
              </article>
            ))}
          </div>
        </section>
      )}
    </section>
  );
}
