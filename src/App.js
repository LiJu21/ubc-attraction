
import {BrowserRouter,Route, Switch} from 'react-router-dom'
import './App.css';
import Gallery from './Gallery/Gallery';
import MapContainer from './Map/MapContainer';
import Post from './post/Post';
import ExampleGallery from './Gallery/ExampleGallery'

function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route path="/examplegallery" component={ExampleGallery}/>
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
