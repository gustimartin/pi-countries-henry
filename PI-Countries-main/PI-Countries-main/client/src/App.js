import './App.css';
import Home from './components/Home'
import Detail from './components/Detail';
import Activities from './components/Activities';
import Landing from './components/Landing';
import AllActivities from './components/AllActivities';
import { Route } from 'react-router-dom'


function App() {

  return (
    <div className="App">
     <Route exact path='/' component={Landing} />
     <Route exact path="/Home" component= {Home}  />
     <Route exact path="/Detail/:id" component={Detail}/>
     <Route exact path="/Activities" component={Activities} />
     <Route exact path='/activities/all' component={AllActivities}/>
    </div>
  );
}

export default App;
