
import heroImage from "../assets/banner-stack.png";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl flex-col items-center justify-center gap-10 px-6 py-16 md:flex-row md:justify-between lg:py-20">

    
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Build Your
            <span className="block bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
              Developer Stack
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-7 text-gray-600 sm:text-lg">
            Discover the technologies and tools you need to build modern,
            scalable, and powerful web applications.
          </p>

      
          <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
            <a
              href="#technologies"
              className="rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Explore Technologies
            </a>

            <a
              href="#about"
              className="rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 transition hover:border-pink-400 hover:text-pink-500"
            >
              Learn More
            </a>
          </div>
        </div>


        <div className="flex w-full justify-center md:flex-1 md:justify-end">
          <img
            src={heroImage}
            alt="Developer working with modern technologies"
            className="w-full max-w-xs object-contain sm:max-w-sm md:max-w-md lg:max-w-lg"
          />
        </div>
      </div>
    </section>
  );
}
