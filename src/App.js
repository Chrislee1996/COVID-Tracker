import logo from './logo.svg';
import './App.css';
import Pages from './page/Pages'
import CountryList from './components/CountryList'
import {BrowserRouter} from 'react-router-dom'


function App() {
  return (
    <div>
      <BrowserRouter>
      <CountryList/>
      <Pages/>
      </BrowserRouter>
    </div>
  );
}

export default App;
