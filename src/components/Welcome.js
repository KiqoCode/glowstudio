import React from 'react';

const Welcome = () => {

  return (
    <div className='bg-mattis-light-pink block w-full h-1/2'>

      <div className='flex flex-col text-center px-3 py-[5rem] lg:p-[12rem] items-center justify-center'>
        <p className='text-mattis-pink/25 font-normal tracking-widest'>VÄLKOMMEN TILL CREATEBYMATTIS</p>
        <p className='text-mattis-pink text-5xl font-normal font-["Playfair_Display"]'>Certifierad frans & bryn stylist</p>
        <p className='w-3/4 mt-4 text-[1.05rem]'>Jag heter Mathias och är Certifierad frans & brynstylist. Jag har funnits i skönhetsbranschen i 8 härliga år men eftersom jag tyckte att något saknades, så började jag driva CreateByMattis, salongen med det lilla extra. Jag utför olika behandlingar inom fransar & ögonbryn så som Fransförlängning, Lashlift, Yumilashes, Brynfix & mer där till.</p>
        <p className='w-3/4 mt-4 text-[1.05rem]'>För mig är det viktigt att mina kunder ska känna sig trygga & säkra & veta att dom går till en professionell och seriös Fransstylist som ser till att dom står i fokus & som ger kvalitet på deras behandling. Därav försöker jag alltid hålla mig uppdaterad och vidareutbildad mig med nya metoder och tekniker.</p>
      </div>

    </div>
  );
};

export default Welcome;