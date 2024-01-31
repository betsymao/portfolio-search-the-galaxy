// assets
import Light from '../../assets/light.svg';
import Dark from '../../assets/dark.svg';

function ThemeBtn({ darkMode, handleDark, handleLight }) {
  return (
    <>
      {
        darkMode ?
        <button onClick={handleLight} className="btn btn-light"><img src={Light} /></button> :
        <button onClick={handleDark} className="btn btn-dark"><img src={Dark} /></button>
      }
    </>
  );
}

export default ThemeBtn;