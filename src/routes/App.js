import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../containers/Home";
import Clasification from "../containers/Clasification";
import Outside from "../containers/Outside";
import NotFound from "../containers/NotFound";
import Layout from "../components/Layout";
import Videos from "../containers/Videos";
import Lichess from "../containers/Lichess";

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/clasificacion" component={Clasification} />
        <Route exact path="/jugadores" component={Outside} />
        <Route exact path="/videos" component={Videos} />
        <Route exact path="/lichess" component={Lichess} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
