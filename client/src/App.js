import './App.css';

import Footer from './components/Footer';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Transactions from './components/Transactions';
import Welcome from './components/Welcome';

const App = () => {
  return (
    <div className="">
      <div className="bg-dark">
        <Navbar />
        <Welcome />
      </div>
      <div>
        <Services />
        <Transactions />
        <Footer />
      </div>
    </div>
  );
};

export default App;
