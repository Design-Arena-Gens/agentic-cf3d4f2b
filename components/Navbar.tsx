export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between rounded-xl glass px-4 py-3">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-block h-6 w-6 rounded bg-gradient-to-tr from-primary-500 to-violet-500" />
            <span className="text-sm font-semibold tracking-wide text-white/90">??????</span>
          </a>
          <nav className="hidden gap-6 text-sm font-medium text-white/70 md:flex">
            <a className="hover:text-white" href="#features">??</a>
            <a className="hover:text-white" href="#showcase">???</a>
            <a className="hover:text-white" href="#pricing">??</a>
            <a className="hover:text-white" href="#cta">??????</a>
          </nav>
          <a href="#cta" className="hidden rounded-md bg-primary-600 px-3.5 py-2 text-sm font-semibold shadow-lg shadow-primary-600/20 transition hover:bg-primary-500 md:inline-block">??????</a>
        </div>
      </div>
    </header>
  );
}
