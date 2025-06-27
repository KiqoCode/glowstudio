import React from 'react';
import Nav from 'components/Nav';
import Welcome from 'components/Welcome';
import Start from 'components/Start';
import Treatment from 'components/Treatments';
//import Champion from 'components/Champion';
import Book from 'components/Book';
import Footer from 'components/Footer';

function App() {

  return (
    <div className='bg-mattis-img bg-cover bg-fixed bg-center bg-white/75'>
      <Nav />
      <Start />
      <Welcome />
      <Treatment />
      {/* <Champion /> */}
      <Book />
      <Footer />
    </div>
  );
}

export default App;
