

import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';


const viewpastes = () => {
  const {id}=useParams();

  const allPastes= useSelector((state) => state.paste.paste);

  const paste = allPastes.filter((p) => p._id === id);

  return (
      <div className="max-w-2xl mx-auto mt-10 p-4 gap-9 place-content-between flex flex-col">
      <div className=" max-w-2xl mx-auto mt-10 p-4 gap-9 place-content-between flex flex-row">
        <input
          type="text"
          className="border border-gray-300 rounded-md p-2 w-80%"
          placeholder="Enter your Title"
          value={paste[0].title}
          disabled
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* <button
          onClick={createPaste}
          className="bg-blue-500 text-white p-2 rounded-md mt-2"
        >
          {pasteId ? "Update Paste" : "Create Paste"}
        </button> */}
      </div>

      <div>
        <textarea
          className="border border-gray-300 rounded-md p-2 min-w-full h-64"
          placeholder="Enter your Content here"
          value={paste[0].content}
          disabled
          onChange={(e) => setValue(e.target.value)}
          rows={20}
        />
      </div>
    </div>
  )
}

export default viewpastes