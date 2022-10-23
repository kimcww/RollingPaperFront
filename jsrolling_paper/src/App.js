import { useDispatch } from "react-redux";
import Header from './components/header/Header';
import { loginUser } from "./features/login/loginSlice";

function App() {

  return (
        <Header/>
  );
}

export default App;
