import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import { mainStore } from './pages/react-redux/store/store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={mainStore}>
    <App />
  </Provider>
)
