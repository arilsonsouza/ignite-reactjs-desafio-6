import type { NextPage } from 'next';

import { Trips } from '../components/Trips';
import { Banner } from '../components/Banner';

const Home: NextPage = () => {
  return (
    <>
      <Banner />
      <Trips />
      <main>
        HOME PAGE
      </main>
    </>
  );
};

export default Home;
