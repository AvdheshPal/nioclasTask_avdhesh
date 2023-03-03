import logo from './logo.svg';
import './App.css';
import { Home } from './components/Home';
import {MathJaxContext} from 'better-react-mathjax'

function App() {
  return (
    <MathJaxContext>
    <div className="App">
      <Home/>
    </div>
    </MathJaxContext>
  );
}

export default App;
