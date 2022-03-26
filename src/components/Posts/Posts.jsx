import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Posts.css";
import { Link } from "react-router-dom";

export default function Posts() {
  useEffect(() => {
    getPosts();
  }, []);

  const [posts, setPosts] = useState([]);

  const getPosts = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="posts-component">
      {posts.map((post) => (
        <Link to={'post/'+ post.id} key={post.id} className="posts-card">
          <h1 className="posts-title">{post.title}</h1>
        </Link>
      ))}
    </div>
  );
}
