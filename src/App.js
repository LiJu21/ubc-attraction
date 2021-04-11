
import {BrowserRouter,Route, Switch} from 'react-router-dom'
import './App.css';
import Gallery from './Gallery/Gallery';
import MapContainer from './Map/MapContainer';
import Post from './post/Post';
import FakeGallery from './Gallery/FakeGallery'

function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route path="/fakegallery" component={FakeGallery}/>
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
