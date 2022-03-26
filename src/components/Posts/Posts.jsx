import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Posts.css";

export default function Posts() {
  useEffect(() => {
    getPosts();
  }, []);

  const [posts, setPosts] = useState([]);

  const getPosts = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        let data = res.data;
        for (const item in data) {
          setPosts(data[item]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="posts-component" onLoad={getPosts}>
      <div className="posts-card">
        <h1 className="posts-title">{posts.title}</h1>
        <article className="posts-body">{posts.body}</article>
      </div>
      <div className="posts-card">
        <h1 className="posts-title">{posts.title}</h1>
        <article className="posts-body">{posts.body}</article>
      </div>
      <div className="posts-card">
        <h1 className="posts-title">{posts.title}</h1>
        <article className="posts-body">{posts.body}</article>
      </div>
      <div className="posts-card">
        <h1 className="posts-title">{posts.title}</h1>
        <article className="posts-body">{posts.body}</article>
      </div>
      <div className="posts-card">
        <h1 className="posts-title">{posts.title}</h1>
        <article className="posts-body">{posts.body}</article>
      </div>
      <div className="posts-card">
        <h1 className="posts-title">{posts.title}</h1>
        <article className="posts-body">{posts.body}</article>
      </div>
    </div>
  );
}
