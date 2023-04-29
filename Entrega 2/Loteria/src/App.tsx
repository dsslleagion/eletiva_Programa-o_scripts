import { Provider } from "./contexts";
import Principal from "./pages/Principal";
import './App.css'
import Routes from "./routes";
import Rotas from "./routes/rotas/rotas";
import { Route } from "react-router-dom";


function App() {

  return (
    <Provider>
      <Principal />
    </Provider>
  )
}

export default App;
