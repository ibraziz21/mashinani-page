'use client';

import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Our Mission', href: '#' },
  { name: 'What we do', href: '#' },
  { name: 'Our Team', href: '#' },
  { name: 'Contact us', href: '#' },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className='absolute inset-x-0 top-0 z-50'>
      <nav
        className='flex items-center justify-between p-6 lg:px-8'
        aria-label='Global'
      >
        <div className='flex lg:flex-1'>
          <Link href='/' className='-m-1.5 p-1.5'>
            <span className='sr-only'>Web3 Mashinani</span>
            <Image
              className='h-16 w-auto'
              src='/assets/WMLogo.svg'
              alt='Logo'
              width={100}
              height={100}
            />
          </Link>
        </div>
        <div className='flex lg:hidden'>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black'
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className='sr-only'>Open main menu</span>
            <Bars3Icon className='h-6 w-6' aria-hidden='true' />
          </button>
        </div>
        <div className='hidden lg:flex lg:gap-x-12'>
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className='text-sm font-semibold leading-6 text-black'
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
          <button
            type='button'
            className='flex-none rounded-full bg-[#b36e5c] px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
          >
            <Link href='https://t.me/+w2aY7_Hvy7M2ZjM0' target='_blank'>
              Join the community
            </Link>
          </button>
        </div>
      </nav>
      <Dialog
        as='div'
        className='lg:hidden'
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className='fixed inset-0 z-50' />
        <Dialog.Panel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#22252E] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center justify-between'>
            <Link href='/' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Web3 Mashinani</span>
              <Image
                className='h-16 w-auto'
                src='/assets/WMLogo.svg'
                alt='Logo'
                width={100}
                height={100}
              />
            </Link>
            <button
              type='button'
              className='-m-2.5 rounded-md p-2.5 text-black'
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className='sr-only'>Close menu</span>
              <XMarkIcon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-white/10'>
              <div className='space-y-2 py-6'>
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-black hover:bg-gray-50'
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className='py-6'>
                <Link
                  href='https://t.me/+w2aY7_Hvy7M2ZjM0'
                  target='_blank'
                  className='flex-none rounded-full bg-[#27946B] px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
                >
                  {' '}
                  Join the community
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Header;
