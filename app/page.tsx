import Image from 'next/image'
import Header from './header'
import { footerNavigation, people, secondaryFeatures } from '@/data/data'
import Link from 'next/link'

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
                <h1 className='max-w-2xl text-4xl font-bold tracking-tight text-black sm:text-6xl'>
                  Welcome to The Web3 Mashinani
                </h1>
                <p className='mt-6 text-lg leading-8 text-black]'>
                  Empowering grassroots youth with the transformative power of blockchain and
                  decentralized technology. Our mission goes beyond mere adoption&mdash;it&apos;s about
                  igniting a new wave of innovation at the local level. Join us in bridging the
                  digital divide, amplifying young voices, and reshaping the future&mdash;one
                  block at a time.
                </p>
                <div className='mt-4 flex items-center gap-x-6'>
                  <form className='mt-2 flex  gap-x-4'>
                    <label htmlFor='email-address' className='sr-only'>
                      Email address
                    </label>

                    <Link
                      href='https://t.me/+w2aY7_Hvy7M2ZjM0'
                      target='_blank'
                      className='flex-none rounded-full bg-[#b36e5c] hover:bg-[#0a3224] hover:text-white px-8 py-2.5 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
                    >
                      Join the community
                    </Link>
                  </form>
                </div>
              </div>
              <div className=''>
                <Image
                  className='w-full h-full'
                  src='/assets/hero-image.png'
                  alt='Hero Image'
                  width={2432}
                  height={1442}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Logo cloud */}
        <div className='mx-auto sm:mt-28 max-w-7xl px-6 lg:px-8'>
          <p className='py-10 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center'>
            We featured on
            <br /> popular partners like
          </p>
          <div className='mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-8'>
            <Image
              className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
              src='/assets/Aquapurge.png'
              alt='Aquapurge'
              width={158}
              height={48}
            />
            <Image
              className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
              src='/assets/Hustle-Yangu.png'
              alt='Hustle Yangu'
              width={158}
              height={48}
            />
            <Image
              className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
              src='/assets/Kimani-capital.png'
              alt='Kimani Capital'
              width={158}
              height={48}
            />
            <Image
              className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
              src='/assets/NFT-Kenya.png'
              alt='NFT Kenya'
              width={158}
              height={48}
            />
            <Image
              className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
              src='/assets/Metametaclub_.png'
              alt='Meta Meta Club'
              width={158}
              height={48}
            />
            <Image
              className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
              src='/assets/Kamusi-DAO-Logo.png'
              alt='Kamusi DAO'
              width={158}
              height={48}
            />
            <Image
              className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
              src='/assets/Cryptohubke.png'
              alt='Crypto Hub Kenya'
              width={158}
              height={48}
            />
            <Image
              className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
              src='/assets/Bonnkewest.png'
              alt='Bonnke West'
              width={158}
              height={48}
            />
          </div>
        </div>

        {/* Feature section */}
        <div className='mx-auto mt-8 max-w-5xl px-6 sm:mt-28 lg:px-16 bg-[#0a3224] rounded-xl py-10'>
          <div className='mx-auto max-w-2xl lg:text-center'>
            <p className='mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl'>
              Our Mission
            </p>
          </div>
          <div className='mx-auto mt-6 max-w-2xl sm:mt-8 lg:mt-10 lg:max-w-none'>
            <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3'>
              {secondaryFeatures.map((feature) => (
                <div key={feature.name} className='flex flex-col'>
                  <div className='w-12 h-12 bg-white rounded-full flex items-center justify-center font-bold text-lg mb-4'>
                    {feature.featureNumber}
                  </div>
                  <dt className='flex gap-x-3 text-xl font-bold leading-7 text-white'>
                    {feature.name}
                  </dt>
                  <dd className='mt-4 flex flex-auto flex-col text-base leading-7 text-white'>
                    <p className='flex-auto '>{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className='relative isolate pt-4'>
          <div className='mx-auto max-w-7xl px-6 py-8 sm:py-16 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-24'>
            <div className='mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow'>
              <div className='mt-16 sm:mt-24 lg:mt-0'>
                <Image
                  className=''
                  src='/assets/streaming.png'
                  alt='Hero Image'
                  width={500}
                  height={2000}
                />
              </div>
            </div>
            <div className='mx-auto max-w-2xl lg:mx-0 lg:flex-auto'>
              <h2 className='max-w-xl text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                Building Grassroots Web3 Communities
              </h2>
              <p className='mt-6 text-md leading-8 text-gray-600'>
                At Web3 Mashinani, we focus on bridging the digital divide by bringing
                accessible blockchain and decentralized technology training directly
                to grassroots youth. Our goal is simple: equip the next generation
                with the skills and confidence to thrive in a decentralized future.
              </p>
            </div>
          </div>
        </div>

        <div className='relative isolate pt-4'>
          <div className='mx-auto max-w-7xl px-6 py-8 lg:flex lg:items-center lg:gap-x-10 lg:px-8'>
            <div className='mx-auto max-w-2xl lg:mx-0 lg:flex-auto'>
              <h2 className='max-w-xl text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                Empowering Youth Through Real-World Applications
              </h2>
              <p className='mt-6 text-md leading-8 text-gray-600'>
                From digital identity solutions to financial inclusion and beyond,
                our programs connect young innovators with the tools they need to
                address community challenges. Through hands-on workshops and
                ongoing mentorship, we nurture a culture of exploration,
                collaboration, and long-term success.
              </p>
            </div>
            <div className='mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow'>
              <div className='mt-16 sm:mt-24 lg:mt-0'>
                <Image
                  className=''
                  src='/assets/nft.png'
                  alt='Hero Image'
                  width={500}
                  height={2000}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="relative isolate pt-14 bg-[url('/assets/Bg.svg')] bg-no-repeat bg-cover">
          <div className='mx-auto max-w-7xl px-6 py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8'>
            <div className='mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow'>
              <div>
                <Image
                  className=''
                  src='/assets/news-image.png'
                  alt='Hero Image'
                  width={500}
                  height={2000}
                />
              </div>
            </div>
            <div className='mx-auto max-w-2xl lg:mx-0 lg:flex-auto'>
              <h2 className='max-w-xl text-2xl font-bold tracking-tight text-white sm:text-4xl'>
                A Community-Driven Ecosystem
              </h2>
              <p className='mt-6 text-md leading-8 text-white'>
                Web3 Mashinani is more than an educational program&mdash;it&apos;s a growing
                network of changemakers. We collaborate with local organizations
                and tech partners to amplify our impact, ensuring our youth
                communities stay informed, inspired, and equipped to lead
                Africa&apos;s next wave of decentralized innovation.
              </p>
            </div>
          </div>
        </div>

        {/* Team section */}
        <div className='relative isolate pt-10 sm:pt-32'>
          <div className='relative'>
            <div className='mx-auto max-w-7xl px-6 lg:px-8'>
              <div className='mx-auto max-w-7xl px-6 text-center lg:px-8'>
                <div className='mx-auto max-w-2xl'>
                  <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                    Meet our team
                  </h2>
                  <p className='mt-4 text-lg leading-8 text-gray-600'>
                    We&apos;re a dynamic group of individuals who are passionate
                    about what we do.
                  </p>
                </div>
                <ul
                  role='list'
                  className='mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 md:grid-cols-3 lg:mx-0 lg:max-w-none lg:grid-cols-4'
                >
                  {people.map((person) => (
                    <li key={person.name}>
                      <Image
                        className='mx-auto h-56 w-56 rounded-full'
                        src={person.imageUrl}
                        alt={person.name}
                        width={200}
                        height={200}
                      />
                      <h3 className='mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900'>
                        {person.name}
                      </h3>
                      <p className='text-sm leading-6 text-gray-600'>
                        {person.role}
                      </p>
                      <ul
                        role='list'
                        className='mt-6 flex justify-center gap-x-6'
                      >
                        <li>
                          <Link
                            href={person.twitterUrl}
                            className='text-gray-400 hover:text-gray-500'
                            target='_blank'
                          >
                            <span className='sr-only'>Twitter</span>
                            <svg
                              className='h-5 w-5'
                              aria-hidden='true'
                              fill='currentColor'
                              viewBox='0 0 20 20'
                            >
                              <path d='M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84' />
                            </svg>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={person.linkedinUrl}
                            className='text-gray-400 hover:text-gray-500'
                            target='_blank'
                          >
                            <span className='sr-only'>LinkedIn</span>
                            <svg
                              className='h-5 w-5'
                              aria-hidden='true'
                              fill='currentColor'
                              viewBox='0 0 20 20'
                            >
                              <path
                                fillRule='evenodd'
                                d='M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z'
                                clipRule='evenodd'
                              />
                            </svg>
                          </Link>
                        </li>
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

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
                href='https://t.me/+w2aY7_Hvy7M2ZjM0'
                target='_blank'
                className='flex-none rounded-full bg-[#b36e5c] px-8 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-[#0a3224] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
              >
                Join the community
              </Link>
            </div>
          </div>
        </div>
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
