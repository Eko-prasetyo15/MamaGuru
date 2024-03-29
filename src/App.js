import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./routes"
import Layout from "./Component/Layout"
import './index.css'
const App = () => {
  const renderWithLayout = (Component, props) => {
    return (
      <Layout {...props}>
        <Component {...props} />
      </Layout>
    );
  };
  // const [currentUser, SetcurrentUser] = useState(null);
  return (
    <Router history={History}>
      <Switch>
        {/* <BrowserRouter }> */}
          {routes.map((route, idx) => {
            return (
              <Route
                key={idx}
                exact={route.exact}
                path={route.path}
                render={(props) => renderWithLayout(route.component, props)}
              />
            );
          })}
        {/* </BrowserRouter>   */}
      </Switch>
    </Router>
  );
};
export default App;
