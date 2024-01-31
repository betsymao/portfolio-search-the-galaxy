// assets
// import Light from '../../assets/light.svg';
// import Dark from '../../assets/dark.svg';

function ThemeBtn({ darkMode, handleDark, handleLight }) {
  return (
    <>
      {
        darkMode ?
        <button onClick={handleLight} className="btn btn__light">ON</button> :
        <button onClick={handleDark} className="btn btn__dark">OFF</button>
      }
    </>
  );
}

export default ThemeBtn;