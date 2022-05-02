import { Link } from 'react-router-dom';

const BlogList = ({ blogs }) => {
  return (
      <div className="divide-y divide-gray-200">
          {blogs.map((blog) => (
                <div key={blog.id}>
              <Link to={`/blog/${blog.id}`}>
                  <h2> {blog.title}</h2> with ID: <b>{blog.id}</b>
                  <h4>Written by {blog.author}</h4>
              </Link>
                </div>
          ))}
      </div>
  );
};

export default BlogList;
