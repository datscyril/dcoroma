const navigation = {
  main: [
    {
      name: 'Katameros',
      href: 'https://katameros.app/?lang=it',
      dataUmamiEvent: 'click_katameros',
    },
    {
      name: 'Libreria',
      href: '/library',
      dataUmamiEvent: 'click_library',
    },
    {
      name: 'Chiese',
      href: '/churches',
      dataUmamiEvent: 'click_churches',
    },
    {
      name: 'Contatti',
      href: '/contact',
      dataUmamiEvent: 'click_contact',
    },
    {
      name: 'Fare una donazione',
      href: '/donation',
      dataUmamiEvent: 'click_donation',
    },
    {
      name: 'Home',
      href: '/',
      dataUmamiEvent: 'click_home',
    },
  ],
  social: [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/DCOTorinoRoma',
      dataUmamiEvent: 'click_facebook',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Youtube',
      href: 'https://www.youtube.com/channel/UCVc5TVZEoB3k5SZWe1daXcA',
      dataUmamiEvent: 'click_youtube',
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="24"
          height="24"
          viewBox="0 0 50 50"
          fill="currentColor"
        >
          <path d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z"></path>
        </svg>
      ),
    },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav
          className="-mx-5 -my-2 flex flex-wrap justify-center"
          aria-label="Footer"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <a
                href={item.href}
                className="text-base text-gray-500 hover:text-gray-900"
                data-umami-event={item.dataUmamiEvent}
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <div className="mt-8 flex justify-center space-x-6">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-gray-500"
              data-umami-event={item.dataUmamiEvent}
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-8 text-center text-base text-gray-400">
          &copy; 2022 DCO Roma. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
