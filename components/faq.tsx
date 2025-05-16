import Link from "next/link";

type QA = { q: string; a: string }
const faqs: QA[] = [
  {
    q: 'Do I need blockchain knowledge to attend?',
    a: ' No. Every cohort starts with hands-on user training wallet setup, on-chain basics, and safety tips. From there we mentor you',
  },
  {
    q: 'How much does it cost?',
    a: 'Zero shillings.Our workshops are fully sponsored by Web3 protocols and ecosystem partners, so venue, facilitation, and materials are covered.',
  },
  {
    q: 'Do I need prior coding experience?',
    a: 'No. We run parallel beginner and developer tracks—non-technical roles (marketing, community, PM) are welcome.',
  },
]

export default function Faq() {
  return (
    <section className='mx-auto mt-24 max-w-3xl px-6 lg:px-8'>
    <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
      Frequently&nbsp;Asked&nbsp;Questions
    </h2>

    <div className='mt-10 space-y-4'>

      {/* 1 */}
      <details className='group rounded-lg border border-gray-200 p-4 open:shadow-md transition'>
        <summary className='flex cursor-pointer items-center justify-between text-sm font-medium text-[#0a3224]'>
          Do I need blockchain knowledge to attend?
          <span className='ml-4 h-5 w-5 rotate-0 text-gray-400 transition group-open:rotate-180'>▼</span>
        </summary>
        <p className='mt-2 text-sm leading-6 text-gray-700'>
          No. Every cohort starts with <strong>hands-on user training</strong>
          — wallet setup, on-chain basics, and safety tips. From there we mentor
          you until you can pick a path in development, community, or marketing.
        </p>
      </details>

      {/* 2 */}
      <details className='group rounded-lg border border-gray-200 p-4 open:shadow-md transition'>
        <summary className='flex cursor-pointer items-center justify-between text-sm font-medium text-[#0a3224]'>
          How much does it cost?
          <span className='ml-4 h-5 w-5 rotate-0 text-gray-400 transition group-open:rotate-180'>▼</span>
        </summary>
        <p className='mt-2 text-sm leading-6 text-gray-700'>
          <strong>Zero shillings.</strong> Our workshops are fully sponsored by Web3
          protocols and ecosystem partners, so venue, facilitation, and materials are covered.
        </p>
      </details>

      {/* 3 */}
      <details className='group rounded-lg border border-gray-200 p-4 open:shadow-md transition'>
        <summary className='flex cursor-pointer items-center justify-between text-sm font-medium text-[#0a3224]'>
          Can I request an event for my community?
          <span className='ml-4 h-5 w-5 rotate-0 text-gray-400 transition group-open:rotate-180'>▼</span>
        </summary>
        <div className='mt-2 space-y-3 text-sm leading-6 text-gray-700'>
          <p>Absolutely! We love taking Mashinani on the road.</p>
          <Link
            href='/contact'         
            className='inline-block rounded-full bg-[#b36e5c] px-6 py-2 font-semibold text-black shadow hover:bg-[#0a3224] hover:text-white'
          >
            Request an Event
          </Link>
        </div>
      </details>

      {/* 4 */}
      <details className='group rounded-lg border border-gray-200 p-4 open:shadow-md transition'>
        <summary className='flex cursor-pointer items-center justify-between text-sm font-medium text-[#0a3224]'>
          How do I sponsor?
          <span className='ml-4 h-5 w-5 rotate-0 text-gray-400 transition group-open:rotate-180'>▼</span>
        </summary>
        <div className='mt-2 space-y-3 text-sm leading-6 text-gray-700'>
          <p>
            Partner with us to fund cohorts, provide dev tooling credits, or
            host bounties. We’ll highlight your brand across all sessions.
          </p>
          <Link
            href='/sponsor'            
            className='inline-block rounded-full bg-[#0a3224] px-6 py-2 font-semibold text-white shadow hover:bg-[#b36e5c] hover:text-black'
          >
            Become a Sponsor
          </Link>
        </div>
      </details>

    </div>
  </section>
  )
}
