import React from 'react';
import Header from '../components/Header';
import { blogs } from '../Data/blogs';
import '../App.css';
import { Link } from 'react-router-dom';

const Blog = () => {
  let allBlogs = blogs.map((v, i) => {
    return (
      <div className='blogItems' key={i}>
        <h3>{v.title}</h3>
        <p>
          {v.body}
        </p>
        <button><Link to={`/blog/${v.id}`}>Read More</Link></button>
      </div>
    )
  })
  return (
    <>
    <Header />
    <h3>Blog</h3>
    <div className='container'>
      <p>
        {allBlogs}
      </p>
    </div>
    </>
  )
}

export default Blog