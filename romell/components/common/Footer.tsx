export default function Footer() {
  return (
    <footer className="border-t border-zinc-200/70 bg-zinc-50 px-4 py-6 text-center text-xs text-zinc-600 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400 sm:px-6">
      <p className="text-sm">© {new Date().getFullYear()} All rights reserved.</p>
    </footer>
  );
}
