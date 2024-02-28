// libraries
import { Link } from 'react-router-dom';

function Footer({ date }) {
    return (
      <>
        <footer>
          <div className="footer footer--container">
            <p className="footer__body">
              &copy; {date} Search the Galaxy.
              Example project by <Link to="https://betsymao.onrender.com/">Betsy</Link>.
            </p>
          </div>
        </footer>
      </>
    );
  }
  
  export default Footer;