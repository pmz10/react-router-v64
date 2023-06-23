import { Link, useLoaderData } from "react-router-dom";

const Post = () => {
    const { post } = useLoaderData()
  return (
    <>
      <h1>{post.id} - {post.title}</h1>
      <p>{post.body}</p>
      <Link to="/blog">Volver</Link>
    </>
  );
};

export default Post;

// eslint-disable-next-line react-refresh/only-export-components
export const loaderPost = async ({ params }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );

  if (!res.ok) throw {
    status: res.status,
    statusText: 'No encontrado'
  }; 

  const post = await res.json();
  return { post };
};
