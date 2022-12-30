import React from "react";
import { FaUserCircle } from "react-icons/fa";

const PostCard = ({ post }) => {
  const { _id, name, text, image, email } = post;
  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto rounded">
      <div className="card-body p-4">
        <div className="flex gap-2 items-center border-b-2">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <FaUserCircle className="w-10 h-10" />
            </div>
          </div>
          <h4 className="font-bold text-xl">{name}</h4>
        </div>
        <p>{text}</p>
      </div>
      <figure>
        <img src={image} alt="Shoes" className="w-full" />
      </figure>
    </div>
  );
};

export default PostCard;
