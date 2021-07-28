import { Switch, Route, Redirect } from 'react-router-dom';
import LayoutWelcome from '../components/Layout/LayoutWelcome';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Welcome from '../pages/Welcome';

function Routes() {
    return (
      <LayoutWelcome>
        <Switch>
          <Route path="/:token?" exact component={Welcome} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Redirect to="/" />
        </Switch>
      </LayoutWelcome>
    );
}

export default Routes;