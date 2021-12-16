import { Route, Switch } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import RegPage from "./Pages/RegPage";
import ChartPage from "./Pages/ChartPage";
import MainNavigation from "./Navigation/MainNavigation";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <MainNavigation />
      <Switch>
        <Route path="/Log-In" exact>
          <HomePage/>
        </Route>
        <Route path="/Register" exact>
          <RegPage/>
        </Route>
        <Route path="/Activity-Graph">
          <ChartPage />
        </Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
