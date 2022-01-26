// https://medium.com/@ryanchenkie_40935/react-authentication-how-to-store-jwt-in-a-cookie-346519310e81
// https://www.codementor.io/@manashkumarchakrobortty/authentication-and-authorization-in-node-js-19brdvhsyw

import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import Recruiter_Candidate_View from './Recruiter_Candidate_View.jsx'


const apiUrl = 'http://localhost:3001';
axios.interceptors.request.use(
  config => {
    const { origin } = new URL(config.url);
    const allowedOrigins = [apiUrl];
    const token = localStorage.getItem('token');
    if (allowedOrigins.includes(origin)) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
function Child() {
  const storedJwt = localStorage.getItem('token');
  const [jwt, setJwt] = useState(storedJwt || null);
  const [foods, setFoods] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [credentials, setCredentials] = useState({
    name: '',
    password: ''
  });
  const [logged_in, setLogged_in] = useState(false)


// const getJwt = async () => {
//     const { data } = await axios.get(`${apiUrl}/jwt`);
//     console.log(data)
//     localStorage.setItem('token', data.token);
//     setJwt(data.token);
//   };

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

  const login = async (e) => {
    e.preventDefault()
    axios({
      method: 'post',
      url: `${apiUrl}/login`,
      data:
        // {credentials: credentials}
        credentials
      ,
      // headers: {
      //   'Content-Type': 'multipart/form-data'
      // }
    })
    .then(res => {
        console.log(res.data);
        localStorage.setItem('token', res.data.token);
        console.log(res.data.token)
        setJwt(res.data.token);
        setLogged_in(true)
      })
    .catch( err => {
      console.log(err)
    })
  }

return (
    <>
      <p>jwt: {jwt}</p>
      <p>{logged_in}</p>

      {/* <section style={{ marginBottom: '10px' }}>
        <button onClick={() => getJwt()}>Get JWT</button>
        {jwt && (
          <pre>
            <code>{jwt}</code>
          </pre>
        )}
      </section> */}

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
      <form onSubmit={login}>
      <label>
          Name:
          <input type="text" value={credentials.name} onChange={(e) => setCredentials({...credentials, name: e.target.value})}/>
        </label>        <label>
          Password:
          <input type="password" value={credentials.password} onChange={(e) => setCredentials({...credentials, password: e.target.value})} />
        </label>
        <input type="submit" value="Login" />
      </form>
      </section>
    </>
  );
}

const App = () => {
  return(
    // <>
    // <div style = {{'height': '200px'}}>

    // </div>
    // <Child/>
    // </>

    <Recruiter_Candidate_View/>
  )
}


export default App;