import React from 'react'

function BlogPost({ post }) {

  // const {image,title,focus,description,cost} = post; //sestructuring
  return (
    <div className="blog-container">
      <div className="post">
      <img src={post.image} alt={post.title} />
          <p>{post.title}</p>
          <h3>{post.focus}</h3>
          <p className="desc">{post.description}</p>
          <button onClick={() => alert('its all for free')}>{post.cost}</button>
      </div>
    </div>
  );
}

export default BlogPost;