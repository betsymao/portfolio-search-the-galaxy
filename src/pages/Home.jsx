// libraries
import {
  useState,
  useEffect
} from 'react';

// services
import { getItems } from '../services/NASA';

// components
import Search from "../components/form/Search";
import Item from '../components/item/Item';

function Home() {

  // store API data in state
  const [items, setItems] = useState();

  // store search input in state
  const [query, setQuery] = useState('');

  // store API connection status
  const [error, setError] = useState('');

  // execute code when query is changed
  useEffect(() => {
    
    // connect to API
    async function getService() {

      // if no search query input, exit the function
      if (!query) return;

      try {

        // clear state when function is called
        setError('');
        // store API data
        const response = await getItems(query);
        // update state
        setItems(response.data.collection.items);

      } catch (err) {

        // update state if there is an API error
        setError(err.message);

      }

    }
    getService();

  }, [query]);

  // update query state when input is changed
  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      
      {/* render search input form component */}
      <Search onChange={handleSearch} query={query} error={error} />

      <div className="collection">
        {/* render collection of API items */}
        {items && items.map((item, i) => (
            <Item key={i} item={item} />
          ))}
      </div>
    </>
  );
}

export default Home;