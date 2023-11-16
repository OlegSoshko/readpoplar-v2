import { BrowserRouter } from 'react-router-dom';

import { Navbar, Main, Products } from './components';

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Main />
      <Products />
    </BrowserRouter>
  );
}