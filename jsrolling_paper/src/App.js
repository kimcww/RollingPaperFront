import { useDispatch } from "react-redux";
import Header from './components/header/Header';
import Main from "./components/Main";
import { loginUser } from "./features/login/loginSlice";

function App() {

  return (
        <Main/>
  );
}

export default App;
