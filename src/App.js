import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as ROUTES from "Routes";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path={ROUTES.HOME_LINK} component={ROUTES.HOME} />
          <Route exact path={ROUTES.STEP_2_LINK} component={ROUTES.STEP_2} />
          <Route exact path={ROUTES.STEP_3_LINK} component={ROUTES.STEP_3} />
          <Route exact path={ROUTES.RESULT_LINK} component={ROUTES.RESULT} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
