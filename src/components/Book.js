import React from 'react';
import { useInView } from 'react-intersection-observer';
// import { Transition } from '@headlessui/react';

const Book = () => {

  const { ref } = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  return (
    <div id='book' ref={ref} className='bg-mattis-light-pink w-full'>
      <div className='flex flex-col items-center justify-center px-3 mb:py-[2rem]'>
        <div className='p-[5%] mb:p-0'>
          <p className='uppercase text-mattis-pink/60 tracking-widest text-md'>boka tid</p>
          <p className='font-["Playfair_Display"] text-mattis-pink text-5xl mb:text-3xl font-medium'>Boka din behandling idag</p>
          <p className='mt-5 text-[#222]'>Vänligen uppmärksamma och respektera följande Bokning & avbokningsregler:</p>
          <div className='border-mattis-pink/40 border-dotted border-[3px] border-spacing-10 p-6 mt-5 text-[#222] text-sm leading-loose'>
            <p>- Avbokning skall ske senast 24 timmar innan ditt besök med ett avbokningsmeddelande (i december gäller det 48 timmar).</p>
            <p>- Uteblivet besök debiteras med fullt behandlingspris.</p>
            <p>- Avbokning gör ni genom erhållen avbokningslänk på bokningsbekräftelsen.</p>
            <p>- Om tiden missas och ny tid bokas så debiteras ändå det uteblivna besöket.</p>
            <p>- Den bokade tiden hålls i 15 min därefter får man boka om en ny.</p>
          </div>
          <p className='text-mattis-pink text-sm font-bold mt-5'>
              Genom att boka en behandling hos mig accepterar du:<br/>
              - Debiteras full avgift vid sen eller utebliven närvaro.
          </p>
          <p className='mt-5'>Vi tar enbart emot betalning med kort, Swish eller med Klarna.</p>
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
        </div>
      </div>
    </div>
  );
};

export default Book;