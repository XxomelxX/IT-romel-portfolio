import SkillsSection from "@/components/features/about/SkillsSection";

export default function AboutSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-zinc-200 bg-white px-6 py-8 shadow-xl dark:border-zinc-700 dark:bg-zinc-900 lg:px-10 lg:py-12">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="mx-auto flex h-72 w-72 items-center justify-center rounded-full border-8 border-white bg-zinc-100 shadow-2xl dark:border-zinc-800 lg:h-80 lg:w-80">
            <img
              src="https://scontent.fceb6-4.fna.fbcdn.net/v/t39.30808-6/600298102_122255879438189060_2198938295938171429_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeFVr5yNovX4bBaS8C4KRw1OINHZWt70JNAg0dla3vQk0BJnACVVbW4b9FDg7WawxjEBVBAsg5qUwudqpUYQ2VZK&_nc_ohc=viWrMJWO7WsQ7kNvwE4LDeY&_nc_oc=AdoAfyDYHC90_U8zqdmpkJMNYm7Dntq2Fq8gAMo3agGGby3DIAkJwCdVfJarYTceg0kcziAKVGnE6BGxzv-D7enr&_nc_zt=23&_nc_ht=scontent.fceb6-4.fna&_nc_gid=vMYjzFUGMStH0dRHEStK2A&_nc_ss=7a32e&oh=00_Afzmrm1LfSLpBc9iR5KYLtwSZeu5bXJHHMKHMG5REt-Etw&oe=69C93302"
              alt="Romel Premacio"
              className="h-full w-full rounded-full object-cover"
            />
          </div>

          <div>
            <h1 className="text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">Romel Premacio</h1>
            <p className="mt-2 text-2xl font-semibold text-zinc-600 dark:text-zinc-300">Web Designer</p>
            <p className="mt-6 text-base leading-7 text-zinc-700 dark:text-zinc-300">
              I am a passionate coder who transforms complex problems into clean, efficient, and user-friendly software solutions.
            </p>

            <div className="mt-8 rounded-2xl border border-zinc-100 bg-zinc-50 p-5 shadow-sm dark:border-zinc-700 dark:bg-zinc-950">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Tech Stack</h3>
              <ul className="mt-3 space-y-2 text-zinc-700 dark:text-zinc-300">
                <li>Languages: TypeScript, JavaScript, Python</li>
                <li>Frameworks: Next.js, Tailwind CSS</li>
                <li>Tools: Git, VS Code</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 rounded-3xl border border-zinc-200 bg-white p-6 shadow-xl dark:border-zinc-700 dark:bg-zinc-900">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Skills and expertise</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-zinc-100 bg-zinc-50 p-4 dark:border-zinc-700 dark:bg-zinc-950">
            <h3 className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">UI/UX Design</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-300">Wireframes, responsive layouts, accessibility, and visual hierarchy.</p>
          </div>
          <div className="rounded-xl border border-zinc-100 bg-zinc-50 p-4 dark:border-zinc-700 dark:bg-zinc-950">
            <h3 className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">Frontend Development</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-300">Next.js, React patterns, state management, performance optimization.</p>
          </div>
          <div className="rounded-xl border border-zinc-100 bg-zinc-50 p-4 dark:border-zinc-700 dark:bg-zinc-950">
            <h3 className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">Component Libraries</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-300">Tailwind CSS, responsive utilities, design tokens, reusable components.</p>
          </div>
          <div className="rounded-xl border border-zinc-100 bg-zinc-50 p-4 dark:border-zinc-700 dark:bg-zinc-950">
            <h3 className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">Collaboration</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-300">Git workflow, PR reviews, documentation, and agile project tracking.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
