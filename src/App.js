import React from 'react';
import Nav from 'components/Nav';
import Welcome from 'components/Welcome';
import Start from 'components/Start';
import Treatment from 'components/Treatments';
import Champion from 'components/Champion';
import Book from 'components/Book';
import Footer from 'components/Footer';

function App() {

  return (
    <div className='bg-mattis-img bg-cover bg-fixed bg-center relative bg-white/75'>
      <div className='absolute hidden mb:block h-[calc(100vh+64px)] w-screen top-0 bottom-0 bg-white/75'>
      </div>
      <Nav />
      <Start />
      <Welcome />
      <iframe src="https://widget.reco.se/v2/widget/4008268?mode=HORIZONTAL_QUOTE&inverted=false&border=false" height="225" className='w-full border-b-2'></iframe>
      <Treatment />
      <Champion />
      <Book />
      <Footer />
    </div>
  );
}

export default App;
