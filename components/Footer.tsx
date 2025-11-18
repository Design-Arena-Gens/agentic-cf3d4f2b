export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-10 text-sm text-white/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p>? {new Date().getFullYear()} ??????. All rights reserved.</p>
          <nav className="flex items-center gap-6">
            <a href="#" className="hover:text-white">??????</a>
            <a href="#" className="hover:text-white">????</a>
            <a href="#" className="hover:text-white">??????</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
