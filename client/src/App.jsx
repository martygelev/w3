import './App.css'
import { Navbar, Footer, Services, Transactions, Welcome } from './components';


const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
      </div>
        <Welcome />

      <Services />
      <Transactions />
      <Footer />
    </div>
  )
}

export default App
