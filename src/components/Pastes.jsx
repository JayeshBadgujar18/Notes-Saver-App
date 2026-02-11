import React, { use } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { removeFromPaste } from '../redux/pasteSlice';
import toast from 'react-hot-toast';
import { NavLink } from 'react-router-dom';


const pastes = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const pastes = useSelector((state) => state.paste.paste);
  
  const dispatch = useDispatch();

  const filteredData= pastes.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()));

  function handleDelete(pasteId){
   dispatch(removeFromPaste(pasteId));
  }
  
  
  return (
    <div>

      <input 
      type="search"
      placeholder='Search by title'
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className='border border-gray-300 rounded-md p-2 w-600px mb-4'
      />

      <div className='flex flex-col gap-5 mt-5'>

      {
        filteredData.length > 0 && filteredData.map((paste) => {
          return (
            <div className='border ' key={paste._id} >
              <div>
              
               { paste.title}

              </div>
              <div>
                {paste.content}
              </div>

              <div className='flex flex-row gap-4 p-4 text-blue-800 place-content-evenly'>
                <button >
                <NavLink to={`/?pasteId=${paste._id}`} className="hover:text-blue-300">
                  Edit
                </NavLink>
                </button>
                <button onClick={() => handleDelete(paste._id)}>  
                  Delete
                </button>
                <button >
                <NavLink to={`/pastes/${paste._id}`} className="hover:text-blue-300">
                View
                </NavLink>
               
                 </button>
                 <button onClick={() => {
                  const shareData = {
                    title: paste.title,
                    text: paste.content,
                  };    
                  navigator.share(shareData);
                  toast.success("Content shared successfully!");
                }}>
                  Share
                </button>
                <button onClick={() => {
                  navigator.clipboard.writeText(paste.content);
                  toast.success("Content copied to clipboard!");
                }}>
                  Copy
                </button>
              </div>

              <div>
                paste created at: {new Date(paste.createdAt).toLocaleString()}
              </div>
            
            

            </div>
          )
        })

      }
      </div>
      

    </div>
  )
}

export default pastes