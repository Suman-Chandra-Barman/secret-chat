import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";

const PostModal = () => {
  const { user } = useContext(AuthContext);

  const handlePost = (e) => {
    e.preventDefault();
    const form = e.target;
    const text = form.text.value;
    const file = form.file.files[0];

    const name = user.displayName;
    const email = user.email;
    const date = new Date();

    const formData = new FormData();
    formData.append("image", file);
    const imgbb_key = process.env.REACT_APP_imgbb_api;
    const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imgbb_key}`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          const imgurl = data.data.url;
          const postData = {
            name,
            email,
            text,
            image: imgurl,
            date,
          };
          console.log(postData);

          // save post in database
          fetch("http://localhost:5000/post", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(postData),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.acknowledged) {
                form.reset();
              }
            })
            .catch((error) => {
              console.log(error);
            });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <input type="checkbox" id="post-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <div className="heading text-center font-bold text-2xl m-5 text-gray-800">
            Create New Post
          </div>
          <div className="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
            <form onSubmit={handlePost}>
              <textarea
                name="text"
                className="description bg-gray-100 sec p-3 h-40 w-full border border-gray-300 outline-none"
                placeholder="What's on your mind..."
              ></textarea>
              <input name="file" type="file" />
              <div className="buttons flex">
                <label htmlFor="post-modal" className="btn ml-auto">
                  Cancel
                </label>
                <button
                  type="submit"
                  className="btn border-0 border-blue-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-blue-500 hover:bg-blue-700"
                >
                  Post
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
