import React from 'react';
import { useInView } from 'react-intersection-observer';
// import { Transition } from '@headlessui/react';

const Treatment = () => {

  const { ref } = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  return (
    <div id='treatments' ref={ref} className='bg-white w-full min-h-[200px]'>

      <div className='flex flex-col items-center justify-center px-3 mb:py-[2rem]'>
        <div className='p-[5%] mb:p-0'>
          <p className='uppercase text-mattis-pink/60 tracking-widest text-md'>Behandlingar</p>
          <p className='font-["Playfair_Display"] text-mattis-pink text-5xl mb:text-3xl font-medium'>Välj din behandling</p>
          <p className='mt-5 text-[#222] leading-loose'>På Glow Studio erbjuder vi noggrant utvalda behandlingar som kombinerar effektiva resultat med avkoppling och omsorg.
            Vi använder alltid marknadens främsta produkter - såsom <span className="font-semibold">InLei</span> för lash- och brow lift -
            och anpassar varje behandling efter dina unika behov och önskemål.</p>
          <div className="grid grid-cols-3 lg:grid-cols-1 gap-6 sm:gap-10">

            <div className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Lash Lift & Brow Lift (med InLei)</h3>
              <p className="text-gray-700">
        Lyft fram dina naturliga fransar och bryn med skonsamma, högkvalitativa produkter.
        Resultatet? Böjda, fylliga fransar och perfekt formade bryn – utan behov av mascara.
              </p>
            </div>


            <div className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Ansiktsbehandlingar</h3>
              <p className="text-gray-700">
        Skräddarsydda behandlingar som återfuktar, rengör och stärker huden.
        Anpassat efter din hudtyp för ett synligt och långvarigt resultat.
              </p>
            </div>


            <div className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Nagelbehandlingar</h3>
              <p className="text-gray-700">
        Klassisk manikyr, gelélack eller förstärkning – vi ger dina naglar glans, stil och hållbarhet med största noggrannhet.
              </p>
            </div>


            <div className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Kombobehandlingar</h3>
              <p className="text-gray-700">
        Kombinera flera behandlingar – som lash & brow lift eller ansiktsbehandling med handmassage – för en komplett upplevelse.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Treatment;