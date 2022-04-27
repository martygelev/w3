import { useParams } from "react-router-dom";
import useFetch from "../useFetch";


const BlogPost = () => {
    const { id } = useParams();
    const {
      data: blog,
      error,
      isLoading,
    } = useFetch("http://localhost:8888/blogs/" + id);
    return (
      <div>
        {isLoading && <div>'Loading...'</div>}
        {error && <div>error</div>}
        {blog && (
          <article>
            <h2> {blog.title}</h2>
            <p> {blog.body}</p>
            <hr />
            <div>
              <h3>Keywords:</h3>
              {blog.keywords.map((keyword) => (
                <p className="py-1 flex" key={keyword}>
                  {keyword}
                </p>
              ))}
            </div>
          </article>
        )}
      </div>
    );
}


export default BlogPost;