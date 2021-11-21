// import  {useEffect} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import 'firebase/firestore'
// import {useDispatch, useSelector} from 'react-redux'
// import {statusUser} from './action/actionLogin'
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NavBar from './components/NavBar/NavBar';
import Details from "./components/Details/Details";
import CreatePostForm from './components/Create/CreatePostForm';

function App() {
  // const logueado = useSelector(state => state.active)
  // console.log(logueado,'logueado');
  // const dispatch = useDispatch()
  // useEffect(() => {
  //     dispatch(statusUser())
  //      // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

  return (
      <Router>
          <div className="container-fluid">
              <NavBar />
              <Switch >
                  <Route path='/login' component={Login}/>
                  <Route exact path='/home' component={Home}/>
                  <Route exact path='/Details/:id' component={Details}/>
                  <Route exact path={'/new'} component={CreatePostForm} />
              </Switch>
          </div>
      </Router>

     
      
  );
}

export default App;
