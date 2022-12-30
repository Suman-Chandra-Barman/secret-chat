import React from "react";
import { FaHeart, FaRocketchat, FaUserCircle } from "react-icons/fa";

const PostCard = ({ post }) => {
  const { _id, name, text, image, email } = post;
  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto rounded">
      <div className="card-body p-4">
        <div className="flex gap-2 items-center border-b-2 pb-2">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <FaUserCircle className="w-10 h-10" />
            </div>
          </div>
          <h4 className="font-semibold text-xl">{name}</h4>
        </div>
        <p>{text}</p>
      </div>
      <figure>
        <img src={image} alt="Shoes" className="w-full" />
      </figure>
      <div className="flex justify-between p-2 border-b">
        <div className="flex items-center gap-2 px-8">
          <FaHeart className="text-red-500" />
          <span className="hover:underline hover:text-blue-500">0</span>
        </div>
        <div className="flex items-center gap-2 hover:underline hover:text-blue-500  py-3 px-6 rounded">
          0 Comment
        </div>
      </div>
      <div className="flex justify-between py-2 px-4 gap-5">
        <div className="flex items-center gap-2 hover:bg-gray-200 py-3 px-6 rounded w-1/2">
          <FaHeart className="text-red-500" />
          Love
        </div>
        <div className="flex items-center gap-2 hover:bg-gray-200 py-3 px-6 rounded w-1/2">
          <FaRocketchat />
          Comment
        </div>
      </div>
    </div>
  );
};

export default PostCard;
