import React, { useState, useCallback } from 'react';
import axios from 'axios';
import NewsList from './components/NewsList'
import Categories from './components/Categories';
import { Route } from 'react-router-dom';
import NewsPage from './pages/NewsPage';

const App = () => {
  return <Route path='/:category?' component={NewsPage} />
};

/*
const App = () => {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback(category => setCategory(category), [])

  return (
    <>
      <Categories category={category} onSelect={onSelect}/>
      <NewsList category={category} />
    </>
  )
}
*/

/*
const App = () => {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      const response = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=kr&apiKey=f55939c02a54409691216da8eebfc5e3'
      );
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} />}
    </div>
  );
};
*/

export default App;