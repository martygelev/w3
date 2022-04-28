import { Link } from 'react-router-dom';
const NotFound = () => {
    return (
      <div>
        <h1>NotFound</h1>

        <hr />

        <Link to={'/'}>
          <h2>back to home</h2>
        </Link>
      </div>
    );
};

export default NotFound;