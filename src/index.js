import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import UserHome from './Components/User/UserHome'
// import UserHomePage from './Components/Userlucofy/UserHomePage'

import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <App />

    {/* <h2>{testData}</h2> */}
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
