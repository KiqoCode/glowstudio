import React, {require} from 'react';

const Start = () => {

  return (
    <div className='flex h-full w-full items-center justify-start mb:justify-center pl-[17vw] mb:pl-0 pb-32'>
      <div className='flex flex-col items-center justify-center z-0'>
        <img src={require('assets/createbymattis-logo-400.png')} className='max-w-[25rem] mb:max-w-[20rem]' />
        <p className='font-["Playfair_Display"] text-mattis-pink text-4xl mt-10 text-center'>Salongen med det lilla extra</p>
        <p className='tracking-[10px] text-mattis-pink text-center font-thin mt-5 text-sm'>CREATE BY MATTIS</p>
        <div className='flex flex-row mb:flex-col mt-10 mb:justify-center items-center'>
          <button
            type="button"
            className="bg-white text-mattis-pink px-10 py-5 rounded-full border border-mattis-pink uppercase mr-1 mb:mr-0 hover:bg-mattis-pink hover:text-white transition-colors duration-200">
              boka tid - stockholm
          </button>
          <button
            type="button"
            className="bg-white text-mattis-pink px-10 py-5 rounded-full border border-mattis-pink uppercase mt-2 hover:bg-mattis-pink hover:text-white transition-colors duration-200">
              boka tid - dalarna
          </button>
        </div>
        <button
          type="button"
          className="bg-mattis-pink px-20 py-5 rounded-full uppercase text-white mt-5 hover:bg-white hover:text-mattis-pink border hover:border-mattis-pink transition-colors duration-200">
            webshop
        </button>
      </div>
    </div>
  );
};

export default Start;