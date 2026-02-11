import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-hot-toast';


 
const initialState = {
  paste:localStorage.getItem('paste')
  ? JSON.parse(localStorage.getItem('paste'))
  : []
}

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addtoPaste: (state, action) => {
      const paste = action.payload;
     
        state.paste.push(paste);
        localStorage.setItem('paste', JSON.stringify(state.paste));
      toast.success("Paste added successfully!")
        
    
    },
    updatetoPaste: (state,action) => {
      const paste= action.payload;
      const index = state.paste.findIndex((p) => p._id === paste._id);
      if(index >= 0){
        state.paste[index] = paste;
        localStorage.setItem('paste', JSON.stringify(state.paste));
        toast.success("Paste updated successfully!")
      }
    },
    resetAllPaste: (state,  action) => {
        state.paste = [];
        localStorage.removeItem('paste');
        toast.success("All pastes reset successfully!")
      
    },
   removeFromPaste: (state, action) => {
      const pasteId = action.payload;
    
      console.log("Removing paste with ID:", pasteId);

      const index = state.paste.findIndex((p) => p._id === pasteId);
      if (index >= 0) {
        state.paste.splice(index, 1);
        localStorage.setItem('paste', JSON.stringify(state.paste));
        toast.success("Paste removed successfully!")
      } else {
        console.warn("Paste not found with ID:", pasteId);
      } 

  },

},
})  



// Action creators are generated for each case reducer function
export const { addtoPaste, updatetoPaste, resetAllPaste, removeFromPaste } = pasteSlice.actions

export default pasteSlice.reducer
