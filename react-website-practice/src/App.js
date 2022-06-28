import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom'; 
import Home from './components/pages';

// React router not working, chack on that

function App() {
  return (
    <BrowserRouter>  
        <Home />
    </BrowserRouter>
  );
}

export default App;
