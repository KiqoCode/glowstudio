import React, {require} from 'react';
import { useInView } from 'react-intersection-observer';
import { Transition } from '@headlessui/react';

const Book = () => {

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  return (
    <div id='book' ref={ref} className='bg-white w-full min-h-[200px]'>

      <Transition
        show={inView}
        enter="transition ease-in-out duration-[2500ms] transform"
        enterFrom="opacity-0 translate-y-32"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in-out duration-[2500ms] transform"
        leaveFrom="translate-y-0 opacity-100"
        leaveTo="translate-y-32 opacity-0"
        className="flex flex-row lg:flex-col w-full justify-center p-5"
      >
        <div className='flex flex-1 items-center'>
          <div className='p-[10%] mb:p-0'>
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
            <p className='mt-5'>Jag tar enbart emot betalning med kort, Swish eller med Klarna.</p>
            <div className='flex flex-1 mb:flex-col mb:items-center mb:mb-5'>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href='https://www.bokadirekt.se/places/createbymattis-stockholm-14483';
                }}
                type="button"
                className="bg-white text-mattis-pink px-10 py-5 mt-5 mr-3 mb:mr-0 xlg:w-fit rounded-full border border-mattis-pink uppercase hover:bg-mattis-pink hover:text-white transition-colors duration-200">
                  bokning stockholm
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href='https://www.bokadirekt.se/places/createbymattis-avestahorndal-26950';
                }}
                type="button"
                className="bg-white text-mattis-pink px-10 py-5 mt-5 xlg:w-fit rounded-full border border-mattis-pink uppercase hover:bg-mattis-pink hover:text-white transition-colors duration-200">
                  bokning dalarna
              </button>
            </div>
          </div>
        </div>
        <div className='flex flex-1 justify-center items-center'>
          <img src={require('assets/mattis-working.jpg')} className='border-mattis-light-pink border-8 w-full' />
        </div>


      </Transition>

    </div>
  );
};

export default Book;