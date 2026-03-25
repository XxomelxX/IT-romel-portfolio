type Props = { params: { date?: string[] } };

export default function ArchivePage({ params }: Props) {
  const date = params.date ?? [];

  return (
    <section className="mx-auto max-w-5xl space-y-4 py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">Archive</h1>
      {date.length === 0 ? (
        <p className="text-zinc-700 dark:text-zinc-300">All posts archive (no date supplied).</p>
      ) : (
        <p className="text-zinc-700 dark:text-zinc-300">Archive route: /archive/{date.join("/")}</p>
      )}
    </section>
  );
}
