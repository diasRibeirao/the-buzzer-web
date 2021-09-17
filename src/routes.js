import { BrowserRouter, Route, Switch } from "react-router-dom";
//import Navbar from './components/NavBar';
import Home from './pages/Home';
import Emergency from './pages/Emergency';
import Ranking from './pages/Ranking';
import Header from "./components/Header";

function Router() {


    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/emergency" component={Emergency} />
                <Route path="/ranking" component={Ranking} />
            </Switch>
      </BrowserRouter>
    );
}

export default Router;