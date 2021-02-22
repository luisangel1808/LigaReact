import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../containers/Home";
import Clasification from "../containers/Clasification";
import Outside from "../containers/Outside";
import NotFound from "../containers/NotFound";
import Layout from "../components/Layout";
import Videos from "../containers/Videos";
import Lichess from "../containers/Lichess";
import Tournament from "../containers/Tournament";
import AppContext from '../context/AppContext'
import useGamesData from "../hooks/useGamesData";
import AddPlayer from "../containers/AddPlayer";
import Select from "../containers/Select";
const App = () => {
  const initialState = useGamesData();
  return(
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/clasificacion" component={Clasification} />
            <Route exact path="/jugadores" component={Outside} />
            <Route exact path="/nuevoTorneo/torneo" component={Tournament} />
            <Route exact path="/nuevoTorneo" component={Tournament} /> {/*  poner select  */}
            <Route exact path="/registrarJugador" component={AddPlayer} />
            <Route exact path="/videos" component={Videos} />
            <Route exact path="/lichess" component={Lichess} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
}
export default App;
