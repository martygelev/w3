import BlogList from "./BlogList";
import useFetch from "../useFetch";
import { Link } from 'react-router-dom';


const Blog = () => {
    
    const { data: blogs, isLoading, error } = useFetch("http://localhost:8888/blogs");
    
  return (
    <div>
      <h1>Blog</h1>
      <hr />
      <Link to='/blog/add'>
        <b>Add new blog</b>
      </Link>
      <hr />
      {error && <div> {error.message} </div>}
      {isLoading && <div> Loading... </div>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
};

export default Blog;
