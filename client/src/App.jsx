import './App.css'
import {
  Navbar,
  Footer,
  Services,
  Transactions,
  Welcome
} from "./components";
import Blog from './components/Blog';



const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
      </div>
      {/* <Welcome /> */}
      <div className='w-96'>
        <hr />
        
      <Blog />
      <hr />
      </div>

      {/* <Services /> */}
      {/* <Transactions /> */}
      {/* <Footer /> */}
    </div>
  )
}

export default App
