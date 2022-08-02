import React from 'react'
import ReactDOM from 'react-dom/client'
import UserList from './pages/users'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserList />
  </React.StrictMode>
)
