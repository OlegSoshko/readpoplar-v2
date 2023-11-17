import { BrowserRouter } from 'react-router-dom';

import { Navbar, Main, Products, HowOrder, Advantages, BackgroundStars } from './components';

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Main />
      <Advantages />
      <HowOrder />
      <Products />
      <BackgroundStars />
    </BrowserRouter>
  );
}