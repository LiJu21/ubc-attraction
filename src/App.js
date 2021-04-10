
import {BrowserRouter,Route, Switch} from 'react-router-dom'
import './App.css';
import MapContainer from './MapContainer';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/map">
        <MapContainer/>
      </Route>
    </Switch>
</BrowserRouter>
  );
}

export default App;
