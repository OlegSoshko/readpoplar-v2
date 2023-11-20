import { BrowserRouter } from 'react-router-dom';

import {
  Navbar,
  Main,
  Products,
  HowOrder,
  Advantages,
  BackgroundStars,
  Feedbacks,
  Contact
} from './components';

export const App = () => {
  return (
    <BrowserRouter>
      <BackgroundStars />

      <Navbar />
      <Main />
      <Advantages />
      <HowOrder />
      <Products />
      <Feedbacks />
      <Contact />
    </BrowserRouter>
  );
}