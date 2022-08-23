import React, {require} from 'react';
import { useInView } from 'react-intersection-observer';
import { Transition } from '@headlessui/react';

const Treatment = () => {

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  return (
    <div ref={ref} className='bg-white w-full min-h-[200px]'>

      <Transition
        show={inView}
        enter="transition ease-in-out duration-[2500ms] transform"
        enterFrom="opacity-0 translate-y-32"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in-out duration-[2500ms] transform"
        leaveFrom="translate-y-0 opacity-100"
        leaveTo="translate-y-32 opacity-0"
        className="flex flex-row lg:flex-col-reverse w-full justify-center p-5"
      >
        <div className='flex flex-1 justify-center items-center'>
          <img src={require('assets/createbymattis-behandlingar.jpg')} className='border-mattis-light-pink border-8 w-full' />
        </div>

        <div className='flex flex-1 items-center'>
          <div className='p-[10%] mb:p-0'>
            <p className='uppercase text-mattis-pink/60 tracking-widest text-md'>Behandlingar</p>
            <p className='font-["Playfair_Display"] text-mattis-pink text-5xl mb:text-3xl font-medium'>Välj din behandling</p>
            <p className='mt-5 text-[#222] leading-loose'>Alla ögon är unika och vi har olika förutsättningar för vad våra fransar klarar av för tjocklek, längd och böj, så när du kommer hit går vi tillsammans igenom dina önskemål och jag ser till att du får en behandling som är anpassad för just dig.</p>
            <p className='mt-5 text-[#222] leading-loose'>Du kommer att få en skön stund för dig själv med slutna ögon, avkopplande musik och dessutom gå härifrån med ett fint resultat.</p>
            <p className='mt-5 text-[#222] leading-loose'>Pälsdjur finns i hemmet, så det är bra att veta om du är allergisk eller hundrädd.</p>
            <div className='flex flex-1 justify-center mb:items-center mb:flex-col xlg:flex-col'>
              <button
                type="button"
                className="bg-white text-mattis-pink px-10 py-5 mt-5 mr-3 xlg:w-fit rounded-full border border-mattis-pink uppercase hover:bg-mattis-pink hover:text-white transition-colors duration-200">
                  se behandlingar stockholm
              </button>
              <button
                type="button"
                className="bg-white text-mattis-pink px-10 py-5 mt-5 xlg:w-fit rounded-full border border-mattis-pink uppercase hover:bg-mattis-pink hover:text-white transition-colors duration-200">
                  se behandlingar dalarna
              </button>
            </div>
          </div>
        </div>


      </Transition>

    </div>
  );
};

export default Treatment;