import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../useFetch";

const BlogPost = () => {
  const url = "http://localhost:8888/blogs/";

  const route = useNavigate();

  const handleDelete = () => {
    fetch(url + id, {
      method: "DELETE",
    }).then(() => {
      route("/blog");
    });
  };

  const { id } = useParams();
  const { data: blog, error, isLoading } = useFetch(url + id);
  return (
    <div>
      {isLoading && <div>'Loading...'</div>}
      {error && <div> {error} </div>}
      {blog && (
        <article>
          <h2> {blog.title}</h2>
          <h3>Created by: {blog.author} </h3>
          <h4>ID: {blog.id}</h4>
          <p> {blog.body}</p>
          <hr />
          <div>
            {blog.keywords?.length > 0 && 
              <div>
                <h3>Keywords:</h3>
                <ul>
                  {blog.keywords.map((keyword, index) => (
                    <li className="py-1 flex" key={index}>
                      {keyword}
                    </li>
                  ))}
                </ul>
              </div>
            }
          </div>
          <button onClick={handleDelete}> Delete </button>
        </article>
      )}
    </div>
  );
};

export default BlogPost;
