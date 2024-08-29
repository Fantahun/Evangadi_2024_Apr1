import React, { useEffect, useState } from 'react';

function Blog() {
  const [posts, setPosts] = useState([]);
 
  useEffect(() => {
    // Sample API URL (you can replace this with any real API)
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

    const fetchPosts = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
      }
    };

    fetchPosts();
  }, []); // Empty dependency array ensures this runs once when the component mounts



  return (
    <div>
      <h1>Our Blog</h1>
      <ul>
        {posts.slice(0, 5).map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Blog;
