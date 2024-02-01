// libraries
import { 
  Routes, 
  Route 
} from 'react-router-dom';

// pages
import Home from './pages/Home';
import Error from './pages/Error';

// components
import Layout from './components/layout/Layout';

// styles
import '../src/styles/normalize.css';
import '../src/styles/App.css';

function App() {
  return (
    <>
      <Routes>

        {/* layout component */}
        <Route path='/' element={<Layout />}>

          {/* home page */}
          <Route index element={<Home />} />

          {/* error page */}
          <Route path='/*' element={<Error />} />

        </Route>

      </Routes>
    </>
  )
};

export default App;
