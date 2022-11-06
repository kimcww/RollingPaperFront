import Header from './components/header/Header';
import axios from 'axios';
import Main from "./components/Main";

axios.defaults.baseURL = process.env.REACT_APP_API_SERVER

function App() {

  return (
        <Main/>
  );
}

export default App;
