export default function CTA() {
  return (
    <section id="cta" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="glass overflow-hidden rounded-2xl">
          <div className="grid items-center gap-6 p-8 lg:grid-cols-12 lg:p-12">
            <div className="lg:col-span-7">
              <h3 className="text-2xl font-bold sm:text-3xl">??????????????????</h3>
              <p className="mt-3 text-white/70">??????????????????????????????????????????????</p>
            </div>
            <div className="lg:col-span-5">
              <form className="grid gap-3 sm:grid-cols-2">
                <input className="rounded-md border border-white/10 bg-neutral-900/60 px-3 py-2 text-sm outline-none placeholder:text-white/40 focus:ring-2 focus:ring-primary-500 sm:col-span-1" placeholder="???" />
                <input className="rounded-md border border-white/10 bg-neutral-900/60 px-3 py-2 text-sm outline-none placeholder:text-white/40 focus:ring-2 focus:ring-primary-500 sm:col-span-1" placeholder="???????" />
                <textarea className="rounded-md border border-white/10 bg-neutral-900/60 px-3 py-2 text-sm outline-none placeholder:text-white/40 focus:ring-2 focus:ring-primary-500 sm:col-span-2" placeholder="?????" rows={3} />
                <button type="button" className="rounded-md bg-primary-600 px-4 py-2 text-sm font-semibold hover:bg-primary-500 sm:col-span-2">??</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
