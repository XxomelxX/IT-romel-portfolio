type Props = { params: { slug: string[] } };

export default function CategoryPage({ params }: Props) {
  return (
    <section className="mx-auto max-w-5xl space-y-4 py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">Category</h1>
      <p className="text-zinc-700 dark:text-zinc-300">Selected category path:</p>
      <code className="block rounded-lg border border-zinc-300 bg-zinc-100 p-3 dark:border-zinc-700 dark:bg-zinc-900">
        /category/{params.slug.join("/")}
      </code>
    </section>
  );
}
