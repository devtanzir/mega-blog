import React from "react";
import appwriteServerce from "../appwrite/config";
import { Link } from "react-router-dom";

const PostCard = ({ $id, title, featuredImage, content }) => {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-[393px]  mb-20 text-left">
        <div className="w-full flex justify-center items-center mb-4">
          <img
            src={appwriteServerce.getFilePreview(featuredImage)}
            alt={title}
            className="rounded-lg w-[393px] h-[230px] object-cover"
          />
        </div>
        <h2 className="text-xl capitalize font-bold">{title}</h2>
      </div>
    </Link>
  );
};

export default PostCard;
