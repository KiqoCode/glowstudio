import React, {require, useState, useEffect} from 'react';
import { Transition } from '@headlessui/react';

const Start = () => {

  const [showStart, setShowStart] = useState(false);

  useEffect(() => {
    setShowStart(true);
  },[]);

  return (
    <div className='flex h-screen w-full items-center justify-start mb:justify-center pl-[17vw] mb:pl-0 pb-32 mb:bg-white/75'>
      <div className='flex flex-col items-center justify-center z-0'>
        <Transition
          as="div"
          show={showStart}
          enter="transition ease-in-out duration-[1500ms] transform"
          enterFrom="opacity-0 -translate-y-full"
          enterTo="opacity-100 translate-y-0"
          className="flex flex-col items-center justify-center z-0"
        >
          <img src={require('assets/logo-1.png')} className='max-w-[25rem] mb:max-w-[20rem]' />
          <p className='font-["Playfair_Display"] text-mattis-pink text-4xl mt-10 text-center'>Salongen med det lilla extra</p>
          <p className='tracking-[10px] text-mattis-pink text-center font-light mt-5 text-sm'>GLOW STUDIO</p>
        </Transition>
        <Transition
          as="div"
          show={showStart}
          enter="transition ease-in-out duration-[1500ms] transform"
          enterFrom="opacity-0 translate-y-full"
          enterTo="opacity-100 translate-y-0"
          className="flex flex-col items-center justify-center z-0"
        >
          <div className='grid grid-cols-2 lg:grid-cols-1 gap-6 sm:gap-10 mt-10'>
            <button
              onClick={(e) => {
                e.preventDefault();
                window.location.href='https://www.bokadirekt.se/places/glow-studio-14483';
              }}
              type="button"
              className="bg-white text-mattis-pink px-10 py-5 rounded-full border border-mattis-pink uppercase mr-1 mb:mr-0 hover:bg-mattis-pink hover:text-white transition-colors duration-200">
                boka tid - fransar & bryn
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                window.location.href='https://www.bokadirekt.se/places/sparklella-beauty-48352';
              }}
              type="button"
              className="bg-white text-mattis-pink px-10 py-5 rounded-full border border-mattis-pink uppercase mr-1 mb:mr-0 hover:bg-mattis-pink hover:text-white transition-colors duration-200">
                boka tid - naglar
            </button>
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              window.location.href='https://webshop.glowstudio.se/';
            }}
            type="button"
            className="bg-mattis-pink px-20 py-5 rounded-full uppercase text-white mt-5 hover:bg-white hover:text-mattis-pink border hover:border-mattis-pink transition-colors duration-200">
              webshop
          </button>
        </Transition>
      </div>
    </div>
  );
};

export default Start;