/* components/cta-sponsor.tsx */
import Link from 'next/link'

export default function CtaSponsor() {
  return (
    <section className="relative isolate mx-auto mt-20 max-w-7xl overflow-hidden
                        rounded-xl bg-gradient-to-r from-[#0a3224] to-[#195b43]
                        px-6 py-14 text-center shadow-lg lg:px-12">
      {/* subtle pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-10"
           style={{backgroundImage:'url(/assets/noise.png)'}} />

      <h2 className="mx-auto max-w-3xl text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
        Empower thousands of grassroots innovators.<br className="hidden sm:inline"/>
        <span className="text-[#b36e5c]">Partner&nbsp;or&nbsp;sponsor&nbsp;a&nbsp;cohort.</span>
      </h2>

      <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-gray-100/90">
        Cover venue costs, supply tooling credits, or host a bounty challenge —
        your brand will be spotlighted across every workshop and demo day.
      </p>

      <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Link
          href="/sponsor"         /* update routes or mailto/WhatsApp */
          className="rounded-full bg-[#b36e5c] px-8 py-3 text-sm font-semibold text-black
                     shadow-md transition hover:scale-105 hover:bg-white"
        >
          Become a Sponsor
        </Link>
        <Link
          href="/contact"
          className="rounded-full border border-white/50 px-8 py-3 text-sm font-semibold
                     text-white transition hover:border-white hover:bg-white/10 hover:scale-105"
        >
          Host an Event
        </Link>
      </div>
    </section>
  )
}
