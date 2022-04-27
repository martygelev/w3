import BlogList from "./BlogList";
import useFetch from "./useFetch";


const Blog = () => {
    
    const { data: blogs, isLoading, error } = useFetch("http://localhost:8888/blogs");
    
  return (
    <div>
          <h1>Blog</h1>
          { error && <div> {error.message} </div>}
          {isLoading && <div> Loading... </div>}
          {blogs && <BlogList blogs={blogs}/>}
    </div>
  );
};

export default Blog;
