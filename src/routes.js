import { BrowserRouter, Route, Switch } from "react-router-dom";
//import Navbar from './components/NavBar';
import Home from './pages/Home';
import Emergency from './pages/Emergency';
import Ranking from './pages/Ranking';
import Direct from './pages/Direct';
import Header from "./components/Header";
import Transports from "./pages/Transports";
import TransportDetail from "./pages/TransportDetail";
import Report from "./pages/Report";

function Router() {
    const signOut = false;


    return (
        <BrowserRouter>
            {signOut && (<Header />)}
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/report" component={Report} />
                <Route path="/emergency" component={Emergency} />
                <Route path="/ranking" component={Ranking} />
                <Route path="/direct" component={Direct} />
                <Route path="/transports" component={Transports} />
                <Route path={("/transport-detail", "/transport-detail/:param?")} component={TransportDetail} exact  />
            </Switch>
      </BrowserRouter>
    );
}

export default Router;
