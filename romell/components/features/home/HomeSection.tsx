import Image from "next/image";
import Link from "next/link";

export default function HomeSection() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-10 px-4 py-10 sm:px-6 lg:flex-row lg:gap-16 lg:px-8">
      <div className="w-full lg:w-1/2">
        <h1 className="text-4xl font-extrabold tracking-tight text-indigo-700 dark:text-indigo-300 sm:text-5xl lg:text-6xl">
          Hi, I&apos;m <span className="text-purple-700 dark:text-purple-300">Romel Premacio</span>
        </h1>
        <p className="mt-2 text-2xl font-semibold text-zinc-700 dark:text-zinc-300">Web Designer</p>
        <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-300">
          I am a passionate coder who transforms complex problems into clean, efficient, and user-friendly software solutions.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-6 py-3 text-base font-semibold text-zinc-800 shadow-sm transition hover:bg-zinc-100 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800"
        >
          Contact Me
        </Link>
      </div>

      <div className="w-full lg:w-1/2">
        <div className="mx-auto h-72 w-72 overflow-hidden rounded-full border-8 border-white shadow-2xl dark:border-zinc-900 lg:h-96 lg:w-96">
          <Image
            alt="Romel Premacio"
            src="https://scontent.fceb6-4.fna.fbcdn.net/v/t39.30808-6/600298102_122255879438189060_2198938295938171429_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeFVr5yNovX4bBaS8C4KRw1OINHZWt70JNAg0dla3vQk0BJnACVVbW4b9FDg7WawxjEBVBAsg5qUwudqpUYQ2VZK&_nc_ohc=viWrMJWO7WsQ7kNvwE4LDeY&_nc_oc=AdoAfyDYHC90_U8zqdmpkJMNYm7Dntq2Fq8gAMo3agGGby3DIAkJwCdVfJarYTceg0kcziAKVGnE6BGxzv-D7enr&_nc_zt=23&_nc_ht=scontent.fceb6-4.fna&_nc_gid=vMYjzFUGMStH0dRHEStK2A&_nc_ss=7a32e&oh=00_Afzmrm1LfSLpBc9iR5KYLtwSZeu5bXJHHMKHMG5REt-Etw&oe=69C93302"
            width={384}
            height={384}
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
