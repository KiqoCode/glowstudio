import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Transition } from '@headlessui/react';

const Welcome = () => {

  const { ref, inView } = useInView({
    threshold: 0.55
  });

  return (
    <div ref={ref} className='bg-mattis-light-pink block w-full min-h-[400px]'>

      <Transition
        show={inView}
        enter="transition ease-in-out duration-[1000ms] transform"
        enterFrom="opacity-0 -translate-x-full"
        enterTo="opacity-100 translate-x-0"
        leave="transition ease-in-out duration-[1000ms] transform"
        leaveFrom="translate-x-0 opacity-100"
        leaveTo="-translate-x-full opacity-0"
        className="flex flex-col text-center px-3 py-[5rem] mb:py-[3rem] items-center justify-center"
      >
        <p className='text-mattis-pink/25 font-normal tracking-widest'>VÄLKOMMEN TILL CREATEBYMATTIS</p>
        <p className='text-mattis-pink text-5xl font-normal font-["Playfair_Display"]'>Certifierad frans & bryn stylist</p>
        <p className='w-3/4 mb:w-[90%] mt-4 text-[1.05rem] mb:text-left'>Jag heter Mathias och är Certifierad frans & brynstylist. Jag har funnits i skönhetsbranschen i 8 härliga år men eftersom jag tyckte att något saknades, så började jag driva CreateByMattis, salongen med det lilla extra. Jag utför olika behandlingar inom fransar & ögonbryn så som Fransförlängning, Lashlift, Yumilashes, Brynfix & mer där till.</p>
        <p className='w-3/4 mb:w-[90%] mt-4 text-[1.05rem] mb:text-left'>För mig är det viktigt att mina kunder ska känna sig trygga & säkra & veta att dom går till en professionell och seriös Fransstylist som ser till att dom står i fokus & som ger kvalitet på deras behandling. Därav försöker jag alltid hålla mig uppdaterad och vidareutbildad mig med nya metoder och tekniker.</p>
      </Transition>

    </div>
  );
};

export default Welcome;