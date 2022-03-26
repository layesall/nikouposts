import axios from 'axios';
import React, {useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom';
import './Post.css';

export default function Post() {

  const {id} = useParams();
  const [post, setPost] = useState([]);

  const getPost = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        setPost(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getPost();
  }, []);
  
  return (
    <div className="post-component">
      <div key={post.id} className="post-card">
        <h1 className="post-title">{post.title}</h1>
        <article className="post-body">{post.body}</article>
        <div className='post-id' title={`Post n°${post.id}`}>{post.id}</div>
        <Link to='/' className='btn-close' title="Retour à l'accueil">Retour</Link>
      </div>
    </div>
  );
}
