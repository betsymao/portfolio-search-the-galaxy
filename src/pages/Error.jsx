// libraries
import { Link } from 'react-router-dom';

function Error() {
  return (
    <>
      <div className="pageNotFound">
        <h2 className="pageNotFound__title"></h2>
        <Link to="/">Return to home</Link>
      </div>
    </>
  );
}
  
export default Error;