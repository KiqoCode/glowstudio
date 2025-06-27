import React, {require} from 'react';
import { UilMapMarker, UilPhone, UilEnvelope, UilClock, UilFacebook, UilInstagram } from '@iconscout/react-unicons';

const Footer = () => {

  return (
    <div className='bg-white w-full min-h-[200px] flex flex-col items-center p-5'>

      <div className='w-[80%] flex flex-row lg:flex-col lg:items-start'>
        <div className='flex-1 lg:mb-5'>
          <img src={require('assets/logo-1.png')} className='max-w-[25rem] mb:max-w-[20rem]' />
        </div>
        <div className='flex-1 ml-16 lg:ml-0 lg:mb-5'>
          <p className='text-mattis-pink font-bold text-xl font-["Playfair_Display"] mb-4'>Glow Studio</p>
        </div>
        <div className='flex-1 ml-16 lg:ml-0 lg:mb-5'>
          <p className='text-mattis-pink font-bold text-xl font-["Playfair_Display"] mb-4'>Kontaktuppgifter</p>
          <p className='text-sm mb-1'><UilMapMarker className='inline text-mattis-pink'/> Häradsvägen 119, 141 72 Segeltorp</p>
          <p className='text-sm mb-1'><UilPhone className='inline text-mattis-pink'/> 073-691 46 09</p>
          <p className='text-sm'><UilEnvelope className='inline text-mattis-pink'/> info@glowstudio.se</p>
        </div>
        <div className='flex-1 ml-16 lg:ml-0 lg:mb-5'>
          <p className='text-mattis-pink font-bold text-xl font-["Playfair_Display"] mb-4'>Öppettider</p>
          <p className='text-sm'><UilClock className='inline text-mattis-pink'/> Alla dagar 09:00-20:00</p>
        </div>
        <div className='flex-1 ml-16 lg:ml-0'>
          <p className='text-mattis-pink font-bold text-xl font-["Playfair_Display"] mb-4'>Följ Oss</p>
          <a className='text-mattis-pink' href='https://www.facebook.com/glowstudiose/'><UilFacebook width='50' height='50'/></a>
          <a className='text-mattis-pink' href='https://www.instagram.com/glowstudiose/'><UilInstagram width='50' height='50'/></a>
        </div>
      </div>
      <div className='w-[80%] mt-24 flex justify-center pt-4 border-t'>
        <p className='text-sm'>© GlowStudio 2025. All Rights Reserved.</p>
      </div>

    </div>
  );
};

export default Footer;