export default function ContactSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold tracking-tight text-purple-600 dark:text-purple-300">Romel Premacio</h1>
        <p className="mt-2 text-xl font-medium text-zinc-700 dark:text-zinc-300">Web Designer</p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-zinc-700 dark:bg-zinc-900">
          <p className="text-sm font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">Email</p>
          <p className="mt-2 text-2xl font-bold text-purple-600 dark:text-purple-300">romelpremacio@gmail.com</p>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">Prefer email for detailed inquiries</p>
        </article>

        <article className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-zinc-700 dark:bg-zinc-900">
          <p className="text-sm font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">Social</p>
          <p className="mt-2 text-xl font-semibold text-blue-600 dark:text-blue-300">Facebook</p>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">Romel Premacio</p>
        </article>

        <article className="rounded-2xl border border-l-4 border-emerald-200 bg-emerald-50 p-6 shadow-sm transition hover:shadow-md dark:border-emerald-700 dark:bg-emerald-950/50">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">Phone</p>
          <p className="mt-2 text-2xl font-bold text-emerald-700 dark:text-emerald-300">+63 909 966 5866</p>
          <p className="mt-1 text-sm text-emerald-600 dark:text-emerald-200">SMS available</p>
        </article>

        <article className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-zinc-700 dark:bg-zinc-900">
          <p className="text-sm font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">Location</p>
          <p className="mt-2 text-2xl font-bold text-zinc-900 dark:text-zinc-100">Datag, Buagsong, Cordova, Cebu</p>
        </article>
      </div>
    </section>
  );
}
