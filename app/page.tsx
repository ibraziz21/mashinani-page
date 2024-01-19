
import Header from './header';
import { footerNavigation, people, secondaryFeatures } from '@/data/data';



export default function Home() {
  return (
    <div className='bg-white'>
      {/* Header */}
      <Header />

      <main>
        {/* Hero section */}
        <div className='relative isolate pt-14'>
          <svg
            className='absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]'
            aria-hidden='true'
          >
            <defs>
              <pattern
                id='83fd4e5a-9d52-42fc-97b6-718e5d7ee527'
                width={200}
                height={200}
                x='50%'
                y={-1}
                patternUnits='userSpaceOnUse'
              >
                <path d='M100 200V.5M.5 .5H200' fill='none' />
              </pattern>
            </defs>
            <svg x='50%' y={-1} className='overflow-visible fill-gray-50'>
              <path
                d='M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z'
                strokeWidth={0}
              />
            </svg>
            <rect
              width='100%'
              height='100%'
              strokeWidth={0}
              fill='url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)'
            />
          </svg>
          <div className='mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40'>
            <div className='mx-auto max-w-2xl lg:mx-0 lg:flex-auto'>
              <h1 className='max-w-lg text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
                Welcome to Crypto Koala Web3 Studios
              </h1>
              <p className='mt-6 text-lg leading-8 text-gray-600'>
                More Than Streaming, Its a Revolution. Our mission extends
                beyond screens, beyond borders. As a hub for Web3, blockchain,
                and AI, we invite you to join us in creating a space where
                African creativity meets global innovation. Explore, engage, and
                empower with Crypto Koala.
              </p>
              <div className='mt-4 flex items-center gap-x-6'>
                <form className='mt-2 flex  gap-x-4'>
                  <label htmlFor='email-address' className='sr-only'>
                    Email address
                  </label>
                  <input
                    id='email-address'
                    name='email'
                    type='email'
                    autoComplete='email'
                    required
                    className='min-w-0 flex-auto rounded-md border-2 bg-white/5 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6'
                    placeholder='Enter your email'
                  />
                  <button
                    type='submit'
                    className='flex-none rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
                  >
                    Get started
                  </button>
                </form>
              </div>
            </div>
            <div className='mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow'>
              <svg
                viewBox='0 0 366 729'
                role='img'
                className='mx-auto w-[22.875rem] max-w-full drop-shadow-xl'
              >
                <title>App screenshot</title>
                <defs>
                  <clipPath id='2ade4387-9c63-4fc4-b754-10e687a0d332'>
                    <rect width={316} height={684} rx={36} />
                  </clipPath>
                </defs>
                <path
                  fill='#4B5563'
                  d='M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 0 0 1 111.009v24.611a2 2 0 0 0 1.671 1.973l.95.158a2.26 2.26 0 0 1-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 0 0 1 167.009v47.611a2 2 0 0 0 1.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 0 0 1 237.009v47.611a2 2 0 0 0 1.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843l.141.001h.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 0 0 366 266.62v-77.611a2 2 0 0 0-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z'
                />
                <path
                  fill='#343E4E'
                  d='M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615c0 23.196-18.804 42-42 42H58c-23.196 0-42-18.804-42-42V59Z'
                />
                <foreignObject
                  width={316}
                  height={684}
                  transform='translate(24 24)'
                  clipPath='url(#2ade4387-9c63-4fc4-b754-10e687a0d332)'
                >
                  <img
                    src='https://tailwindui.com/img/component-images/mobile-app-screenshot.png'
                    alt=''
                  />
                </foreignObject>
              </svg>
            </div>
          </div>
        </div>

        {/* Logo cloud */}
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <p className='py-10 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center'>
            We Featured on popular Partners like
          </p>
          <div className='mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5'>
            <img
              className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
              src='https://tailwindui.com/img/logos/158x48/transistor-logo-gray-400.svg'
              alt='Transistor'
              width={158}
              height={48}
            />
            <img
              className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
              src='https://tailwindui.com/img/logos/158x48/reform-logo-gray-400.svg'
              alt='Reform'
              width={158}
              height={48}
            />
            <img
              className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
              src='https://tailwindui.com/img/logos/158x48/tuple-logo-gray-400.svg'
              alt='Tuple'
              width={158}
              height={48}
            />
            <img
              className='col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1'
              src='https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-400.svg'
              alt='SavvyCal'
              width={158}
              height={48}
            />
            <img
              className='col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1'
              src='https://tailwindui.com/img/logos/158x48/statamic-logo-gray-400.svg'
              alt='Statamic'
              width={158}
              height={48}
            />
          </div>
        </div>

        {/* Feature section */}
        <div className='mx-auto mt-8 max-w-7xl px-6 sm:mt-40 lg:px-8 bg-gray-300 rounded-xl py-10'>
          <div className='mx-auto max-w-2xl lg:text-center'>
            <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
              Our Mission{' '}
            </p>
          </div>
          <div className='mx-auto mt-6 max-w-2xl sm:mt-8 lg:mt-10 lg:max-w-none'>
            <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3'>
              {secondaryFeatures.map((feature) => (
                <div key={feature.name} className='flex flex-col'>
                  <dt className='flex gap-x-3 text-base font-semibold leading-7 text-gray-900'>
                    {feature.name}
                  </dt>
                  <dd className='mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600'>
                    <p className='flex-auto '>{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className='relative isolate pt-14'>
          <svg
            className='absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]'
            aria-hidden='true'
          >
            <defs>
              <pattern
                id='83fd4e5a-9d52-42fc-97b6-718e5d7ee527'
                width={200}
                height={200}
                x='50%'
                y={-1}
                patternUnits='userSpaceOnUse'
              >
                <path d='M100 200V.5M.5 .5H200' fill='none' />
              </pattern>
            </defs>
            <svg x='50%' y={-1} className='overflow-visible fill-gray-50'>
              <path
                d='M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z'
                strokeWidth={0}
              />
            </svg>
            <rect
              width='100%'
              height='100%'
              strokeWidth={0}
              fill='url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)'
            />
          </svg>
          <div className='mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40'>
            <div className='mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow'>
              <svg
                viewBox='0 0 366 729'
                role='img'
                className='mx-auto w-[22.875rem] max-w-full drop-shadow-xl'
              >
                <title>App screenshot</title>
                <defs>
                  <clipPath id='2ade4387-9c63-4fc4-b754-10e687a0d332'>
                    <rect width={316} height={684} rx={36} />
                  </clipPath>
                </defs>
                <path
                  fill='#4B5563'
                  d='M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 0 0 1 111.009v24.611a2 2 0 0 0 1.671 1.973l.95.158a2.26 2.26 0 0 1-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 0 0 1 167.009v47.611a2 2 0 0 0 1.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 0 0 1 237.009v47.611a2 2 0 0 0 1.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843l.141.001h.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 0 0 366 266.62v-77.611a2 2 0 0 0-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z'
                />
                <path
                  fill='#343E4E'
                  d='M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615c0 23.196-18.804 42-42 42H58c-23.196 0-42-18.804-42-42V59Z'
                />
                <foreignObject
                  width={316}
                  height={684}
                  transform='translate(24 24)'
                  clipPath='url(#2ade4387-9c63-4fc4-b754-10e687a0d332)'
                >
                  <img
                    src='https://tailwindui.com/img/component-images/mobile-app-screenshot.png'
                    alt=''
                  />
                </foreignObject>
              </svg>
            </div>
            <div className='mx-auto max-w-2xl lg:mx-0 lg:flex-auto'>
              <h1 className='max-w-xl text-lg font-bold tracking-tight text-gray-900 sm:text-2xl'>
                Innovation Beyond Streaming
              </h1>
              <p className='mt-6 text-md leading-8 text-gray-600'>
                We are not confined to conventional storytelling. Instead, we
                embrace a mix of innovative storytelling, user-generated content
                (UGC), and experiential events.
              </p>
            </div>
          </div>
        </div>

        <div className='relative isolate pt-4'>
          <svg
            className='absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]'
            aria-hidden='true'
          >
            <defs>
              <pattern
                id='83fd4e5a-9d52-42fc-97b6-718e5d7ee527'
                width={200}
                height={200}
                x='50%'
                y={-1}
                patternUnits='userSpaceOnUse'
              >
                <path d='M100 200V.5M.5 .5H200' fill='none' />
              </pattern>
            </defs>
            <svg x='50%' y={-1} className='overflow-visible fill-gray-50'>
              <path
                d='M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z'
                strokeWidth={0}
              />
            </svg>
            <rect
              width='100%'
              height='100%'
              strokeWidth={0}
              fill='url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)'
            />
          </svg>
          <div className='mx-auto max-w-7xl px-6 py-4 sm:py-8 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-10'>
            <div className='mx-auto max-w-2xl lg:mx-0 lg:flex-auto'>
              <h1 className='max-w-xl text-lg font-bold tracking-tight text-gray-900 sm:text-2xl'>
                Supporting African Creatives
              </h1>
              <p className='mt-6 text-md leading-8 text-gray-600'>
                Central to our ethos is the development and promotion of
                Non-Fungible Tokens (NFTs). We provide a launchpad for African
                creatives to showcase their artistic visions, not only ensuring
                visibility but also providing vital financial support.
              </p>
            </div>
            <div className='mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow'>
              <svg
                viewBox='0 0 366 729'
                role='img'
                className='mx-auto w-[22.875rem] max-w-full drop-shadow-xl'
              >
                <title>App screenshot</title>
                <defs>
                  <clipPath id='2ade4387-9c63-4fc4-b754-10e687a0d332'>
                    <rect width={316} height={684} rx={36} />
                  </clipPath>
                </defs>
                <path
                  fill='#4B5563'
                  d='M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 0 0 1 111.009v24.611a2 2 0 0 0 1.671 1.973l.95.158a2.26 2.26 0 0 1-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 0 0 1 167.009v47.611a2 2 0 0 0 1.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 0 0 1 237.009v47.611a2 2 0 0 0 1.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843l.141.001h.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 0 0 366 266.62v-77.611a2 2 0 0 0-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z'
                />
                <path
                  fill='#343E4E'
                  d='M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615c0 23.196-18.804 42-42 42H58c-23.196 0-42-18.804-42-42V59Z'
                />
                <foreignObject
                  width={316}
                  height={684}
                  transform='translate(24 24)'
                  clipPath='url(#2ade4387-9c63-4fc4-b754-10e687a0d332)'
                >
                  <img
                    src='https://tailwindui.com/img/component-images/mobile-app-screenshot.png'
                    alt=''
                  />
                </foreignObject>
              </svg>
            </div>
          </div>
        </div>

        <div className='relative isolate pt-14'>
          <svg
            className='absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]'
            aria-hidden='true'
          >
            <defs>
              <pattern
                id='83fd4e5a-9d52-42fc-97b6-718e5d7ee527'
                width={200}
                height={200}
                x='50%'
                y={-1}
                patternUnits='userSpaceOnUse'
              >
                <path d='M100 200V.5M.5 .5H200' fill='none' />
              </pattern>
            </defs>
            <svg x='50%' y={-1} className='overflow-visible fill-gray-50'>
              <path
                d='M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z'
                strokeWidth={0}
              />
            </svg>
            <rect
              width='100%'
              height='100%'
              strokeWidth={0}
              fill='url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)'
            />
          </svg>
          <div className='mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40'>
            <div className='mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow'>
              <svg
                viewBox='0 0 366 729'
                role='img'
                className='mx-auto w-[22.875rem] max-w-full drop-shadow-xl'
              >
                <title>App screenshot</title>
                <defs>
                  <clipPath id='2ade4387-9c63-4fc4-b754-10e687a0d332'>
                    <rect width={316} height={684} rx={36} />
                  </clipPath>
                </defs>
                <path
                  fill='#4B5563'
                  d='M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 0 0 1 111.009v24.611a2 2 0 0 0 1.671 1.973l.95.158a2.26 2.26 0 0 1-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 0 0 1 167.009v47.611a2 2 0 0 0 1.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 0 0 1 237.009v47.611a2 2 0 0 0 1.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843l.141.001h.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 0 0 366 266.62v-77.611a2 2 0 0 0-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z'
                />
                <path
                  fill='#343E4E'
                  d='M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615c0 23.196-18.804 42-42 42H58c-23.196 0-42-18.804-42-42V59Z'
                />
                <foreignObject
                  width={316}
                  height={684}
                  transform='translate(24 24)'
                  clipPath='url(#2ade4387-9c63-4fc4-b754-10e687a0d332)'
                >
                  <img
                    src='https://tailwindui.com/img/component-images/mobile-app-screenshot.png'
                    alt=''
                  />
                </foreignObject>
              </svg>
            </div>
            <div className='mx-auto max-w-2xl lg:mx-0 lg:flex-auto'>
              <h1 className='max-w-xl text-lg font-bold tracking-tight text-gray-900 sm:text-2xl'>
                A Leading Voice in Web3 News
              </h1>
              <p className='mt-6 text-md leading-8 text-gray-600'>
                Crypto Koala is committed to being a leading voice in the news
                sector, reporting on relevant global issues with a focus on
                their impact and interaction with the Web3 and blockchain
                spaces.
              </p>
            </div>
          </div>
        </div>

        {/* Team section */}
        <div className='relative isolate mt-32 sm:mt-56 sm:pt-32'>
          <svg
            className='absolute inset-0 -z-10 hidden h-full w-full stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)] sm:block'
            aria-hidden='true'
          >
            <defs>
              <pattern
                id='55d3d46d-692e-45f2-becd-d8bdc9344f45'
                width={200}
                height={200}
                x='50%'
                y={0}
                patternUnits='userSpaceOnUse'
              >
                <path d='M.5 200V.5H200' fill='none' />
              </pattern>
            </defs>
            <svg x='50%' y={0} className='overflow-visible fill-gray-50'>
              <path
                d='M-200.5 0h201v201h-201Z M599.5 0h201v201h-201Z M399.5 400h201v201h-201Z M-400.5 600h201v201h-201Z'
                strokeWidth={0}
              />
            </svg>
            <rect
              width='100%'
              height='100%'
              strokeWidth={0}
              fill='url(#55d3d46d-692e-45f2-becd-d8bdc9344f45)'
            />
          </svg>
          <div className='relative'>
            <div
              className='absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl'
              aria-hidden='true'
            >
              <div
                className='ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]'
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
              />
            </div>
            <div
              className='absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-8 opacity-25 blur-3xl xl:justify-end'
              aria-hidden='true'
            >
              <div
                className='ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] xl:ml-0 xl:mr-[calc(50%-12rem)]'
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
              />
            </div>
            <div className='mx-auto max-w-7xl px-6 lg:px-8'>
              <div className='mx-auto max-w-7xl px-6 text-center lg:px-8'>
                <div className='mx-auto max-w-2xl'>
                  <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                    Meet our team
                  </h2>
                  <p className='mt-4 text-lg leading-8 text-gray-600'>
                    We’re a dynamic group of individuals who are passionate
                    about what we do.
                  </p>
                </div>
                <ul
                  role='list'
                  className='mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 md:grid-cols-3 lg:mx-0 lg:max-w-none lg:grid-cols-4'
                >
                  {people.map((person) => (
                    <li key={person.name}>
                      <img
                        className='mx-auto h-56 w-56 rounded-full'
                        src={person.imageUrl}
                        alt=''
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
                          <a
                            href={person.twitterUrl}
                            className='text-gray-400 hover:text-gray-500'
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
                          </a>
                        </li>
                        <li>
                          <a
                            href={person.linkedinUrl}
                            className='text-gray-400 hover:text-gray-500'
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
                          </a>
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
        <div className='mx-auto mt-32 max-w-7xl sm:mt-56 sm:px-6 lg:px-8'>
          <div className='relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32'>
            <h2 className='mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl'>
              Get our latest news & update regularly
            </h2>
            <p className='mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300'>
              We recommended you to subscribe to our newsletter, drop your email
              below to get regular updates.
            </p>
            <form className='mx-auto mt-10 flex max-w-md gap-x-4'>
              <label htmlFor='email-address' className='sr-only'>
                Email address
              </label>
              <input
                id='email-address'
                name='email'
                type='email'
                autoComplete='email'
                required
                className='min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6'
                placeholder='Enter your email'
              />
              <button
                type='submit'
                className='flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
              >
                Notify me
              </button>
            </form>
            <svg
              viewBox='0 0 1024 1024'
              className='absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2'
              aria-hidden='true'
            >
              <circle
                cx={512}
                cy={512}
                r={512}
                fill='url(#759c1415-0410-454c-8f7c-9a820de03641)'
                fillOpacity='0.7'
              />
              <defs>
                <radialGradient
                  id='759c1415-0410-454c-8f7c-9a820de03641'
                  cx={0}
                  cy={0}
                  r={1}
                  gradientUnits='userSpaceOnUse'
                  gradientTransform='translate(512 512) rotate(90) scale(512)'
                >
                  <stop stopColor='#7775D6' />
                  <stop offset={1} stopColor='#E935C1' stopOpacity={0} />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer
        className='mt-32 bg-gray-900 sm:mt-56'
        aria-labelledby='footer-heading'
      >
        <h2 id='footer-heading' className='sr-only'>
          Footer
        </h2>
        <div className='mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32'>
          <div className='xl:grid xl:grid-cols-3 xl:gap-8'>
            <img
              className='h-7'
              src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500'
              alt='Company name'
            />
            <div className='mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0'>
              <div className='md:grid md:grid-cols-2 md:gap-8'>
                <div>
                  <h3 className='text-sm font-semibold leading-6 text-white'>
                    Navigate
                  </h3>
                  <ul role='list' className='mt-6 space-y-4'>
                    {footerNavigation.navigate.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className='text-sm leading-6 text-gray-300 hover:text-white'
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className='mt-10 md:mt-0'>
                  <h3 className='text-sm font-semibold leading-6 text-white'>
                    Support us
                  </h3>
                  <ul role='list' className='mt-6 space-y-4'>
                    {footerNavigation.support.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className='text-sm leading-6 text-gray-300 hover:text-white'
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className='md:grid md:grid-cols-2 md:gap-8'>
                <div>
                  <h3 className='text-sm font-semibold leading-6 text-white'>
                    Partner
                  </h3>
                  <ul role='list' className='mt-6 space-y-4'>
                    {footerNavigation.partner.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className='text-sm leading-6 text-gray-300 hover:text-white'
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className='mt-10 md:mt-0'>
                  <h3 className='text-sm font-semibold leading-6 text-white'>
                    Contact us
                  </h3>
                  <ul role='list' className='mt-6 space-y-4'>
                    {footerNavigation.contacts.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className='text-sm leading-6 text-gray-300 hover:text-white'
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className='mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24 lg:flex lg:items-center lg:justify-between'>
            <div>
              <h3 className='text-sm font-semibold leading-6 text-white'>
                Subscribe to our newsletter
              </h3>
              <p className='mt-2 text-sm leading-6 text-gray-300'>
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
                className='w-full min-w-0 appearance-none rounded-md border-0 bg-white/5 px-3 py-1.5 text-base text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:w-56 sm:text-sm sm:leading-6'
                placeholder='Enter your email'
              />
              <div className='mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0'>
                <button
                  type='submit'
                  className='flex w-full items-center justify-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
          <div className='mt-8 border-t border-white/10 pt-8 md:flex md:items-center md:justify-between'>
            <div className='flex space-x-6 md:order-2'>
              {footerNavigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className='text-gray-500 hover:text-gray-400'
                >
                  <span className='sr-only'>{item.name}</span>
                  <item.icon className='h-6 w-6' aria-hidden='true' />
                </a>
              ))}
            </div>
            <p className='mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0'>
              &copy; Crypto Koala. 2024. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
