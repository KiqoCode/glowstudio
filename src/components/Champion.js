import React, {require} from 'react';
import { useInView } from 'react-intersection-observer';
// import { Transition } from '@headlessui/react';

const Champion = () => {

  const { ref } = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  return (
    <div ref={ref} className='bg-mattis-light-pink w-full min-h-[500px]'>
      <div className='flex flex-1 justify-center'>
        <img src={require('assets/golden-cup.png')} className='max-w-[25rem] mb:max-w-[20rem]' />
      </div>
      <div className='flex-1'>
        <p className='uppercase tracking-widest text-mattis-pink/70'>världsmästare</p>
        <p className='text-mattis-pink text-5xl font-["Playfair_Display"] mt-3'>Världsmästare i Lashlift</p>
        <p className='mt-10 leading-loose text-[#222] mb-10'>
            Det är med stor glädje jag kan berätta att jag är världsmästare i Lashlift 2021 och 2022!<br/>
            Titta på mina diplom nedan.
        </p>
        <a className='text-mattis-pink mr-1 xlg:mr-0 font-bold xlg:block' href='#'>Diplom BlackSwan Championship 2021</a>
        <a className='xlg:hidden'>•</a>
        <a className='text-mattis-pink ml-1 xlg:ml-0 font-bold xlg:block' href='#'>Diplom Lash Brow Championship 2022</a>
      </div>
    </div>
  );
};

export default Champion;