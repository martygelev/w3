import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const CreateBlogPost = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [body, setBody] = useState('');
    // const [keywords, setKeywords] = useState([]);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const route = useNavigate();

    const handleSubmit = (e) => {
        setIsSubmitted(true);
        e.preventDefault();
        const blog = { title, body, author };

        fetch("http://localhost:8888/blogs", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log("Blog post added");
            setIsSubmitted(false);
            route('/blog')
        })
    }

    const handleClear = () => {
        setTitle('');
        setAuthor('');
        setBody('');
    }

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Title</label>
            <input
              type="text"
              aria-label="title"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label>Author</label>
            <input
              type="text"
              aria-label="author"
              required
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <div>
            <label>Text</label>
            <textarea
              required
              value={body}
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
          </div>
          {!isSubmitted && <button type="submit">Submit</button>}
          {isSubmitted && <button disabled>Adding blog post...</button>}
          <button onClick={handleClear}>Clear</button>
        </form>
      </div>
    );
}

export default CreateBlogPost;