import React, { useState } from "react";
import "./CSS/feed.css";
import Storyreels from "./storyreel";
import MessageSender from "./MessageSender";
import Post from "./Post";
import post_details from "./data/post_data";
function Feed() {
  const [posts,setPosts]=useState(post_details);
  const addPosts=(newPost)=>
  {
    newPost._id=posts.length;
    setPosts((prevPosts)=>[newPost,...prevPosts]);
  }
  return (
    <div className="feed">
      <Storyreels />
      <MessageSender addPosts={addPosts}/>
      {posts.map((post)=>
      <Post photoURL={post.photoURL}
        key={post._id}
        image={post.image}
        name={post.name}
        timeStamp={post.timeStamp}
        message={post.message}
      />
      )}
    </div>
  );
}

export default Feed;
