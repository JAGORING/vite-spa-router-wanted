import './App.css';
import Route from './components/Route';
import About from './pages/About';
import Root from './pages/Root';
import Router from './routes';

function App() {
  return (
    <Router>
      <Route path="/" component={<Root />} />
      <Route path="/about" component={<About />} />
    </Router>
  );
}

export default App;
