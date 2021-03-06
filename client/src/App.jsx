import './App.css'
import {
  Navbar,
  Services,
  Transactions,
  Welcome,
  Footer
} from "./components";
import Blog from './components/Blog/Blog';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogPost from './components/Blog/BlogPost';
import CreateBlogPost from './components/Blog/CreateBlogPost';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="gradient-bg-welcome">
          <Navbar />
          <Welcome />
          </div>
          <Services />
          <Transactions />
        {/* <Routes>
          <Route exact path="/" element={<Welcome />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/add" element={<CreateBlogPost />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/services" element={<Services />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="*" element={<NotFound />} />
        </Routes> */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App
