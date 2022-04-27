import { useState } from 'react';

const CreateBlogPost = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [body, setBody] = useState('');
    const [keywords, setKeywords] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author, keywords };
        console.log(blog);
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
            <input
              type="text"
              aria-label="title"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              aria-label="author"
              required
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <div>
            <textarea
              required
              value={body}
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
          </div>
          <button type="submit">Submit</button>
          <button onClick={handleClear}>Clear</button>
        </form>
      </div>
    );
}

export default CreateBlogPost;