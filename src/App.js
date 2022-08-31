import './App.css';
// import Slider from '@mui/material/Slider';

import Navbar from './hoc/Navbar/Navbar';
import Slider from './components/Slider/Slider'

function App() {

  const changeHandler = (e, data) => {
    console.log(data);
  }

  const color = '#282c34';

  return (
    <div className="App">
      <Navbar />
      <div className="aha">
        <Slider />
      </div>
    </div>
  );
}

export default App;
