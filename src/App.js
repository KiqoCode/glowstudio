import React from 'react';
import Nav from 'components/Nav';

function App() {

  return (
    <div className="absolute h-full w-screen bg-mattis-img bg-cover bg-center -z-10">

      {/* Overlay visible only on mobile device */}
      <div className='absolute sm:hidden h-full w-screen bg-white/75 -z-10'>
      </div>
      <Nav />
    </div>
  );
}

export default App;
