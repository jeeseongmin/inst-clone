import React from "react";
import Post from "./Post";

const posts = [
  {
    id: "123",
    username: "person",
    userImg:
      "https://cdn.pixabay.com/photo/2014/07/09/10/04/man-388104_960_720.jpg",
    img: "https://cdn.pixabay.com/photo/2014/07/09/10/04/man-388104_960_720.jpg",
    caption: "SUBSCRIBE AND DESTROY THE LIKE BUTTON for the YT algorithm!",
  },
  {
    id: "123",
    username: "person",
    userImg:
      "https://cdn.pixabay.com/photo/2014/07/09/10/04/man-388104_960_720.jpg",
    img: "https://cdn.pixabay.com/photo/2014/07/09/10/04/man-388104_960_720.jpg",
    caption: "SUBSCRIBE AND DESTROY THE LIKE BUTTON for the YT algorithm!",
  },
  {
    id: "123",
    username: "person",
    userImg:
      "https://cdn.pixabay.com/photo/2014/07/09/10/04/man-388104_960_720.jpg",
    img: "https://cdn.pixabay.com/photo/2014/07/09/10/04/man-388104_960_720.jpg",
    caption: "SUBSCRIBE AND DESTROY THE LIKE BUTTON for the YT algorithm!",
  },
];
function Posts() {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
      {/* Post */}
      {/* Post */}
      {/* Post */}
      {/* Post */}
      {/* Post */}
      {/* Post */}
    </div>
  );
}

export default Posts;
