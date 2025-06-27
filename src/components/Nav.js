import React, { useState } from 'react';
import { UilFacebook, UilInstagram } from '@iconscout/react-unicons';

const navigation = [
  { name: 'VÄLKOMMEN', href: '#welcome', current: false },
  { name: 'BEHANDLINGAR', href: '#treatments', current: false },
  { name: 'BOKA TID', href: '#book', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Nav = () => {
  
  const [isScrolled, setIsScrolled] = useState(false);

  const listenScrollEvent = () => {
    if (window.scrollY < 70) {
      setIsScrolled(false);
    } else if (window.scrollY > 70) {
      setIsScrolled(true);
    } 
  };

  window.addEventListener('scroll', listenScrollEvent);

  return (
    <nav className={classNames(isScrolled ? 'bg-black' : 'bg-transparent', 'fixed top-0 w-full z-50 bg-white shadow-md transition-colors ease-in-out duration-300 block mb:hidden')}>
      <div className="mx-auto px-8">
        <div className="relative flex items-center justify-between h-16">
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
                  <a href='https://www.facebook.com/glowstudiose/' className={classNames(isScrolled ? 'text-white' : 'text-black', 'transition-colors ease-in-out duration-300 hover:text-mattis-pink')}><UilFacebook/></a>
                </div>
                <div className='px-3 py-1'>
                  <a href='https://www.instagram.com/glowstudiose/' className={classNames(isScrolled ? 'text-white' : 'text-black', 'transition-colors ease-in-out duration-300 hover:text-mattis-pink')}><UilInstagram/></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;