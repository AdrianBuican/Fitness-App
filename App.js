import './App.css';
import Home from './components/Home/home'
import Workouts from './components/Workouts/workouts.jsx'
import About from './components/About/about.jsx'
import Plans from './components/Plans/plans.jsx'
import Testimonials from './components/Testimonials/testimonials.jsx'
import Join from './components/Join/join.jsx'
import Footer from './components/Footer/footer.jsx'

function App() {
  return (
    <div className="App">
          <Home />
          <Workouts />
          <About />
          <Plans />
          <Testimonials />
          <Join />
          <Footer />
    </div>
  );
}

export default App;
