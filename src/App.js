import React from 'react';
import Nav from 'components/Nav';
import About from 'components/About';

function App() {

  return (
    <body>

      {/* Overlay visible only on mobile device 
          
          */}
      <section id='top-section'>
        <div className='h-screen w-full bg-mattis-img bg-cover bg-fixed bg-center -z-10'>
          <div className='absolute sm:hidden h-full w-screen bg-white/75 -z-10'>
          </div>
          <Nav />
        </div>
      </section>
      <section id='bottom-section'>
        <About/>
      </section>
    </body>
  );
}

export default App;
