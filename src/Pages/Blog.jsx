import { useLoaderData, Link } from "react-router-dom";


const Blog = () => {
  const { posts } = useLoaderData();
  
  
  return (
    <>
      <ul>
        {
          posts.length > 0 ? (
            posts.map((blog) => (
              <li key={blog.id}>
                <Link to={`/blog/${blog.id}`}>{blog.id} - {blog.title}</Link>
              </li>
            ))
          ) : (
            <li>No blog found</li>
          )}
      </ul>
    </>
  );
};
export default Blog;

// eslint-disable-next-line react-refresh/only-export-components
export const loaderBlog = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')

  if (!res.ok) throw {
    status: res.status,
    statusText: 'No encontrado'
  }; 
  
  const posts = await res.json()

  return { posts }
}
