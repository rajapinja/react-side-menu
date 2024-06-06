import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import logo from '../components/images/Logo_laraid.jpeg';
import { useLocation } from 'react-router-dom';


const Layout = ({ isFooterVisible, children }) => {

  const location = useLocation();

  // Check if the current location is the home page
  const isHomePage = location.pathname === '/';

  return (
    
    <div>
      {/* <Header /> */}
      <div className="content">
        <Outlet />       
      </div>    
      {/* When its from Home Page */}
      {isFooterVisible && isHomePage && <Footer /> }   
       {/* When its from Other Pages */}
      {!isHomePage && <Footer />}       
    </div>
  );
};

export default Layout;

