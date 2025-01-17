/* This example requires Tailwind CSS v2.0+ */
import { Popover, Transition } from '@headlessui/react'
import {
  BookOpenIcon,
  ExternalLinkIcon,
  HeartIcon,
  HomeIcon,
  LocationMarkerIcon,
  MenuIcon,
  NewspaperIcon,
  SupportIcon,
  XIcon,
} from '@heroicons/react/outline'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'

const navigation = [
  {
    name: 'Katameros',
    href: 'https://katameros.app/?lang=it',
    icon: ExternalLinkIcon,
    dataUmamiEvent: 'click_katameros',
  },
  {
    name: 'Libreria',
    href: '/library',
    icon: BookOpenIcon,
    dataUmamiEvent: 'click_library',
  },
  {
    name: 'Chiese',
    href: '/churches',
    icon: LocationMarkerIcon,
    dataUmamiEvent: 'click_churches',
  },
  {
    name: 'Contatti',
    href: '/contact',
    icon: SupportIcon,
    dataUmamiEvent: 'click_contact',
  },
  {
    name: 'Fare una donazione',
    href: '/donation',
    icon: HeartIcon,
    dataUmamiEvent: 'click_donation',
  },
  {
    name: 'Home',
    href: '/',
    icon: HomeIcon,
    dataUmamiEvent: 'click_home',
  },
]
export default function Header() {
  return (
    <Popover className="z-50 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <div className="h-10 w-auto">
              <Link href="/">
                <Image
                  width={50}
                  height={50}
                  className="hover:cursor-pointer"
                  src={'/photos/logo.png'}
                  alt={'logo'}
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                  }}
                />
              </Link>
            </div>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-900">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-base font-medium text-gray-500 hover:text-gray-900"
                data-umami-event={item.dataUmamiEvent}
              >
                {item.name}
              </a>
            ))}
          </Popover.Group>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div className="h-8 w-auto">
                  <Link href="/">
                    <Image
                      width={50}
                      height={50}
                      src={'/photos/logo.png'}
                      alt={'logo'}
                      style={{
                        maxWidth: '100%',
                        height: 'auto',
                      }}
                    />
                  </Link>
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-900">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-10">
                <nav className="grid gap-y-8">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                      data-umami-event={item.dataUmamiEvent}
                    >
                      <item.icon
                        className="flex-shrink-0 h-6 w-6 text-rose-900"
                        aria-hidden="true"
                      />
                      <span className="ml-3 text-base font-medium text-gray-900">
                        {item.name}
                      </span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
