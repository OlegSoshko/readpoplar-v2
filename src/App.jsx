import { BrowserRouter } from 'react-router-dom';

import { Navbar } from './components';

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
}