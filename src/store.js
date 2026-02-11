import { configureStore } from '@reduxjs/toolkit'
import pasteReducer from './redux/pasteSlice.js'


 const store = configureStore({
  reducer: {
    paste: pasteReducer,

    
  },
})

export default store
