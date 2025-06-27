import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Transition } from '@headlessui/react';

const Welcome = () => {

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  return (
    <div id='welcome' ref={ref} className='bg-mattis-light-pink w-full min-h-[500px]'>

      <Transition
        show={inView}
        as="div"
        enter="transition ease-in-out duration-[1000ms] transform"
        enterFrom="opacity-0 translate-y-32"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in-out duration-[1000ms] transform"
        leaveFrom="translate-y-0 opacity-100"
        leaveTo="translate-y-32 opacity-0"
        className='flex flex-col items-center justify-center text-center px-3 py-[5rem] mb:py-[3rem]'
      >
        <p className='text-mattis-pink/50 text-2xl font-normal tracking-widest font-["Playfair_Display"] uppercase'>Välkommen till Glow Studio</p>
        <p className='text-mattis-pink text-5xl font-normal font-["Playfair_Display"] uppercase'>Där din skönhet får stråla</p>
        <p className='w-full max-w-[50rem] mb:w-[90%] mt-4 text-[1rem] font-light leading-loose mb:text-left text-black/70'>Välkommen till Glow Studio, en modern skönhetssalong som kombinerar professionalism med en varm och avslappnad atmosfär. Hos oss är ditt välbefinnande och din naturliga skönhet i fokus, och vi erbjuder ett brett utbud av behandlingar för att framhäva din unika stil.</p>
        <p className='w-full max-w-[50rem] mb:w-[90%] mt-4 text-[1rem] font-light leading-loose mb:text-left text-black/70'>Vi är experter på lash- och brow lifts med marknadens bästa produkter, skräddarsydda ansiktsbehandlingar och nagelbehandlingar som ger dina händer det lilla extra. Våra erfarna terapeuter arbetar med omsorg och precision för att ge dig en upplevelse utöver det vanliga - alltid med kvalitet och kundnöjdhet i centrum.</p>
        <p className='w-full max-w-[50rem] mb:w-[90%] mt-4 text-[1rem] font-light leading-loose mb:text-left text-black/70'>Glow Studio handlar inte bara om skönhet - det handlar om att skapa stunder av välbefinnande som lämnar dig med ett leende och ett strålande självförtroende.</p>
        <p className='text-mattis-pink/50 text-xl mt-4 font-normal tracking-widest font-["Playfair_Display"] uppercase'>Välkommen in till oss - låt oss ta hand om dig!</p>
      </Transition>

    </div>
  );
};

export default Welcome;