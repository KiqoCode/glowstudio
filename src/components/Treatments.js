import React, {require} from 'react';
import { useInView } from 'react-intersection-observer';
import { Transition } from '@headlessui/react';

const Treatment = () => {

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  return (
    <div ref={ref} className='bg-white w-full min-h-[750px]'>

      <Transition
        show={inView}
        enter="transition ease-in-out duration-[1000ms] transform"
        enterFrom="opacity-0 translate-y-32"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in-out duration-[1000ms] transform"
        leaveFrom="translate-y-0 opacity-100"
        leaveTo="translate-y-32 opacity-0"
        className="flex flex-row lg:flex-col-reverse w-full justify-center p-10"
      >
        <div className='flex flex-1 justify-center items-center'>
          <img src={require('assets/createbymattis-behandlingar.jpg')} className='border-mattis-light-pink border-8 w-full' />
        </div>

        <div className='flex flex-1 items-center pl-5'>
          <p className='uppercase text-mattis-pink/60 tracking-widest text-md'>Behandlingar</p>
        </div>


      </Transition>

    </div>
  );
};

export default Treatment;