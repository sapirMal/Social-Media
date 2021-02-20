import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import WrapperPage from './common/WrapperPage';
import Home from './user/pages/Home';
import Users from './user/pages/Users';
import UserPlaces from './places/pages/UserPlaces';
import Modal from './common/Modal';
function App() {
  return (
    <Router>


      <Switch>
        <Route path="/users" exact>
          <WrapperPage className='site-wrap sticky-wrapper is-sticky'>
            <Users />
          </WrapperPage>
        </Route>

        <Route path="/:userId/places" exact>
          <WrapperPage className='site-wrap sticky-wrapper is-sticky'>
            <UserPlaces />
          </WrapperPage>
        </Route>

        <Route path="/" >
          <WrapperPage className='site-wrap'>
            <Home />
          </WrapperPage>
        </Route>

        {/* <Route path="/places/new" exact>
          <NewPlace />
        </Route>
        <Redirect to="/" /> */}
      </Switch>

    </Router>
  );
}

export default App;
