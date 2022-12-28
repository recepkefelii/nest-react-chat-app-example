import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { store } from './store/store.js'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}> // This is the redux store
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>
)
