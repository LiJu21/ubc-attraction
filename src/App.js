
import {BrowserRouter,Route, Switch} from 'react-router-dom'
import './App.css';
import Gallery from './Gallery/Gallery';
import MapContainer from './Map/MapContainer';
import Post from './post/Post';

function App() {
  //localStorage.clear()
  //localStorage.setItem("wreckbeach",JSON.stringify(photos))  
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/map">
          <MapContainer/>
        </Route>
        <Route path="/post/*" component = {Post}/>
        <Route path="/gallery/*" component = {Gallery}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
