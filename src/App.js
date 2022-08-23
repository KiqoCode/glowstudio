import React from 'react';
import Nav from 'components/Nav';
import Welcome from 'components/Welcome';
import Start from 'components/Start';
import Treatment from 'components/Treatments';
import Champion from 'components/Champion';

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
        <Welcome />
        <iframe src="https://widget.reco.se/v2/widget/4008268?mode=HORIZONTAL_QUOTE&inverted=false&border=false" height="225" className='w-full border-b-2'></iframe>
        <Treatment />
        <Champion />
      </section>
    </div>
  );
}

export default App;
