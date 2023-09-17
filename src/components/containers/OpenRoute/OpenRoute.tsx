import { type FC } from 'react';

import { About, Contact, Home, Portfolio } from '../../pages';
import { Footer, Header } from '../../ui';

const OpenRoute: FC = () => {
  return (
    <>
      <Header />

      <Home />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};

export default OpenRoute;
