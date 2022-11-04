import React, {require, useEffect, useState} from 'react';
import { Transition } from '@headlessui/react';

const Start = () => {

  const [showStart, setShowStart] = useState(false);

  useEffect(() => {
    setShowStart(true);
  },[]);

  return (
    <div className='flex h-screen w-full items-center justify-start mb:justify-center pl-[17vw] mb:pl-0 pb-32'>
      <div className='flex flex-col items-center justify-center z-0'>
        <Transition
          show={showStart}
          enter="transition ease-in-out duration-[1500ms] transform"
          enterFrom="opacity-0 -translate-y-full"
          enterTo="opacity-100 translate-y-0"
          className="flex flex-col items-center justify-center z-0"
        >
          <img src={require('assets/createbymattis-logo-400.png')} className='max-w-[25rem] mb:max-w-[20rem]' />
          <p className='font-["Playfair_Display"] text-mattis-pink text-4xl mt-10 text-center'>Salongen med det lilla extra</p>
          <p className='tracking-[10px] text-mattis-pink text-center font-light mt-5 text-sm'>CREATE BY MATTIS</p>
        </Transition>
        <Transition
          show={showStart}
          enter="transition ease-in-out duration-[1500ms] transform"
          enterFrom="opacity-0 translate-y-full"
          enterTo="opacity-100 translate-y-0"
          className="flex flex-col items-center justify-center z-0"
        >
          <div className='flex flex-row mb:flex-col mt-10 mb:justify-center items-center'>
            <button
              onClick={(e) => {
                e.preventDefault();
                window.location.href='https://www.bokadirekt.se/places/createbymattis-stockholm-14483';
              }}
              type="button"
              className="bg-white text-mattis-pink px-10 py-5 rounded-full border border-mattis-pink uppercase mr-1 mb:mr-0 hover:bg-mattis-pink hover:text-white transition-colors duration-200">
                boka tid - stockholm
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                window.location.href='https://www.bokadirekt.se/places/createbymattis-avestahorndal-26950';
              }}
              type="button"
              className="bg-white text-mattis-pink px-10 py-5 rounded-full border border-mattis-pink uppercase mt-2 hover:bg-mattis-pink hover:text-white transition-colors duration-200">
                boka tid - dalarna
            </button>
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              window.location.href='https://createbymattis.myshopify.com/';
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