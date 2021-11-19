import  {useEffect} from 'react';
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
// import Navbar from './components/Navbar';

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
              {/* <Navbar /> */}
              <Switch >
                  <Route path='/login' component={Login}/>
                  <Route exact path='/home' component={Home}/>
              </Switch>
          </div>
      </Router>

     
      
  );
}

export default App;
