import Image from 'next/image'
import Header from './header'
import { footerNavigation, people, secondaryFeatures, events, gallery, impact } from '@/data/data'
import Link from 'next/link'
import ImpactCarousel from '@/components/content'
import mashHero from '@/public/assets/mashHero.jpeg'
import ImpactStats from '@/components/impact'
import Faq from '@/components/faq'
import CtaSponsor from '@/components/cta-sponsor'



export default async function Home() {
  return (
    <div className='bg-white'>
      <main>
        <div className='bg-white'>
          {/* Header */}
          <Header />

          {/* Hero section */}
          <div className='relative isolate pt-14'>
            <div className='mx-auto max-w-7xl px-6 py-12 sm:py-20 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-28'>
              <div className='mx-auto max-w-2xl lg:mx-0 lg:flex-auto text-black'>
                <h1 className='max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl'>
                  Welcome to The Web3 Mashinani Initiative
                </h1>
                <p className='mt-6 text-lg leading-8'>
                  Empowering grassroots youth with the transformative power of blockchain and
                  decentralized technology. Our focus is practical: training, onboarding, and upskilling
                  in community‑building, development, marketing, and beyond. Join us in bridging the
                  digital divide, amplifying young voices, and reshaping the future—one block at a time.
                </p>
                <div className='mt-6'>
                  <Link
                    href='https://chat.whatsapp.com/Jlgj3rWVsQfKQfE0bqfEY9'
                    target='_blank'
                    className='inline-block rounded-full bg-[#b36e5c] px-8 py-3 text-sm font-semibold text-black shadow hover:bg-[#0a3224] hover:text-white'
                  >
                    Join the community
                  </Link>
                </div>
              </div>
              <div className='mt-10 lg:mt-0 lg:flex-shrink-0'>
                <Image
                  className='w-full max-w-lg'
                  src={mashHero}
                  alt='Hero Image'
                  width={1000}
                  height={721}
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Partner logo cloud */}
        <section className='mx-auto max-w-7xl px-6 sm:mt-24'>
          <h2 className='py-10 text-center text-3xl font-bold tracking-tight sm:text-4xl'>Our Partners</h2>
          <div className='mx-auto grid max-w-lg grid-cols-2 place-items-center gap-8 sm:max-w-xl sm:grid-cols-3 lg:max-w-none lg:grid-cols-4'>
            {[
              { src: '/assets/LL.png', alt: 'Lile Labs' },
              { src: '/assets/Minipay.png', alt: 'Minipay' },
              { src: '/assets/WDC.svg', alt: 'Aquapurge' },
              { src: '/assets/NSA.svg', alt: 'Nurturing Stars Organization' },
            ].map((logo) => (
              <Image
                key={logo.alt}
                className='max-h-12 w-full object-contain opacity-90'
                {...logo}
                width={158}
                height={48}
              />
            ))}
          </div>
        </section>
        <CtaSponsor/>

        {/* Feature section – compact */}
        <section className='mx-auto mt-16 max-w-5xl rounded-xl bg-[#0a3224] px-6 py-12 sm:mt-24 lg:px-16'>
          <div className='mx-auto max-w-2xl text-center'>
            <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>Our Mission</h2>
          </div>
          <dl className='mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3'>
            {secondaryFeatures.map((feature) => (
              <div key={feature.name} className='flex flex-col'>
                <div className='mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg font-bold'>
                  {feature.featureNumber}
                </div>
                <dt className='text-lg font-semibold text-white'>{feature.name}</dt>
                <dd className='mt-2 text-sm text-white/90'>{feature.description}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Events section */}
        <section className='mx-auto mt-24 max-w-7xl px-6 lg:px-8'>
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            Upcoming Events
          </h2>

          <ul className='mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
            {events
              /* optional: keep “active” cards first */
              .sort((a, b) => Number(a.done) - Number(b.done))
              .map((event) => (
                <li
                  key={event.title}
                  className={`relative overflow-hidden rounded-xl border
                      border-gray-200 p-6 shadow-sm transition
                      ${event.done ? 'grayscale opacity-70' : 'hover:shadow-lg'}`}
                >
                  {/* ribbon */}
                  {event.done && (
                    <span
                      className='absolute right-4 top-4 rotate-45 select-none
               rounded bg-[linear-gradient(135deg,#0a3224_0%,#b36e5c_100%)] px-6 py-0.5 text-[11px]
               font-bold uppercase tracking-wide text-white shadow'
                    >
                      Completed
                    </span>
                  )}

                  <p
                    className={`text-sm font-medium ${event.done ? 'text-gray-500 line-through' : 'text-[#0a3224]'
                      }`}
                  >
                    {event.date}
                  </p>

                  <h3 className='mt-1 text-lg font-semibold'>{event.title}</h3>
                  <p className='mt-2 text-sm text-gray-600'>{event.location}</p>
                  <p className='mt-4 text-sm text-gray-700'>{event.description}</p>
                </li>
              ))}
          </ul>
        </section>

        {/* Gallery section */}
        <section className='mx-auto mt-24 max-w-7xl px-6 lg:px-8'>
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>Gallery</h2>
          <div className='mt-10 columns-2 gap-4 sm:columns-3'>
            {gallery.map((img, i) => (
              <div
                key={typeof img === 'string' ? img : img.src}   // ✅ string or number only
                className='break-inside-avoid mb-4'
              >
                <Image
                  src={img}
                  alt={`Event image ${i + 1}`}
                  width={600}
                  height={400}
                  className='w-full h-auto rounded-lg object-cover'
                />
              </div>
            ))}
          </div>
        </section>
        {/*<ImpactStats/>*/}
        <ImpactCarousel />


        {/* Team section */}
        <section className='mx-auto mt-24 max-w-7xl px-6 lg:px-8'>
          <header className='text-center'>
            <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
              Meet our team
            </h2>
            <p className='mx-auto mt-4 max-w-xl text-lg leading-8 text-gray-600'>
              We&apos;re a dynamic group of builders, dreamers&nbsp;&amp; doers.
            </p>
          </header>

          <ul
            role='list'
            className='mt-16 grid auto-rows-fr gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4'
          >
            {people.map((person) => (
              <li
                key={person.name}
                className='group relative flex flex-col items-center rounded-[18px] bg-white/70 backdrop-blur
                       p-6 shadow transition hover:-translate-y-1 hover:shadow-xl'
              >
                {/* gradient ring */}
                <div className='absolute inset-0 rounded-[18px] ring-1 ring-inset ring-gray-200 group-hover:ring-[#b36e5c]/50' />

                {/* avatar */}
                <Image
                  src={person.imageUrl}
                  alt={person.name}
                  width={160}
                  height={160}
                  className='relative z-10 h-40 w-40 rounded-xl object-cover object-top'
                  priority
                />

                {/* name + role */}
                <h3 className='relative z-10 mt-4 text-base font-semibold leading-7 text-gray-900'>
                  {person.name}
                </h3>
                <p className='relative z-10 text-sm leading-6 text-gray-600'>
                  {person.role}
                </p>

                {/* socials – fade in on hover */}
                <div className='relative z-10 mt-4 flex gap-4'>
                  {person.twitterUrl && (
                    <Link
                      href={person.twitterUrl}
                      target='_blank'
                      aria-label={`${person.name} on Twitter`}
                      className='text-gray-400 transition hover:text-[#1DA1F2] hover:scale-110'
                    >
                      <svg className='h-5 w-5'
                        aria-hidden='true'
                        fill='currentColor'
                        viewBox='0 0 20 20'>
                        <path d='M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84' />
                      </svg>
                    </Link>
                  )}
                  {person.linkedinUrl && (
                    <Link
                      href={person.linkedinUrl}
                      target='_blank'
                      aria-label={`${person.name} on LinkedIn`}
                      className='text-gray-400 transition hover:text-[#0077B5] hover:scale-110'
                    >
                      <svg className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
                        <path
                          fillRule='evenodd'
                          d='M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </Link>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </section>
        {/* Newsletter section */}
        <div className='mx-auto pt-10 sm:pt-32'>
          <div className='relative isolate overflow-hidden bg-[#22252E] py-24 sm:px-24'>
            <h2 className='mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl'>
              Get our latest news &amp; update regularly
            </h2>
            <p className='mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300'>
              We recommended you to subscribe to our newsletter, drop your email
              below to get regular updates.
            </p>
            <div className='mt-10 flex item-center justify-center'>
              <Link
                href='https://chat.whatsapp.com/Jlgj3rWVsQfKQfE0bqfEY9'
                target='_blank'
                className='flex-none rounded-full bg-[#b36e5c] px-8 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-[#0a3224] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
              >
                Join the community
              </Link>
            </div>
          </div>
        </div>
        <Faq/>
      </main>

      {/* Footer */}
      <footer className='' aria-labelledby='footer-heading'>
        <h2 id='footer-heading' className='sr-only'>
          Footer
        </h2>
        <div className='mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32 text-black'>
          <div className='xl:grid xl:grid-cols-3 xl:gap-8'>
            <Image
              className='h-16 w-auto'
              src='/assets/WMLogo.svg'
              alt='Web3 Mashinani'
              width={100}
              height={100}
            />
            <div className='mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0'>
              <div className='md:grid md:grid-cols-2 md:gap-8'>
                <div>
                  <h3 className='text-sm font-semibold leading-6'>
                    Navigate
                  </h3>
                  <ul role='list' className='mt-6 space-y-4'>
                    {footerNavigation.navigate.map((item) => (
                      <li key={item.name}>
                        <Link href={item.href} className='text-sm leading-6'>
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className='mt-10 md:mt-0'>
                  <h3 className='text-sm font-semibold leading-6'>
                    Support us
                  </h3>
                  <ul role='list' className='mt-6 space-y-4'>
                    {footerNavigation.support.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className='text-sm leading-6'>
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className='md:grid md:grid-cols-2 md:gap-8'>
                <div>
                  <h3 className='text-sm font-semibold leading-6'>
                    Partner
                  </h3>
                  <ul role='list' className='mt-6 space-y-4'>
                    {footerNavigation.partner.map((item) => (
                      <li key={item.name}>
                        <Link href={item.href} className='text-sm leading-6'>
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className='mt-10 md:mt-0'>
                  <h3 className='text-sm font-semibold leading-6'>
                    Contact us
                  </h3>
                  <ul role='list' className='mt-6 space-y-4'>
                    {footerNavigation.contacts.map((item) => (
                      <li key={item.name}>
                        <Link href={item.href} className='text-sm leading-6'>
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className='mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24 lg:flex lg:items-center lg:justify-between'>
            <div>
              <h3 className='text-sm font-semibold leading-6'>
                Subscribe to our newsletter
              </h3>
              <p className='mt-2 text-sm leading-6'>
                The latest news, articles, and resources, sent to your inbox
                weekly.
              </p>
            </div>
            <form className='mt-6 sm:flex sm:max-w-md lg:mt-0'>
              <label htmlFor='email-address' className='sr-only'>
                Email address
              </label>
              <input
                type='email'
                name='email-address'
                id='email-address'
                autoComplete='email'
                required
                className='w-full min-w-0 appearance-none rounded-full border-2 border-gray-500 bg-white/5 px-3 py-1.5 text-base shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-[#27946B] sm:w-56 sm:text-sm sm:leading-6'
                placeholder='Enter your email'
              />
              <div className='mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0'>
                <button
                  type='submit'
                  className='flex w-full items-center justify-center rounded-full bg-[#b36e5c] text-white px-6 py-2 text-sm font-semibold shadow-sm hover:bg-[#0a3224] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#27946B]'
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
          <div className='mt-8 border-t border-white/10 pt-8 md:flex md:items-center md:justify-between'>
            <div className='flex space-x-6 md:order-2'>
              {footerNavigation.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className='text-gray-500 hover:text-gray-400'
                >
                  <span className='sr-only'>{item.name}</span>
                  <item.icon className='h-6 w-6' aria-hidden='true' />
                </Link>
              ))}
            </div>
            <p className='mt-8 text-xs leading-5 md:order-1 md:mt-0'>
              &copy; Web3 Mashinani. 2025. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
