import React, { useState, useEffect } from 'react';
import { Disclosure, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { UilFacebook, UilInstagram } from '@iconscout/react-unicons';

const navigation = [
  { name: 'VÄLKOMMEN', href: '#', current: false },
  { name: 'BEHANDLINGAR', href: '#', current: false },
  { name: 'BOKA TID', href: '#', current: false },
  { name: 'BILDER', href: '#', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Nav = () => {
  
  const [showNav, setShowNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const listenScrollEvent = () => {
    if (window.scrollY < 70) {
      setIsScrolled(false);
    } else if (window.scrollY > 70) {
      setIsScrolled(true);
    } 
  };

  useEffect(() => {
    setShowNav(true);
  },[]);

  window.addEventListener('scroll', listenScrollEvent);

  return (
    <Transition
      show={showNav}
      enter="transition ease-in-out duration-[1500ms] transform"
      enterFrom="opacity-0 -translate-y-full"
      enterTo="opacity-100 translate-y-0"
      className={classNames(isScrolled ? 'bg-black' : 'bg-transparent', 'top-0 sticky z-10 duration-500')}
    >
      <Disclosure as="nav">
        {({ open }) => (
          <>
            <div className="mx-auto px-8 mb:px-1">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 items-center hidden mb:flex mb:w-full mb:justify-between">
                  {/* Mobile menu button*/}
                  <div className='flex flex-1 justify-start mr-2'>
                    <Disclosure.Button className="inline-flex items-center p-2">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6 text-white bg-mattis-pink rounded-md" aria-hidden="true" />
                      ) : (
                        <MenuIcon className="block h-6 w-6 rounded-md text-mattis-pink" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                  <div className='flex flex-1 justify-end mr-2'>
                    <a href='https://www.facebook.com/createbymattis/' className='text-mattis-pink transition-colors ease-in-out duration-300 hover:text-mattis-pink mr-2'><UilFacebook/></a>
                    <a href='https://www.instagram.com/Createbymattis/' className='text-mattis-pink transition-colors ease-in-out duration-300 hover:text-mattis-pink'><UilInstagram/></a>
                  </div>
                </div>
                <div className="flex-1 flex items-stretch justify-start">
                  <div className="block mb:hidden">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <div key={item.name} className={classNames(
                          item.current ? 'underline underline-offset-8' : '', isScrolled ? 'text-white' : 'text-black',' px-3 py-2 rounded-md text-sm font-light'
                        )}>
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current ? '' : '', 'transition-colors ease-in-out duration-300 hover:text-mattis-pink'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        </div>
                      ))}
                      <div className='px-3 py-1'>
                        <a href='#' className={classNames(isScrolled ? 'text-white' : 'text-black', 'transition-colors ease-in-out duration-300 hover:text-mattis-pink')}><UilFacebook/></a>
                      </div>
                      <div className='px-3 py-1'>
                        <a href='#' className={classNames(isScrolled ? 'text-white' : 'text-black', 'transition-colors ease-in-out duration-300 hover:text-mattis-pink')}><UilInstagram/></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Transition
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full opacity-0"
              enterTo="translate-x-0 opacity-100"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0 opacity-100"
              leaveTo="-translate-x-full opacity-0"
            >
              <Disclosure.Panel className={classNames(isScrolled ? ' from-black via-black/80' : 'from-white via-white/80', 'bg-gradient-to-br to-transparent hidden mb:block absolute w-9/12 h-[50vh] rounded-br-lg transition-all duration-500')}>
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-900' : 'hover:bg-gray-700 hover:text-white',
                        isScrolled ? 'text-white' : 'text-black',
                        'block px-3 py-2 rounded-md text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </Transition>
  );
};

export default Nav;