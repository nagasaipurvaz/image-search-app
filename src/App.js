import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const API_KEY = '39939405-885e8f46b5cb8dd310ebbe929';

const App = () => {
  const [searchText, setSearchText] = useState('');
  const [images, setImages] = useState([]);

  const handleSearch = () => {
    const url = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(searchText)}`;

    axios.get(url)
      .then(response => {
        setImages(response.data.hits);
      })
      .catch(error => console.error('Error fetching images:', error));
  };

  return (
    <div className="App">
      <div className="search-container">
        <input
          type="text"
          placeholder="Enter search text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="image-grid">
        {images.map(image => (
          <img key={image.id} src={image.webformatURL} alt={image.tags} />
        ))}
      </div>
    </div>
  );
};

export default App;
