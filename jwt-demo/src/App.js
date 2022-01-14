// https://medium.com/@ryanchenkie_40935/react-authentication-how-to-store-jwt-in-a-cookie-346519310e81
// https://www.codementor.io/@manashkumarchakrobortty/authentication-and-authorization-in-node-js-19brdvhsyw

import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const apiUrl = 'http://localhost:3001';
// axios.interceptors.request.use(
//   config => {
//     const { origin } = new URL(config.url);
//     const allowedOrigins = [apiUrl];
//     const token = localStorage.getItem('token');
//     if (allowedOrigins.includes(origin)) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   error => {
//     return Promise.reject(error);
//   }
// );
function App() {
  const storedJwt = localStorage.getItem('token');
  const [jwt, setJwt] = useState(storedJwt || null);
  const [foods, setFoods] = useState([]);
  const [fetchError, setFetchError] = useState(null);

const getJwt = async () => {
    const { data } = await axios.get(`${apiUrl}/jwt`);
    console.log(data)
    localStorage.setItem('token', data.token);
    setJwt(data.token);
  };

  const clearJWT = () => {
    localStorage.removeItem('token');
    console.log('ff')
    setJwt(null);
  };

const getFoods = async () => {
    try {
      const { data } = await axios.get(`${apiUrl}/foods`);
      setFoods(data);
      setFetchError(null);
    } catch (err) {
      setFetchError(err.message);
    }
  };

  const testPost = async (e) => {
    e.preventDefault()
    axios({
      method: 'post',
      url: 'http://localhost:3001/test',
      data: {
        firstName: 'Finn',
        lastName: 'Williams'
      }
    }).then(res => console.log(res));
  }

return (
    <>
      {/* <p>{jwt}</p> */}

      <section style={{ marginBottom: '10px' }}>
        <button onClick={() => getJwt()}>Get JWT</button>
        {jwt && (
          <pre>
            <code>{jwt}</code>
          </pre>
        )}
      </section>

      <section style={{ marginBottom: '10px' }}>
        <button onClick={() => clearJWT()}>Clear token</button>
      </section>

      <section>
        <button onClick={() => getFoods()}>
          Get Foods
        </button>
        <ul>
          {foods.map((food, i) => (
            <li>{food.description}</li>
          ))}
        </ul>
        {fetchError && (
          <p style={{ color: 'red' }}>{fetchError}</p>
        )}
      </section>

      <section>
      <form onSubmit={testPost}>
        <label>
          Name:
          <input type="text" value='test' onChange={() => {return null}} />
        </label>
        <input type="submit" value="Submit" />
      </form>
        {/* <button onClick={() => testPost()}>
          Test Post
        </button> */}
      </section>
    </>
  );
}
export default App;