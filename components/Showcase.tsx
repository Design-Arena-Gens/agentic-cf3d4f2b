export default function Showcase() {
  return (
    <section id="showcase" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">???</h2>
          <p className="mt-3 text-base text-white/70">?????????????????????????</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="group relative overflow-hidden rounded-xl border border-white/10 bg-neutral-900/40">
              <div className="aspect-[16/10] w-full bg-gradient-to-br from-white/10 to-white/5" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <div className="rounded-lg bg-neutral-900/60 p-3 text-sm text-white/80">
                  ???????????UI???? {i}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
