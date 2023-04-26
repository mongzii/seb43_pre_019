import { Outlet } from 'react-router-dom';
import Header from './header/Header';
import Aside from './leftAside/Aside';
import Footer from './footer/Footer';

function Template() {
  return (
    <>
      <Header />
      <div>
        <Aside />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Template;
