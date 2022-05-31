import React from "react";

function Story({ img, username }) {
  return (
    <div>
      <img
        className='border-2 border-red-500 rounded-full h-14 w-14 p-[1.5px] object-contain hover:scale-110 transition transform duration-200 ease-out cursor-pointer'
        src='https://cdn.pixabay.com/photo/2014/07/09/10/04/man-388104_960_720.jpg'
        alt='profile'
      />
      <p className='text-xs truncate w-14'>{username}</p>
    </div>
  );
}

export default Story;
