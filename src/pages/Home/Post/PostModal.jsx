import React from "react";

const PostModal = () => {
  return (
    <div>
      <input type="checkbox" id="post-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <div className="heading text-center font-bold text-2xl m-5 text-gray-800">
            Create New Post
          </div>
          <div className="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
            <textarea
              className="description bg-gray-100 sec p-3 h-40 border border-gray-300 outline-none"
              spellCheck="false"
              placeholder="What's on your mind..."
            ></textarea>

            <div className="icons flex text-gray-500 m-2">
              <svg
                className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                />
              </svg>
            </div>
            <div className="buttons flex">
              <label htmlFor="post-modal" className="btn ml-auto">
                Cancel
              </label>
              <div className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500">
                Post
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
