// libraries
import { 
  useState,
  useEffect
} from 'react';
import { Link } from 'react-router-dom';

// components
import ThemeBtn from '../common/ThemeBtn';

// assets
// import Logo from '../../assets/logo.svg';

function Header() {

  // state for dark and light mode
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {

    // get and store local storage data
    let darkModeValue = localStorage.getItem('darkMode');

    if (darkModeValue === 'true') {
      // if the value is 'true', set dark mode
      setDarkMode(true);
    } else {
      // otherwise, set light mode
      setDarkMode(false);
    }

  }, []);

  // set dark mode when the dark button is clicked
  const handleDark = (e) => {
    setDarkMode(true);
    localStorage.setItem('darkMode', 'true')
  };

  // set light mode when the light button is clicked
  const handleLight = (e) => {
    setDarkMode(false);
    localStorage.setItem('darkMode', 'false')
  };

  return (
    <>
      <header>
        <div className="header header--container">

          <link rel="stylesheet" 
                type="text/css" 
                href={!darkMode 
                  ? '/light.css'
                  : '/dark.css'
                }>
          </link>

          <div className="logo">
            <Link to="/" className="logo__link">
              {/* <img src={Logo} /> */}
              Search the Galaxy
            </Link>
          </div>
          
          {/* ThemeBtn component */}
          <ThemeBtn darkMode={darkMode} handleDark={handleDark} handleLight={handleLight} />

        </div>
      </header>
    </>
  );
}
  
export default Header;