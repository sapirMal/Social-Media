import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import WrapperPage from './common/WrapperPage';
import Home from './user/pages/Home';
import Users from './user/pages/Users';

function App() {
  return (
    <Router>


      <Switch>
        <Route path="/users" exact>
          <WrapperPage className='site-wrap is-sticky'>
            <Users />
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
