export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-aurora pt-28">
      <div className="absolute left-[10%] top-[-120px] h-[360px] w-[360px] rounded-full bg-gradient-to-tr from-primary-500/20 to-violet-500/20 blur-3xl" />
      <div className="absolute right-[5%] top-[20%] h-[240px] w-[240px] rounded-full bg-gradient-to-tr from-sky-500/20 to-cyan-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
              ???????????
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl">
              ???????????
              <span className="block underline-gradient">??????????</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/80">
              ???????????????????????????????????????????????????????????????
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#cta" className="rounded-md bg-primary-600 px-5 py-3 text-sm font-semibold shadow-lg shadow-primary-600/20 transition hover:bg-primary-500">???????</a>
              <a href="#features" className="text-sm font-semibold text-white/80 hover:text-white">????? ?</a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-xs text-white/60">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                ?????????
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                ????????
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                SEO???
              </div>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="glass relative mt-2 rounded-2xl p-2 sm:p-3 lg:mt-0">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-gradient-to-br from-white/10 to-white/5">
                <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 p-6">
                  <div className="col-span-7 row-span-8 rounded-lg border border-white/10 bg-neutral-900/50 p-3"></div>
                  <div className="col-span-5 col-start-8 row-span-5 rounded-lg border border-white/10 bg-neutral-900/50 p-3"></div>
                  <div className="col-span-5 col-start-8 row-span-6 row-start-7 rounded-lg border border-white/10 bg-neutral-900/50 p-3"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="mx-auto max-w-md rounded-lg border border-white/10 bg-neutral-900/60 p-3 text-center text-sm text-white/80">
                    ????UI???????????
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
