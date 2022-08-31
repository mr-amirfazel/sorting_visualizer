import './App.css';

import Navbar from './hoc/Navbar/Navbar';
import Slider from './components/Slider/Slider'
import Layout from './hoc/Layout/Layout';

function App() {

  


  return (
    <div className="App">
      <Navbar />
      {/* <div className="aha">
        <Slider />
      </div> */}
      <Layout />
    </div>
  );
}

export default App;
