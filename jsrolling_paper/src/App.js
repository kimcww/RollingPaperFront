import Header from './components/header/Header';
import axios from 'axios';
import cookies from 'react-cookies';  

axios.defaults.baseURL = process.env.REACT_APP_API_SERVER

function App() {

  return (
        <Header/>
  );
}

export default App;
