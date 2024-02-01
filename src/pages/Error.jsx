// libraries
import { Link } from 'react-router-dom';

function Error() {
  return (
    <>
      <div className="center">
        <div className="pageNotFound">
          <h2 className="pageNotFound__title">
            <span className="pageNotFound__title--accent">404.</span> That's an error.
          </h2>
          <p>The requested URL was not found on this server.</p>
          <Link to="/">Return to home</Link>
        </div>
      </div>
    </>
  );
}
  
export default Error;