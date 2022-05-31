import { DotsHorizontalIcon } from "@heroicons/react/outline";
import React from "react";

function Post({ id, username, userImg, img, caption }) {
  return (
    <div>
      {/* Header */}

      <div className='flex items-center p-5'>
        <img
          src={userImg}
          className='object-contain w-12 h-12 p-1 mr-3 border rounded-full'
          alt='profile'
        />
        <p className='flex-1'>{username}</p>
        <DotsHorizontalIcon className='h-5' />
      </div>

      {/* Img */}

      {/* Buttons */}

      {/* caption */}

      {/* comments */}

      {/* input box */}
    </div>
  );
}

export default Post;
