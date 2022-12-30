import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import PostModal from "./PostModal";
import { FaUserCircle } from "react-icons/fa";

const Post = () => {
  const { user } = useContext(AuthContext);
  console.log("user", user);
  return (
    <div className="flex gap-5 items-center w-4/5">
      <div className="avatar">
        <div className="w-10 rounded-full">
          <FaUserCircle className="w-10 h-10" />
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
