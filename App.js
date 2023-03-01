import './App.css';
import Home from './components/Home/Home'
import Programs from './components/programs/programs'
import About from './components/About/About.jsx'
import Plans from './components/Plans/plans.jsx'
import Testimonials from './components/Testimonials/testimonials.jsx'

function App() {
  return (
    <div className="App">
          <Home />
          <Programs />
          <About />
          <Plans />
          <Testimonials />
    </div>
  );
}

export default App;
