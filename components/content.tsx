'use client'
import Image from 'next/image'
import { impact } from '@/data/data'
import { useState } from 'react'

function ImpactCarousel() {
    const [current, setCurrent] = useState(0)

    const next = () => setCurrent((c) => (c + 1) % impact.length)
    const prev = () => setCurrent((c) => (c - 1 + impact.length) % impact.length)
    const slide = impact[current]
    const arrowBase =
      'absolute top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full shadow-xl ring-1 ring-black/10 transition hover:scale-105 active:scale-95'
  
    const arrowTheme = slide.dark
      ? 'bg-white text-gray-800/90 hover:bg-gray-100'
      : 'bg-black/70 text-white hover:bg-black'
  
    return (
        <section
        className={`relative isolate ${
          slide.dark ? 'bg-[#0a3224] text-white' : ''
        } mt-20 overflow-hidden px-6 py-16 lg:py-20`}
      >
        {/* Slide */}
        <div className='mx-auto flex max-w-7xl flex-col items-center gap-12 lg:flex-row lg:gap-16'>
          <Image
            src={slide.img}
            alt={slide.title}
            width={650}
            height={430}
            priority
            className='w-full rounded-lg object-cover lg:max-w-[45%]'
          />
          <div className='max-w-xl'>
            <h2 className='text-2xl font-bold tracking-tight sm:text-3xl'>
              {slide.title}
            </h2>
            <p className='mt-4 leading-7'>{slide.text}</p>
          </div>
        </div>
  
        {/* Arrows */}
        <button
          onClick={prev}
          aria-label='Previous slide'
          className={`${arrowBase} left-4 ${arrowTheme}`}
        >
          {/* Heroicons chevron-left 24x24 */}
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className='h-6 w-6'>
            <path
              fill='currentColor'
              d='M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z'
            />
          </svg>
        </button>
        <button
          onClick={next}
          aria-label='Next slide'
          className={`${arrowBase} right-4 ${arrowTheme}`}
        >
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className='h-6 w-6'>
            <path
              fill='currentColor'
              d='M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6z'
            />
          </svg>
        </button>
  
        {/* Pagination dots */}
        <div className='absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-3'>
          {impact.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2.5 w-2.5 rounded-full transition ${
                current === i
                  ? slide.dark
                    ? 'bg-white'
                    : 'bg-black'
                  : slide.dark
                  ? 'bg-white/40 hover:bg-white/70'
                  : 'bg-black/30 hover:bg-black/60'
              }`}
            />
          ))}
        </div>
      </section>
    )
  }

  export default ImpactCarousel