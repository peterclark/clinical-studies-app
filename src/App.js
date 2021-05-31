import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [studies, setStudies] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const { REACT_APP_API_URL: url, REACT_APP_AUTHORIZATION: authorization } = process.env;
      const { status, data } = await axios.get(url, { headers: { authorization }});
      if (status !== 200) throw new Error('Unable to fetch studies');
      setStudies(data || []);
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="App">
      {
        studies.map(study => (
          <p>{study.title}</p>
        ))
      }
    </div>
  );
}

export default App;
