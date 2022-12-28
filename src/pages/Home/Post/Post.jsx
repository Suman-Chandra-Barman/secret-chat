import React from "react";
import PostModal from "./PostModal";

const Post = () => {
  return (
    <div className="flex w-1/2 mx-auto gap-5">
      <div className="avatar">
        <div className="w-12 rounded-full">
          <img src="https://placeimg.com/192/192/people" />
        </div>
      </div>
      <label
        htmlFor="post-modal"
        type="text"
        className="bg-base-200 w-full h-12 rounded-xl cursor-pointer"
      >
        Start a post
      </label>
      <PostModal />
    </div>
  );
};

export default Post;
