import React from 'react';

interface BlogProps {
  visible: boolean;
}

console.log('Rendering Blog component');
const Blog: React.FC<BlogProps> = ( { visible } ) => {
  console.log('Visible:', visible);
  return (
    <div className="content-container" style={{ display: visible ? 'block' : 'none' }}>
      <h2>Blog</h2>
      <p>This is the Blog page content.</p>
    </div>
  );
};

export default Blog;