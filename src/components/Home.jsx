import React from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addtoPaste, updatetoPaste } from "../redux/pasteSlice";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");

  const dispatch = useDispatch();
  const allPastes= useSelector((state) => state.paste.paste);

     useEffect(() => {
      if (pasteId) {
        const existingPaste = allPastes.find((p) => p._id === pasteId);
        if (existingPaste) {
          setTitle(existingPaste.title);
          setValue(existingPaste.content);
        }
      }
     
    }, [pasteId])
    

  function createPaste() {
    const paste={
      title:title,
      content:value,
      _id:pasteId || Date.now().toString(36),createdAt:new Date().toISOString(),
    }

 

    if(pasteId){
      //update paste
      dispatch(updatetoPaste(paste));
     
    }else{
      //create new paste
      dispatch(addtoPaste(paste));
     
    }
    //after creation or updation clear the form
    setTitle("");
    setValue("");
    setSearchParams({});

  }

  return (
    <div className="max-w-2xl mx-auto mt-10 p-4 gap-9 place-content-between  flex flex-col  ">
      <div className=" max-w-2xl mx-auto mt-10 p-4 gap-9 place-content-between flex flex-row">
        <input 
          type="text"
          className="border border-black rounded-md text-center text-white p-2 w-80%"
          placeholder="Enter your Title"
          
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button
          onClick={createPaste}
          className="bg-blue-500 text-white   p-2 rounded-md"
        >
          {pasteId ? "Update Paste" : "Create Paste"}
        </button>
      </div>

      <div>
        <textarea
          className="border border-gray-300 rounded-md p-2 min-w-full h-64"
          placeholder="Enter your Content here"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          rows={20}
        />
      </div>
    </div>
  );
};

export default Home;
