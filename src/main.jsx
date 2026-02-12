import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'

import App from './App.jsx'
import { Provider } from 'react-redux'
import  store  from './store.js'
import { Toaster } from 'react-hot-toast';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="w-full h-screen">

    <Provider store={store}>
      <App />
      <Toaster/>
    </Provider>

    </div>

  </StrictMode>
)



