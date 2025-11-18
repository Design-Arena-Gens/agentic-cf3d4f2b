export default function Pricing() {
  const tiers = [
    {
      name: '?????',
      price: '?98,000?',
      features: ['??????????', '1???', '??SEO', '1????'],
      highlight: false,
    },
    {
      name: '??????',
      price: '?248,000?',
      features: ['?????????', '3?5???', 'SEO??', '2?3????'],
      highlight: true,
    },
    {
      name: '?????',
      price: '?498,000?',
      features: ['????????', '6?????', '??????????', '????'],
      highlight: false,
    },
  ];

  return (
    <section id="pricing" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">?????</h2>
          <p className="mt-3 text-base text-white/70">????????????????????</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div key={tier.name} className={`glass rounded-2xl p-6 ${tier.highlight ? 'ring-2 ring-primary-500' : ''}`}>
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-semibold">{tier.name}</h3>
                {tier.highlight && (
                  <span className="rounded-full bg-primary-600/20 px-3 py-1 text-xs text-primary-200">????</span>
                )}
              </div>
              <div className="mt-4 text-3xl font-extrabold">{tier.price}</div>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#cta" className="mt-6 block rounded-md bg-primary-600 px-4 py-2 text-center text-sm font-semibold hover:bg-primary-500">????</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
