// libraries
import { Outlet } from 'react-router-dom';

// components
import Header from './Header';
import Footer from './Footer';

function Layout() {
    return (
      <>
        <div className="container">
          <Header />
          <Outlet />
          <Footer date={new Date().getFullYear()} />
        </div>
      </>
    );
  }
  
  export default Layout;