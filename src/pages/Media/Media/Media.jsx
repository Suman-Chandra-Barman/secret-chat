import React from "react";
import { useLoaderData } from "react-router-dom";
import PostCard from "./PostCard";

const Media = () => {
  const posts = useLoaderData();
  console.log(posts);
  return (
    <div className="grid grid-cols-1 gap-4">
      {posts.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
    </div>
  );
};

export default Media;
