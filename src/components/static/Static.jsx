import React, { useEffect, useState } from 'react';
import ProductWrapper from './components/ProductWrapper';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data from mock API
    fetch('https://jsonplaceholder.typicode.com/photos?_limit=5')
      .then(response => response.json())
      .then(json => {
        const transformedData = json.map(item => ({
          id: item.id,
          nomi: item.title,
          narxi: (Math.random() * 100).toFixed(2), // Generating random price
          url: item.url,
          createdAt: new Date().toISOString(),
        }));
        setData(transformedData);
      });
  }, []);

  return (
    <div className="App">
      <ProductWrapper data={data} title="Product List" />
    </div>
  );
}

export default App;
