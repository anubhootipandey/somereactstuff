import React from 'react'
import Header from '../components/Header'
import { useLocation } from 'react-router-dom'
import { blogs } from '../Data/blogs';

const BlogDetails = () => {
  const uselocation = useLocation();
  const currentId = uselocation.pathname.split('/')[2];
  const currentData = blogs.filter(v => v.id == currentId)[0];
  console.log(currentData);

  return (
    <>
    <Header />
    <h3>{currentData.title}</h3>
    </>
  )
}

export default BlogDetails