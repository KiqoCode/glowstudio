import React from 'react';
import Nav from 'components/Nav';
import Welcome from 'components/Welcome';
import Start from 'components/Start';

function App() {

  return (
    <div>
      <section id='top-section'>
        <div className='h-screen w-full bg-mattis-img bg-cover bg-fixed bg-center -z-10'>
          <div className='absolute hidden mb:block h-screen w-screen bg-white/75'>
          </div>
          <Nav />
          <Start />
        </div>
      </section>
      <section id='bottom-section'>
        <Welcome/>
      </section>
    </div>
  );
}

export default App;
