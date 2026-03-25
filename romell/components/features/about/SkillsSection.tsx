const SKILLS = ["Web Design", "Web Development", "Web Description", "User Experience"];

export default function SkillsSection() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {SKILLS.map((skill) => (
        <div
          key={skill}
          className="rounded-xl border border-zinc-200 bg-white p-4 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-zinc-700 dark:bg-zinc-900"
        >
          <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100 text-xl font-bold text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-200">
            {skill.charAt(0)}
          </div>
          <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">{skill}</h3>
        </div>
      ))}
    </div>
  );
}
